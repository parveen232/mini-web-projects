const cookieCard = document.querySelector('.cookie-card');
const btn = document.querySelector('.btn');

setTimeout(showCookieCard, 1500);

function showCookieCard() {
    cookieCard.style.display = 'flex';
}

btn.addEventListener('click', () => {
    cookieCard.style.display = 'none';
})

