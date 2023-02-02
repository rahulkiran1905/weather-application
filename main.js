const API_KEY = "YOUR_API_KEY_HERE";

document.querySelector("input[type='text']").addEventListener("keyup", function(event) {
  // get the city name entered by the user
  const cityName = event.target.value;

  // send the request to the OpenWeatherMap API
  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then(response => {
      // get the temperature, humidity, and wind speed from the API response
      let temperature = response.data.main.temp;
      let humidity = response.data.main.humidity;
      let windSpeed = response.data.wind.speed;

      // display the weather information
      document.querySelector("#temperature").innerHTML = `Temperature: ${temperature}`;
      document.querySelector("#humidity").innerHTML = `Humidity: ${humidity}`;
      document.querySelector("#windSpeed").innerHTML = `Wind Speed: ${windSpeed}`;
    })
    .catch(error => {
      // display the error message
      document.querySelector("#temperature").innerHTML = "Please enter a valid city name";
    });
});
