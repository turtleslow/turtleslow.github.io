document.addEventListener('keydown', (event) => {
    document.body.innerHTML = `stop typing: ${event.key}`;
}, false);
