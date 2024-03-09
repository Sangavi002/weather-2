const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const container = document.getElementById('container')
const weatherContainer = document.getElementsByClassName('weather-container');

function onSearch() {
    let search = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=923311f5802fadc2ef20471902ab62e2`)
    .then((res) => {
        return res.json()
    }).then(result => {
        console.log(result.list);
        let list = result.list;
        let finalList = [];

        let arrDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let arrDates = [];

        for (let i=0; i<list.length; i++) {
            let date = new Date(list[i].dt_txt);
            if (!arrDates.includes(date.getDay())) {
                arrDates.push(date.getDay());
                finalList.push(list[i]);
            }
        }

        for (let i=0; i<5; i++) {
            let date = new Date(finalList[i].dt_txt);
            let maxTemp = (finalList[i].main.temp_max -  273.15).toFixed(2) + ' °';
            let minTemp = (finalList[i].main.temp_min -  273.15).toFixed(2) + ' °';
            let container = document.getElementById('container');
            
            let weatherDiv = document.createElement('div');
            weatherDiv.className = 'weather-box';

            container.appendChild(weatherDiv);

            let dayTag = document.createElement('h2');
            dayTag.textContent = arrDays[date.getDay()];

            let img = document.createElement('img');
            img.src = 'https://openweathermap.org/img/wn/' + finalList[i].weather[0].icon + '.png';
            img.width = 60;
            img.height = 60;

            let maxTag = document.createElement('h3');
            maxTag.textContent = maxTemp;

            let minTag = document.createElement('h3');
            minTag.textContent = minTemp;

            weatherDiv.append(dayTag, img, maxTag, minTag);
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function getWeatherData(id) {
    
}

