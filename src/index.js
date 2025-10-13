const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('node:path');
const fs = require('fs');
const urlModule = require('url');


///// Track windows /////
let windowIdCounter = 0;
let windows = new Map();

///// Create browser window /////
function createWindow() {
  let mainWindow = new BrowserWindow({    
    show: false,
    width: 984,
    height: 668,
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

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
    windows.delete(0);
  });

  windows.set(0, { win: mainWindow, hashUrl: '#main' });

  ///// Open the DevTools /////
  mainWindow.webContents.openDevTools(); 
  
  ///// Download PDF /////
  mainWindow.webContents.session.on('will-download', (event, item) => {
    event.preventDefault();
    let filename = item.getFilename();    // getting pdf name
    let fileUrl = item.getURL();
    let fileRelativePath = fileUrl.split('/').filter(part => part);
    let fileEndPartOfUrl = fileRelativePath.slice(-2).join('/');
    let fileDir = fileEndPartOfUrl.slice(0, -17);    // removing pdf viewer settings from src
    let pdfSrc = path.join(__dirname, 'doc/' + fileDir)
    let pdfPath = path.win32.normalize(pdfSrc.replace('file:///', ''));
    let savePath = path.join(app.getPath('downloads'), filename);  
    // console.log(`Filename: ${filename}`);
    // console.log(`Downloading: ${pdfPath} to ${savePath}`);

    ///// Create custom dialog for downloading /////
    dialog.showSaveDialog({
      title: 'Save PDF',
      defaultPath: savePath,
      filters: [{ name: 'PDF files', extensions: ['pdf'] }]
    }).then(result => {
      if (!result.canceled && result.filePath) {
        savePath = result.filePath;
        try {
          fs.copyFileSync(pdfPath, savePath);

          const now = new Date();
          fs.utimesSync(savePath, now, now);    // save with current date
        } catch (err) {
          console.error('Error copying file:', err);
        }
      }
    }).catch(err => {
      console.error('Error in showSaveDialog:', err);
    });   
  });

  ///// Open external url in a default web browser /////
  mainWindow.webContents.on('will-navigate', function(event, reqUrl) {
    //console.log(reqUrl)
    let isExternal = reqUrl.includes('https')
    if(isExternal) {
      event.preventDefault();
      shell.openExternal(reqUrl);
    }
  });
};

///// Start browser window /////
app.whenReady().then(() => {
  createWindow(); 
});

///// Open hash-based url in a new window /////
ipcMain.on('open-new-window', (event, url) => {
  ///// Focus and hide menubar for "newWindow" if exist /////  
  // console.log(`\nRequest to open: ${url}`);
  // console.log('Currently tracked windows:');
  // for (const [id, winObj] of windows.entries()) {
  //   console.log(` - ID: ${id} | hashUrl: ${winObj.hashUrl}`);
  // }    // console checking + line below

  for (const [id, winObj] of windows.entries()) {
    if (!winObj.win.isDestroyed() && winObj.hashUrl === url) {
      // console.log(`Already oppened (ID: ${id})`);
      winObj.win.focus();
      winObj.win.webContents.send('hide-dom-menu');
      return;
    }
  }

  ///// If "newWindow" doesn't exist, update and create /////
  const id = ++windowIdCounter;

  const newWindow = new BrowserWindow({
    width: 984,
    height: 668,
    autoHideMenuBar: true,
    show: false,
    title: 'EPP',
    icon: path.join(__dirname, 'icon/logo_1000_1000.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });  
  
  const loadUrl = urlModule.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
    hash: url,
  });
  
  newWindow.maximize(); 
  newWindow.loadURL(loadUrl);  

  newWindow.once('ready-to-show', () => {
    newWindow.show()
  });

  ///// Store in map /////
  windows.set(id, { win: newWindow, hashUrl: url });

  newWindow.on('closed', () => {
    windows.delete(id);
  }); 

  ///// Open external url in a default web browser /////
  newWindow.webContents.on('will-navigate', function(event, reqUrl) {
    //console.log(reqUrl)
    let isExternal = reqUrl.includes('https')
    if(isExternal) {
      event.preventDefault();
      shell.openExternal(reqUrl);
    }
  });
});

ipcMain.on('update-window-url', (event, newHashUrl) => {
  const senderWindow = BrowserWindow.fromWebContents(event.sender);
  for (const [id, winObj] of windows.entries()) {
    if (winObj.win === senderWindow) {
      winObj.hashUrl = newHashUrl;
      break;
    }
  }
});

app.on('before-quit', () => {
  app.exit(0);
});

///// Quit when all windows are closed /////
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
