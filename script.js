let timing = document.querySelector(".value-container");
let sec = 1;
let min = 0;
let hour = 0;
let progress = 0;
let timerOn = true;
function startTimer() {
	timerOn = false;
	progress = setInterval(() => {
		timing.textContent = `${hour % 24}:${min % 60}.${sec % 60}`;
		sec++;
		//console.log(sec);
		if (Math.floor(sec % 100) === 0) {
			min++;
			//console.log(min);
			if (Math.floor(min % 60) === 0) {
				hour++;
				//console.log(min);
			}
		}
	}, 1000);
}
