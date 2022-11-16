const popupContainer = document.querySelectorAll('.popup-container');

for (const [index, item] of popupContainer.entries()) {
    setTimeout(() => {
        item.style.display = 'flex';
    }, 800 * index)
}