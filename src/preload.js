const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // node: () => process.versions.node,
  // chrome: () => process.versions.chrome,
  // electron: () => process.versions.electron,
  // ping: () => ipcRenderer.invoke('ping'),
  openNewWindow: (url) => ipcRenderer.send('open-new-window', url),
  hideDomMenu: (callback) => ipcRenderer.on('hide-dom-menu', callback),
  updateHashUrl: (hash) => ipcRenderer.send('update-window-url', hash),
});