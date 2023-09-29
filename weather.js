//vars
const mainBody = document.getElementById('main');
const title = document.querySelector('.title');
const modeImg = document.getElementById('mode-img');
const cityName = document.querySelector('.city-info'); 
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity-data');
const windSpeed = document.querySelector('.wind-data');
const getCity = document.querySelector('.city-name');
const search = document.querySelector('.city-search');
const weatherImg = document.querySelector('.main-img');
const skyCondition = document.querySelector('.condition');

//main values
mainBody.classList.toggle('main-light');
title.classList.toggle('title-light');
modeImg.src = 'img/moon.png';

//switch theme function

function toggleIcon(){
    mainBody.classList.contains('main-dark') ?
        modeImg.src = 'img/sun.png' :
        modeImg.src = 'img/moon.png'
};

const toggleTheme = () => {
    mainBody.classList.toggle('main-dark');
    title.classList.toggle('title-dark');
};

//events
modeImg.addEventListener('click', ()=>{
    toggleTheme();
    toggleIcon();
});

search.addEventListener('click', () => {
    const value = getCity.value;
    getInfo(value);
    getCity.value = '';
});

//validation


//API

const apiKey = '0a28a6f478a7d318cec2f106691fb3da';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

//calling info from API

const getInfo = async (city) => {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + '°C';
    skyCondition.innerHTML = data.weather[0].main;
    humidity.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed + ' km/h';

    const images = ['Clouds','Clear','Drizzle','Rain','Snow'];
    
    images.includes(data.weather[0].main) ? 
    weatherImg.src = `img/${data.weather[0].main}.png` : 
    weatherImg.src = 'img/Clouds.png'
};

getInfo('San Salvador');