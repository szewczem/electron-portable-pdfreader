///// Open hash url in a new window /////
document.addEventListener('click', (event) => {
  const target = event.target.closest('a');
  const url = target.getAttribute('href');

  if (event.shiftKey && !url.includes('http')) {
    window.electronAPI.openNewWindow(url);
  }

  if (event.ctrlKey || event.shiftKey) {
    event.preventDefault();
  }
});

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
window.addEventListener('DOMContentLoaded', sendCurrentHash);
window.addEventListener('hashchange', sendCurrentHash);
