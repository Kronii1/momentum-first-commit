const API_KEY = "0e3d959b66216578eed1d3be1fe0942d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-div__box span:first-child");
      const city = document.querySelector("#weather-div__box span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather For you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
