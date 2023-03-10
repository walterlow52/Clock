let clock = () => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time_period = "";
	time_period = hours < 12 ? "AM" : "PM";

	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	let time = `${hours}:${minutes}:${seconds}`
	document.getElementById("clock").innerHTML = time + ":" + time_period;
	setTimeout(clock, 1000);
}

clock();
