const time = document.querySelector('.time')
const dateHTML = document.querySelector('.date')
const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' }

var date = new Date();
var currentTime = date.toLocaleTimeString();
var currentDate = date.toLocaleDateString('en-EN', options);

function showTime() {
    date = new Date();
    currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

function showDate() {
    date = new Date();
    currentDate = date.toLocaleDateString('en-EN', options);
    dateHTML.textContent = currentDate;
}

showTime();