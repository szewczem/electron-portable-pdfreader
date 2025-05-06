const { app, BrowserWindow, Menu, ipcMain, dialog, shell } = require('electron');
const path = require('node:path');
const fs = require('fs');


let mainWindow;
let newWindow;

// Hide aplication default menubar //
Menu.setApplicationMenu(false);

// Start a browser window //
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });  
});

// Create a browser window //
function createWindow() {
  if (mainWindow) return;
  mainWindow = new BrowserWindow({    
    show: false,
    width: 750,
    height: 630,
    title: 'EPP',
    center:true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon/logo_1000_1000.png'),
    webPreferences: {
      nativeWindowOpen: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  });  
  mainWindow.maximize();  
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // Open the DevTools //
  //mainWindow.webContents.openDevTools();    
  
  // Download PDF //
  mainWindow.webContents.session.on('will-download', (event, item) => {
    event.preventDefault();
    const filename = item.getFilename();    // getting pdf name
    const fileUrl = item.getURL();
    const fileRelativePath = fileUrl.split('/').filter(part => part);
    const fileEndPartOfUrl = fileRelativePath.slice(-2).join('/');
    let fileDir = fileEndPartOfUrl.slice(0, -17);    // removing pdf viewer settings from src
    //console.log(fileDir);
    const pdfSrc = path.join(__dirname, 'doc/' + fileDir)
    const pdfPath = path.win32.normalize(pdfSrc.replace('file:///', ''));
    let savePath = path.join(app.getPath('downloads'), filename);  
    //console.log(filename);
    //console.log(pdfSrc);
    //console.log(savePath);  
    //console.log(`Downloading: ${pdfPath} to ${savePath}`);

    // creating custom dialog for downloading //
    dialog.showSaveDialog({
      title: 'Save PDF',
      defaultPath: savePath,
      filters: [{ name: 'PDF files', extensions: ['pdf'] }]
    }).then(result => {
      //console.log(result.filePath)
      if (!result.canceled && result.filePath) {
        savePath = result.filePath;
        //console.log(result.filePath);        
        fs.copyFileSync(pdfPath, savePath);
      }
    });    
  });

  // open external url in a default web browser //
  mainWindow.webContents.on('will-navigate', function(e, reqUrl) {
    //console.log(reqUrl)
    let isExternal = reqUrl.includes('https')
    if(isExternal) {
      e.preventDefault();
      shell.openExternal(reqUrl);
    }
  });
};

// Open hash-based url in a new window //
ipcMain.on('open-new-window', (event, url) => {
  newWindow = new BrowserWindow({
    width: 750,
    height: 630,
    autoHideMenuBar: true,
    title: 'EPP',
    icon: path.join(__dirname, 'icon/logo_1000_1000.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });  
  //newWindow.setTitle(newTitle);
  newWindow.loadURL(`${path.join(__dirname, 'index.html' + url)}`);  

  // open external url in a default web browser //
  newWindow.webContents.on('will-navigate', function(e, reqUrl) {
    //console.log(reqUrl)
    let isExternal = reqUrl.includes('https')
    if(isExternal) {
      e.preventDefault();
      shell.openExternal(reqUrl);
    }
  });
});

app.on('before-quit', () => {
  app.exit(0);
});

// Quit when all windows are closed //
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
