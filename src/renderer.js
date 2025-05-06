// Open hash url in a new window //
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