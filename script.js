let timing = document.querySelector(".value-container");
let sec = 1;
let min = 0;
let hour = 0;
let progress = 0;
let timerOn = true;
function startTimer() {
	if (timerOn) {
		timerOn = false;
		progress = setInterval(() => {
			if (sec % 60 < 10 && min % 60 < 10 && hour % 24 < 10) {
				timing.textContent = `0${hour % 24}:0${min % 60}:0${sec % 60}`;
			}
			if (sec % 60 >= 10 && min % 60 < 10 && hour % 24 < 10) {
				timing.textContent = `0${hour % 24}:0${min % 60}:${sec % 60}`;
			}
			if (sec % 60 < 10 && min % 60 >= 10 && hour % 24 < 10) {
				timing.textContent = `0${hour % 24}:${min % 60}:0${sec % 60}`;
			}
			if (sec % 60 >= 10 && min % 60 >= 10 && hour % 24 < 10) {
				timing.textContent = `0${hour % 24}:${min % 60}:${sec % 60}`;
			}
			if (sec % 60 < 10 && min % 60 < 10 && hour % 24 >= 10) {
				timing.textContent = `${hour % 24}:0${min % 60}:0${sec % 60}`;
			}
			if (sec % 60 >= 10 && min % 60 < 10 && hour % 24 >= 10) {
				timing.textContent = `${hour % 24}:0${min % 60}:${sec % 60}`;
			}
			if (sec % 60 < 10 && min % 60 >= 10 && hour % 24 >= 10) {
				timing.textContent = `${hour % 24}:${min % 60}:0${sec % 60}`;
			}
			if (sec % 60 >= 10 && min % 60 >= 10 && hour % 24 >= 10) {
				timing.textContent = `${hour % 24}:${min % 60}:${sec % 60}`;
			}
			//timing.textContent = `${hour % 24}:${min % 60}.${sec % 60}`;
			sec++;
			//console.log(sec);
			if (Math.floor(sec % 60) === 0) {
				min++;
				//console.log(min);
				if (Math.floor(min % 60) === 0) {
					hour++;
					//console.log(min);
				}
			}
		}, 1000);
	}
}
function pauseTimer() {
	timerOn = true;
	clearInterval(progress);
}
function resetTimer() {
	timerOn = true;
	clearInterval(progress);
	timing.textContent = `00:00.00`;
	sec = 1;
	min = 0;
	hour = 0;
}
