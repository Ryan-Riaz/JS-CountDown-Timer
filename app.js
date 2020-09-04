let daysEl = document.querySelector(".days");
let hoursEl = document.querySelector(".hours");
let minsEl = document.querySelector(".mins");
let secondsEl = document.querySelector(".seconds");

const MY_TIME = "20 Jun 2021";

function timer() {
	let waitDate = new Date(MY_TIME);
	let now = new Date();

	let totalSeconds = (waitDate - now) / 1000;

	let days = Math.floor(totalSeconds / 3600 / 24);
	let hours = Math.floor((totalSeconds / 3600) % 24);
	let mins = Math.floor((totalSeconds / 60) % 60);
	let seconds = Math.floor(totalSeconds % 60);

	//checking in the console
	console.log(days, hours, mins, seconds);

	// updating in dom
	daysEl.textContent = formatTime(days);
	hoursEl.textContent = formatTime(hours);
	minsEl.textContent = formatTime(mins);
	secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

timer();
// start countdowning
setInterval(timer, 1000);
