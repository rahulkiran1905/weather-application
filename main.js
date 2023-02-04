const firebase = require("firebase");

// Initialize the Firebase app
firebase.initializeApp({
  apiKey: "AIzaSyA_gOaWh-a5m4Ikj_OyedgUqumvC-TXX08",
  authDomain: "weather-application-85f83.firebaseapp.com",
  projectId: "weather-application-85f83"
});

// Get a reference to the Firestore database
const db = firebase.firestore();

// Retrieve the API key from the "secrets" collection
db.collection("secrets").doc("api_key").get().then(function(doc) {
  const API_KEY = doc.data().api_key;
  
  // Use the API key to make API requests, etc.
});
const axios = require('axios');

// Get the city name from the user input
const cityName = document.querySelector("#cityInput").value;

// Retrieve the API key from the Firestore database
db.collection("secrets").doc("api_key").get().then(function(doc) {
  const API_KEY = doc.data().api_key;
  
  // Use the API key to make a request to the OpenWeather API
  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then(response => {
      // Get the temperature, humidity, and wind speed from the API response
      let temperature = response.data.main.temp;
      let humidity = response.data.main.humidity;
      let windSpeed = response.data.wind.speed;

      // Display the weather information
      document.querySelector("#temperature").innerHTML = `Temperature: ${temperature}`;
      document.querySelector("#humidity").innerHTML = `Humidity: ${humidity}`;
      document.querySelector("#windSpeed").innerHTML = `Wind Speed: ${windSpeed}`;
    })
    .catch(error => {
      // Display the error message
      document.querySelector("#temperature").innerHTML = "Please enter a valid city name";
    });
});
