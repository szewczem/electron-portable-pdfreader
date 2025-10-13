///// Open hash url in a new window /////
function openNewWindow(event) {
  const target = event.target.closest('a');

  if (target && typeof target.getAttribute === 'function') {
    const url = target.getAttribute('href');
    
    if (event.shiftKey && !url.includes('http')) {
      window.electronAPI.openNewWindow(url);
    }
  }

  if (event.ctrlKey || event.shiftKey) {
    event.preventDefault();
  }
};

///// Hide menubar if "newWindow" exist /////
window.electronAPI.hideDomMenu(() => {
  hideMenu()
  hideHelpInfo()
});

///// Hash change in windows map /////
function sendCurrentHash() {
  const hash = window.location.hash || '#main';
  if (window.electronAPI && typeof window.electronAPI.updateHashUrl === 'function') {
    window.electronAPI.updateHashUrl(hash);
  }
}

////// Update hash on load / when user navigate /////
window.addEventListener('click', openNewWindow)
window.addEventListener('DOMContentLoaded', sendCurrentHash);
window.addEventListener('hashchange', sendCurrentHash);
