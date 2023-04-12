let clock = () => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time_period = "";
	time_period = hours < 12 ? "AM" : "PM";
	clock12();

	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	let time = `${hours}:${minutes}:${seconds}`
	document.getElementById("clock").innerHTML = time + ":" + time_period;
}

	let clock12 = () => {
		hours = hours > 12 ? hours - 12 : hours;	
	}

/*let clock12 = () => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time_period = "";
	time_period = hours < 12 ? "AM" : "PM";

	hours = hours > 12 ? hours - 12 : hours;
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	let time = `${hours}:${minutes}:${seconds}`
	document.getElementById("clock").innerHTML = time + ":" + time_period;	
}*/

clock();
