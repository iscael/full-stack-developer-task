(function() {
	clearInterval();//this clears the interval of the countdown
	document.getElementById("cta_title").innerHTML = php_vars.title;//put the title, send in the params
	setDateCountdown();//start the countdown
})();

/*
======================================================
This function starts the countdown
======================================================
*/


function setDateCountdown(){
	//start calculating the countdown date
	var eventDate = new Date(php_vars.remaining);
	var dateArray = getDateDifference(eventDate);
	setHtmlDate(dateArray);
	setInterval(
		//each second send the new calculated date for the countdown
		function(){
			var dateArray = getDateDifference(eventDate);
			setHtmlDate(dateArray);
		}, 1000);
}

/*
======================================================
This function calculates the difference between a
given date and now and returns and array with days, 
hours, minutes and seconds.
======================================================
*/

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

/*
======================================================
This function sets the date of the countdown, the
parameters it receive is an array with days, hours, 
minutes and seconds
======================================================
*/



function setHtmlDate(dateArray){
	document.getElementById("cta_countdown_days").innerHTML = dateArray.days;
	document.getElementById("cta_countdown_hours").innerHTML = dateArray.hours;
	document.getElementById("cta_countdown_mins").innerHTML = dateArray.minutes;
	document.getElementById("cta_countdown_secs").innerHTML = dateArray.seconds;
}

/*
======================================================
This function adds the 0 at the start of the date if
its less than 10
======================================================
*/

function dateTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}