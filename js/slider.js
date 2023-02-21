
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

var date = new Date();
var hours = date.getHours();
let timeOfDay = getTimeOfDay(hours);
let bgNum = Math.round(Math.random() * (20 - 1) + 1);

function getTimeOfDay(hours) {
    switch (Math.trunc(hours / 6)) {
        case 0: return 'night';
        case 1: return 'morning';
        case 2: return 'afternoon';
        case 3: return 'evening';
    }
}

function getRandomNum() {
    bgNum = Math.round(Math.random() * (20 - 1) + 1);
}

function setBg() {
    bgNum = bgNum.toString().padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    }
}

setBg();

function getSlideNext() {
    bgNum = +bgNum + 1;
    if (bgNum > 20) bgNum = 1;
    setBg();
}

slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
    bgNum -= 1;
    if (bgNum < 1) bgNum = 20;
    setBg();
}

slidePrev.addEventListener('click', getSlidePrev);
