const API_KEY_COPY = 'e17eea4bafe784200662194cb7514749';
const CITY = 'bangkok';
const bkk = document.querySelector('.bkk_temp');

function bkkGetIcon(json){
    const info = json.weather[0].main
    const icon = document.querySelector('.bkk_icon');
    console.log(info);
    
    if (info === 'Clouds'){
        icon.classList.add('cloudy');
    }else if(info === 'Rain'){
        icon.classList.add('rainy');
    }else if(info === 'Snow'){
        icon.classList.add('snow');
    }else if(info === 'Clear'){
        icon.classList.add('sunny');
    }
    const targetText = document.querySelector('.bkk_text');
    targetText.innerHTML = info;
}

function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY_COPY}&units=metric`).then(
    function(response){
        return response.json();
    }).then(function(json){
        const temp = Math.round(json.main.temp);
        const city = json.name;
        bkk.innerHTML=`${temp}℃`;
        bkkGetIcon(json);
    });
}

function init(){
    getWeather();
}
init();