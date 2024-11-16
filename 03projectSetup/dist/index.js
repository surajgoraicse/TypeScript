"use strict";
const minute = document.querySelector("#min");
const hour = document.querySelector("#hr");
const second = document.querySelector("#sec");
const startTimer = document.querySelector("#start");
const stopTimer = document.querySelector("#stop");
const resetTimer = document.querySelector("#reset");
const laps = document.querySelector("#laps");
const list = document.querySelector("#list");
let secInterval, minInterval, hourInterval;
let sec = 0;
let min = 0;
let hr = 0;
let flag = false;
let lapseCount = 1;
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
    lapseCount = 1;
    list.innerHTML = "";
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
function handleLaps() {
    const li = document.createElement("li");
    const textNode = document.createTextNode("Laps " + (lapseCount) + "  ➡️ " + hr + " : " + min + " : " + sec);
    li.appendChild(textNode);
    list.appendChild(li);
    lapseCount++;
}
stopTimer.addEventListener("click", handleStop);
startTimer.addEventListener("click", handleStart);
resetTimer.addEventListener("click", handleReset);
laps.addEventListener("click", handleLaps);
