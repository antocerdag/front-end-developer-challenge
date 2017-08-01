$.ajax({
	url: 'https://api.darksky.net/forecast/30ba70758a8f4807636a0e9d8a6a8447/37.8267,-122.4233',
	type: 'GET',
	dataType: 'json',
})
.done(function(data) {
	console.log(data);
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
