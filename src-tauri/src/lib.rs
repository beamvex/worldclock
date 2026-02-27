use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use std::sync::Mutex;
use tauri::Manager;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct WindowState {
    x: i32,
    y: i32,
    width: u32,
    height: u32,
    is_maximized: bool,
}

impl Default for WindowState {
    fn default() -> Self {
        Self {
            x: 100,
            y: 100,
            width: 1200,
            height: 800,
            is_maximized: false,
        }
    }
}

struct WindowStateMutex(Mutex<WindowState>);

fn get_state_file_path() -> Option<PathBuf> {
    dirs::config_dir().map(|dir| dir.join("com.worldclock.app").join("window-state.json"))
}

fn load_window_state_from_disk() -> WindowState {
    get_state_file_path()
        .and_then(|path| fs::read_to_string(path).ok())
        .and_then(|data| serde_json::from_str(&data).ok())
        .unwrap_or_default()
}

fn save_window_state_to_disk(state: &WindowState) {
    if let Some(path) = get_state_file_path() {
        if let Some(parent) = path.parent() {
            let _ = fs::create_dir_all(parent);
        }
        if let Ok(data) = serde_json::to_string_pretty(state) {
            let _ = fs::write(path, data);
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            let saved = load_window_state_from_disk();

            let window = app.get_webview_window("main").expect("main window not found");

            // Restore saved position and size
            let _ = window.set_position(tauri::PhysicalPosition::new(saved.x, saved.y));
            let _ = window.set_size(tauri::PhysicalSize::new(saved.width, saved.height));
            if saved.is_maximized {
                let _ = window.maximize();
            }

            // Store state in app managed state for event handlers
            let state = Mutex::new(saved);
            app.manage(WindowStateMutex(state));

            // Save state on window move, resize, and close
            let win = window.clone();
            let app_handle = app.handle().clone();
            window.on_window_event(move |event| {
                let state_mutex = app_handle.state::<WindowStateMutex>();
                let mut state = state_mutex.0.lock().unwrap();
                match event {
                    tauri::WindowEvent::Moved(position) => {
                        if !win.is_maximized().unwrap_or(false) {
                            state.x = position.x;
                            state.y = position.y;
                        }
                        save_window_state_to_disk(&state);
                    }
                    tauri::WindowEvent::Resized(size) => {
                        let maximized = win.is_maximized().unwrap_or(false);
                        state.is_maximized = maximized;
                        if !maximized {
                            state.width = size.width;
                            state.height = size.height;
                        }
                        save_window_state_to_disk(&state);
                    }
                    tauri::WindowEvent::CloseRequested { .. } => {
                        save_window_state_to_disk(&state);
                    }
                    _ => {}
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
