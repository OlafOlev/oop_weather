const ls = new LS();
const weatherLocation = ls.getcity();
const weather = new Weather(weatherLocation);
const ui = new UI();
document.addEventListener("DOMContentLoaded", getWeather);
const form = document.querySelector("#change-city");
form.addEventListener("submit", changeCityWeather);
function changeCityWeather(event) {
    const city = document.querySelector("#city-name").value;
    weather.changeCity(city);
    ls.setcity(city);
    getWeather();
    document.querySelector("#city-name").value = "";
    event.preventDefault();
}
function getWeather() {
    weather
        .getWeather()
        .then((data) => {
            ui.drawWeather(data);
        })
        .catch((error) => console.log(error));
}