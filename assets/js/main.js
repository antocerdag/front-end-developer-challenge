$(document).ready(function() {
		// GEOLOCALIZACIÓN
	function getLocation(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(getPosition);
	  }else{
	  	alert("Geolocation is not supported by this browser.");
	  }
	  function getPosition(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			console.log(lat,long);
		}
	}
  getLocation();

	// API WEATHER
	https://api.darksky.net/forecast/[key]/[latitude],[longitude]

	$.ajax({
		url: 'https://api.darksky.net/forecast/30ba70758a8f4807636a0e9d8a6a8447/-33.4143,-70.6608',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log("success");
		console.log(data);
		var temperatura = (((data.currently.apparentTemperature-32) * 5/9).toFixed(1));
		var icono = data.currently.icon;
		var viento = data.currently.windSpeed;
		var humedad = data.currently.humidity;
		var uv = data.currently.uvIndex;
		var presion = data.currently.pressure;
		$(".grados").append(temperatura+"º");
		$(".icono").append("<img class='img-responsive' src='dist/img/"+icono +".png'>");
		$(".viento").append(viento+" m/s");
		$(".humedad").append(humedad+" %");
		$(".uv").append(uv);
		$(".presion").append(presion+" hPa");

		data.daily.data.forEach(function(ele){
			//console.log(ele);
			var max = ((((ele.apparentTemperatureMax-32) * 5/9).toFixed(1)));
			var min = ((((ele.apparentTemperatureMin-32) * 5/9).toFixed(1)));
			var icon = ele.icon;
			console.log(icon);
			$(".dias").append("<div class='row'><div class='col-md-6 col-xs-12 text-left'><img class='iconos-semana img-responsive ' src='dist/img/"+icon+".png'><p class='txt-datos-dias'>Monday</p></div><div class='col-md-6 col-xs-12 text-right'><p class='temperatura'>"+max+"º"+" - "+min+"º"+"</p></div></div>");

		});
		//TEMPERATURA DE LA SEMANA
		//var cero = 0;
		//var lunesMax = data.daily.cero.apparentTemperatureMax;
		//var lunesMin = data.daily.cero.apparentTemperatureMin;
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



