import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

interface WindowState {
  x: number;
  y: number;
  width: number;
  height: number;
  isMaximized: boolean;
}

const stateFilePath = path.join(app.getPath('userData'), 'window-state.json');

function loadWindowState(): Partial<WindowState> {
  try {
    if (fs.existsSync(stateFilePath)) {
      const data = fs.readFileSync(stateFilePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Failed to load window state:', error);
  }
  return {};
}

function saveWindowState(window: BrowserWindow): void {
  try {
    const bounds = window.getBounds();
    const state: WindowState = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      isMaximized: window.isMaximized(),
    };
    fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2));
  } catch (error) {
    console.error('Failed to save window state:', error);
  }
}

function createWindow() {
  const savedState = loadWindowState();
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

  // Default window dimensions
  let windowOptions: Electron.BrowserWindowConstructorOptions = {
    width: savedState.width || 1200,
    height: savedState.height || 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    backgroundColor: '#1a1a2e',
    title: 'World Clock',
  };

  // Restore position if it was saved and is still valid
  if (savedState.x !== undefined && savedState.y !== undefined) {
    // Check if the window position is still within screen bounds
    if (
      savedState.x >= 0 &&
      savedState.y >= 0 &&
      savedState.x < screenWidth &&
      savedState.y < screenHeight
    ) {
      windowOptions.x = savedState.x;
      windowOptions.y = savedState.y;
    }
  }

  const mainWindow = new BrowserWindow(windowOptions);

  // Restore maximized state
  if (savedState.isMaximized) {
    mainWindow.maximize();
  }

  mainWindow.loadFile(path.join(__dirname, '../src/index.html'));

  // Save window state on resize, move, and close
  const saveState = () => saveWindowState(mainWindow);
  mainWindow.on('resize', saveState);
  mainWindow.on('move', saveState);
  mainWindow.on('close', saveState);

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
