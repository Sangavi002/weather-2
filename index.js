const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const container = document.getElementById('container')
const weatherContainer = document.getElementsByClassName('weather-container');

function onSearch() {
    let search = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=923311f5802fadc2ef20471902ab62e2`)
    .then((res) => {
        return res.json()
    }).then(result => {
        getWeatherData(result.id);
    })
    .catch((err) => {
        console.log(err)
    })
}

function getWeatherData(id) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=923311f5802fadc2ef20471902ab62e2`)
    .then((res) => {
        return res.json()
    }).then(result => {
        console.log(result.list);
    })
    .catch((err) => {
        console.log(err)
    })
}

