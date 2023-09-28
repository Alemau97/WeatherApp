//vars
const switchButton = document.querySelector('.switch');
const mainBody = document.getElementById('main');
const title = document.querySelector('.title');
const cityName = document.querySelector('.city-info'); 
const temperature = document.querySelector('.temp');

//main values
mainBody.classList.add('main-light');
title.classList.add('title-light');
switchButton.classList.add('switch-dark');

//switch theme function

function mode(){
    if(switchButton.innerHTML == 'Dark theme'){
        switchButton.innerHTML = 'Light theme';
    }else{
        switchButton.innerHTML = 'Dark theme';
    }
}

//events
switchButton.addEventListener('click', ()=>{
    mainBody.classList.toggle('main-dark');
    switchButton.classList.toggle('switch-light');
    title.classList.toggle('title-dark');
    mode();
});

//API

const apiKey = '0a28a6f478a7d318cec2f106691fb3da';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=madrid';

//calling info from API

let getInfo = async () => {
    let response = await fetch(apiURL + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp + '°C';
};

getInfo();