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
		//TEMPERATURA DE LA SEMANA
		data.daily.data.forEach(function(ele){
			//console.log(ele);
			var max = ((((ele.apparentTemperatureMax-32) * 5/9).toFixed(1)));
			var min = ((((ele.apparentTemperatureMin-32) * 5/9).toFixed(1)));
			var icon = ele.icon;
			console.log(icon);
			$(".dias").append("<div class='row'><div class='col-md-6 col-xs-6 text-left'><img class='iconos-semana img-responsive ' src='dist/img/"+icon+".png'><p class='txt-datos-dias'>Monday</p></div><div class='col-md-6 col-xs-12 text-right'><p class='temperatura'>"+max+"º"+" - "+min+"º"+"</p></div></div>");

		});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


	// API FLICKR
	var url = "https://api.flickr.com/services/rest/";
	var key = "asryf546rt5dsg856df32gdr5yhdf";
	var perPage = 1;
	var currentPage = 1;
	var totalPhotos;
	var totalPages;
	var extras = "url_m, url_n, url_z, url_c, url_l, url_o";
	var reqParams;
	var interval;

function getUserPhotos(user) {
    reqParams = {
            "api_key": key,
            "method": "flickr.people.getPublicPhotos",
            "user_id": user,
            "extras": extras,
            "per_page": perPage,
            "page": currentPage,
            "format": "json",
            "nojsoncallback": 1
        };
    $.getJSON(url, reqParams, callBack);
}

function callBack(data, status) {
    var photoObj = data.photos;
    var totalPhotos = photoObj.total;
    var totalPages = photoObj.pages;
    listPhotos(photoObj.photo);
	}

$(function () {
	$.ajax({
	    url: "https://api.flickr.com/services/rest/",
	    data: {
	        method: "flickr.photos.search",
	        api_key: "9f57617f1a694b2d02fd4d0474b6357e",
	        tags: "weather",
	        format: "json",
	        nojsoncallback: 1
	    },
	    success: function (response) {
	    console.log(response)
	        $.each(response.photos.photo, function (index, value) {
	            //console.log(value);
	          var url = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '.jpg';
	          var a = $('<a>').attr({href: url});
	          var img = $('<img>').attr({src: url});
	          a.append(img);
	          $("body").append(a);
	        });
	    }
	});
})

	// foto irá en el body

});



