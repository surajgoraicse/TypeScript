const minute: any = document.querySelector("#min");
const hour: any = document.querySelector("#hr");
const second: any = document.querySelector("#sec");
const startTimer: any = document.querySelector("#start");
const stopTimer: any = document.querySelector("#stop");
const resetTimer: any = document.querySelector("#reset");
const laps: any = document.querySelector("#laps");
const list: any = document.querySelector("#list");

let secInterval: any, minInterval: any, hourInterval: any;
let sec = 0;
let min = 0;
let hr = 0;
let flag = false;
let lapseCount = 1;

function handleStop(): void {
	flag = false;
	clearInterval(secInterval);
	clearInterval(minInterval);
	clearInterval(hourInterval);
}

function handleStart(): void {
	if (!flag) {
		flag = true;
		timer();
	}
}

function handleReset(): void  {
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

function timer(): void {
	secInterval = setInterval(() => {
		sec += 1;
		if (sec == 60) sec = 0;
		second.innerHTML = sec;
	}, 1000);

	minInterval = setInterval(() => {
		min += 1;
		if (min == 60) min = 0;
		minute.innerHTML = min;
	}, 1000 * 60);

	hourInterval = setInterval(() => {
		hr += 1;
		hour.innerHTML = hr;
	}, 1000 * 60 * 60);
}


function handleLaps(): void {
	
	const li = document.createElement("li");
	const textNode = document.createTextNode("Laps " + (lapseCount) +   "  ➡️ " + hr + " : "+ min+ " : "+ sec);
	li.appendChild(textNode);
	list.appendChild(li)
	lapseCount++;

}

stopTimer.addEventListener("click", handleStop);
startTimer.addEventListener("click", handleStart);
resetTimer.addEventListener("click", handleReset);
laps.addEventListener("click", handleLaps);
