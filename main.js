// main.js — Electron entry (ESM to match Vite "type":"module")
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 360,
    height: 180,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    backgroundColor: '#00000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

// dev vs prod URL
const isDev = !app.isPackaged; // true when launched via `electron .`
const urlToLoad = isDev
  ? 'http://localhost:5173'                       // Vite dev server
  : `file://${path.join(__dirname, 'dist', 'index.html')}`; // built files

win.loadURL(urlToLoad);

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});