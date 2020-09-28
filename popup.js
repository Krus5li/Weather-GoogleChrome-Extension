function getWeather(lat, lon) {
    var key = '853a11ca1ce30368c005a8b414550cf3';
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      getData(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  function getData(data){
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = data.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = data.name;
  }
  
  window.onload = function() {
    getWeather(43.07, -89.40);
  }