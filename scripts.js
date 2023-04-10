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

let clock12 = () => {
	let date12 = new Date();
	let hours12 = date12.getHours();
	let minutes12 = date12.getMinutes();
	let seconds12 = date12.getSeconds();

	let time_period12 = "";
	time_period12 = hours12 < 12 ? "AM" : "PM";

	hours12 = hours12 > 12 ? hours12 - 12 : hours12;
	hours12 = hours12 < 10 ? `0${hours12}` : hours12;
	minutes12 = minutes12 < 10 ? `0${minutes12}` : minutes12;
	seconds12 = seconds12 < 10 ? `0${seconds12}` : seconds12;

	let time12 = `${hours12}:${minutes12}:${seconds12}`
	document.getElementById("clock12").innerHTML = time12 + ":" + time_period12;
	setTimeout(clock12, 1000);	
}

clock12();
