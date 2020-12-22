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

let dayIndex = date.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[dayIndex];

function showday(dayElement) {

};
let weekdays = document.querySelectorAll("#date");
weekdays.forEach(showday);


function showPosition(position) {
    let apiKeyHourly = "fb19ad2cc7b8c692bbffb71e9343e318";
    let apiUrlHourly = "https://api.openweathermap.org/data/2.5/forecast/hourly?q=Paris&appid=b19ad2cc7b8c692bbffb71e9343e318&units=imperial";

}
axios.get(apiUrlHourly).then(showTemperature);

function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition)

    let currentCity = document.querySelector("#city");
    currentCity.innerHTML = ('This week in ${city}');

}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);


function showTemperature(response) {
    document.querySelectorAll("#temp").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#card-text-h").innerHTML = response.data.main.humiditiy;

}