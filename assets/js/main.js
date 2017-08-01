$(document).ready(function() {
		// GEOLOCALIZACIÓN
	function getLocation(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(getPosition);
	  }else{
	  	alert("Geolocation is not supported by this browser.");
	  }
	  function getPosition(position){
			var lat =position.coords.latitude;
			var long = position.coords.longitude;
			console.log(lat,long);
		}
	}
  getLocation();

	// API WEATHER
	https://api.darksky.net/forecast/[key]/[latitude],[longitude]

	$.ajax({
		url: 'https://api.darksky.net/forecast/30ba70758a8f4807636a0e9d8a6a8447/37.8267,-122.4233',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log("success");
		console.log(data);
		var temperatura = data.currently.apparentTemperature;
		console.log(temperatura);
		$(".grados").append(temperatura);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


	// API FLICKR
	$.ajax({
		url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b352bdbfb32a1ecdb35af15c9ea0c73e&tags=weather&format=json&auth_token=72157686954386546-73575d01ed50b88a&api_sig=cd9e06e56333ae1f7f7b567339286442',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data2) {
		console.log("success");
		console.log(data2);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	// foto irá en el body

});



