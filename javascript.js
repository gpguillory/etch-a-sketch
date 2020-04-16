const tileContainer = document.getElementById('tile-container');
for (let i = 0; i < 256; i++) {
    tileContainer.insertAdjacentHTML('afterend', '<div class="tiles"></div>');
}
