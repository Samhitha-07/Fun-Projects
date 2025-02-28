const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 450,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Secure communication
            nodeIntegration: true // Allows frontend scripts to work
        }
    });

    mainWindow.loadFile('index.html');
});

