"use strict";
const minute = document.querySelector("#min");
const hour = document.querySelector("#hr");
const second = document.querySelector("#sec");
const startTimer = document.querySelector("#start");
const stopTimer = document.querySelector("#stop");
const resetTimer = document.querySelector("#reset");
let secInterval, minInterval, hourInterval;
let sec = 0;
let min = 0;
let hr = 0;
let flag = false;
function handleStop() {
    flag = false;
    clearInterval(secInterval);
    clearInterval(minInterval);
    clearInterval(hourInterval);
}
function handleStart() {
    if (!flag) {
        flag = true;
        timer();
    }
}
function handleReset() {
    sec = 0;
    min = 0;
    hr = 0;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = min;
    handleStop();
}
function timer() {
    secInterval = setInterval(() => {
        sec += 1;
        if (sec == 60)
            sec = 0;
        second.innerHTML = sec;
    }, 1000);
    minInterval = setInterval(() => {
        min += 1;
        if (min == 60)
            min = 0;
        minute.innerHTML = min;
    }, 1000 * 60);
    hourInterval = setInterval(() => {
        hr += 1;
        hour.innerHTML = hr;
    }, 1000 * 60 * 60);
}
stopTimer.addEventListener("click", handleStop);
startTimer.addEventListener("click", handleStart);
resetTimer.addEventListener("click", handleReset);
