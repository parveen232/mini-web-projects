const fill = document.querySelector('.fill');
const unfilled = document.querySelector('.unfilled');
const checkMark = document.querySelector('.fa-check');
const exclamationMark = document.querySelector('.fa-exclamation');

// first sucess, second fail then random

setTimeout(sucessful, 300)
// console.log('sucess');

setTimeout(() => {
    // console.log('fail');
    reset();
    setTimeout(() => {
        fill.classList.remove('notransition');
    }, 10)
    setTimeout(failed, 20)
}, 7300)

setTimeout(() => {
    setInterval(() => {
        // console.log('random');
        reset();
        setTimeout(() => {
            fill.classList.remove('notransition');
        }, 10)
        setTimeout(pickRandom, 20)
    }, 7000)
}, 7000)

function pickRandom() {
    let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
        return failed();
    }
    return sucessful();
}

function reset() {
    unfilled.style.backgroundColor = 'rgb(228, 228, 228)';
    fill.style.width = '10px';
    fill.classList.add('notransition');
    fill.style.backgroundColor = 'rgb(0, 166, 255)';
    fill.classList.remove('changeShape');
    fill.classList.remove('disappear');
    checkMark.style.visibility = 'hidden';
    exclamationMark.style.visibility = 'hidden';
}

function sucessful() {
    fill.style.width = '300px';
    sucessColor();
    setTimeout(() => {
        sucessShapeChange();
        unfilled.style.backgroundColor = '#fff';
    }, 4000)
}

function sucessColor() {
    setTimeout(() => {
        fill.style.backgroundColor = 'green';
    }, 3000)
}

function sucessShapeChange() {
    fill.style.width = '70px';
    fill.classList.add('changeShape');
    setTimeout(() => {
        checkMark.style.visibility = 'visible';
    }, 500)
    setTimeout(() => {
        fill.classList.add('disappear');
    }, 1500)
}

function failed() {
    fill.style.width = '300px';
    failColor();
    setTimeout(() => {
        failShapeChange();
        unfilled.style.backgroundColor = '#fff';
    }, 4000)
}

function failColor() {
    setTimeout(() => {
        fill.style.backgroundColor = 'red';
    }, 3000)
}

function failShapeChange() {
    fill.style.width = '70px';
    fill.classList.add('changeShape');
    setTimeout(() => {
        exclamationMark.style.visibility = 'visible';
    }, 500)
    setTimeout(() => {
        fill.classList.add('disappear');
    }, 1500)
}

