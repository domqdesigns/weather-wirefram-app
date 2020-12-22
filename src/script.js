function search(event) {
    event.preventDefault();
    let h1 = document.querySelector("h1");
    h1.innerHTML = "This week in " + searchForm;
    let cityInput = document.querySelector("#city-input");
    h1.innerHTML = "This week in " + cityInput.value;

}
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

let now = new Date();
let h3 = document.querySelector("small");
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
    hour = "0${hour}";
}
let mins = now.getMinutes();
if (mins < 10) {
    mins = "0" + mins;
}
h3.innerHTML = "December " + date + ", 2020 " + hour + ":" + mins;


let dayIndex = now.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[dayIndex];
let weekdays = document.querySelectorAll("#date");
weekdays.forEach(day);




function showTemperature(response) {
    document.querySelectorAll("#temp").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humiditiy;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed);
}


function searchCity(city) {
    let apiKey = "65b7bd3ec9f1326a6935f2c5c17f8047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#cityInput").value;
    searchCity(city);
}

function searchLocation(position) {
    let apiKey = "65b7bd3ec9f1326a6935f2c5c17f8047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation)
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getCurrentPosition);