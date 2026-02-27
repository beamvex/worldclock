use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize)]
struct WindowState {
    x: f64,
    y: f64,
    width: f64,
    height: f64,
    is_maximized: bool,
}

fn get_state_file_path() -> Option<PathBuf> {
    dirs::config_dir().map(|dir| dir.join("com.worldclock.app").join("window-state.json"))
}

#[tauri::command]
fn load_window_state() -> Option<WindowState> {
    let path = get_state_file_path()?;
    let data = fs::read_to_string(path).ok()?;
    serde_json::from_str(&data).ok()
}

#[tauri::command]
fn save_window_state(state: WindowState) -> Result<(), String> {
    let path = get_state_file_path().ok_or("Could not determine config directory")?;
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let data = serde_json::to_string_pretty(&state).map_err(|e| e.to_string())?;
    fs::write(path, data).map_err(|e| e.to_string())?;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![load_window_state, save_window_state])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
