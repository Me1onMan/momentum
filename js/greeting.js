const greeting = document.querySelector('.greeting');
const time = document.querySelector('.time')
const dateHTML = document.querySelector('.date')
const nameIn = document.querySelector('.name');
const options = { weekday: 'long', month: 'long', day: 'numeric' }

var date = new Date();
var currentTime = date.toLocaleTimeString();
var currentDate = date.toLocaleDateString('en-EN', options);
var hours = date.getHours();

const morning = 'morning';
const afternoon = 'afternoon';
const evening = 'evening';
const night = 'night';

function showTime() {
    date = new Date();
    currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

function showDate() {
    date = new Date();
    currentDate = date.toLocaleDateString('en-EN', options);
    dateHTML.textContent = currentDate;
}

function getTimeOfDay(hours) {
    switch (Math.trunc(hours / 6)) {
        case 0: return 'night';
        case 1: return 'morning';
        case 2: return 'afternoon';
        case 3: return 'evening';
    }
}

function showGreeting() {
    hours = date.getHours();
    greeting.textContent = `Good ${getTimeOfDay(hours)}`;
}

function setLocalStorage() {
    localStorage.setItem('name', nameIn.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameIn.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

showTime();