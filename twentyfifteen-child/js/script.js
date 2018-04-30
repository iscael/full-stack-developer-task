(function() {
	clearInterval();
	

	document.getElementById("cta_title").innerHTML = php_vars.title;
	setDateCountdown();
})();

function setDateCountdown(){
	var eventDate = new Date(php_vars.remaining);
	var dateArray = getDateDifference(eventDate);
	setHtmlDate(dateArray);
	setInterval(
		function(){
			var dateArray = getDateDifference(eventDate);
			setHtmlDate(dateArray);
		}, 1000);
}

function getDateDifference(date_future){
	var date_now = new Date();
	var response = {};
	// get total seconds between the times
	var delta = Math.abs(date_future - date_now) / 1000;

	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400);

	response.days = dateTwoDigits(days);

	delta -= days * 86400;

	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	response.hours = dateTwoDigits(hours);

	delta -= hours * 3600;

	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	response.minutes = dateTwoDigits(minutes);
	delta -= minutes * 60;

	// what's left is seconds
	var seconds =  Math.floor(delta % 60);

	response.seconds = dateTwoDigits(seconds);

	return response;

}

function setHtmlDate(dateArray){
	document.getElementById("cta_countdown_days").innerHTML = dateArray.days;
	document.getElementById("cta_countdown_hours").innerHTML = dateArray.hours;
	document.getElementById("cta_countdown_mins").innerHTML = dateArray.minutes;
	document.getElementById("cta_countdown_secs").innerHTML = dateArray.seconds;
}

function dateTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}