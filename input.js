//  global vars should go at the top  *define === create a new variable
var city = "chicago";
var kelvin = 273;



// code logic / order of events go here







//========================================= FUNCTIONS GO HERE ==========================================
function displayFiveDayWeatherInfo() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=a143faded1704189ef362b26079b8c5f";
   
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(weatherInfo) {
          // these are the five dates
        console.log(weatherInfo.list[8].dt_txt);
        console.log(weatherInfo.list[16].dt_txt);
        console.log(weatherInfo.list[24].dt_txt);
        console.log(weatherInfo.list[32].dt_txt);
        console.log(weatherInfo.list[39].dt_txt);
       
       
      });
}

function displayCurrentWeatherInfo() {
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=a143faded1704189ef362b26079b8c5f";
 
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(weatherInfo) {
      console.log(weatherInfo);
      var data = weatherInfo.json();

      return data;
    })
    .then(function(data){
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
  })

  }

$("#search-btn").on("click", function(event) {
    event.preventDefault();
    city = $("#search-input").val();
    console.warn("you clicked it")
    
 
    displayCurrentWeatherInfo();
    displayFiveDayWeatherInfo();

})

