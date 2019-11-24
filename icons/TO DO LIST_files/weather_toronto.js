const COORDS = 'coords';
const API_KEY = 'e17eea4bafe784200662194cb7514749';
const toronto = document.querySelector('.toronto_temp');

function getIcon(json){
    const info = json.weather[0].main
    const icon = document.querySelector('.tor_icon');
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
    const targetText = document.querySelector('.toronto_text');
    targetText.innerHTML = info;
}


function getWeather(lon, lat){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = Math.round(json.main.temp);
//        const city = json.name;
        toronto.innerHTML = `${temp}℃`;
        getIcon(json);
    })
    
}

function saveLocation(positionObj){
    localStorage.setItem(COORDS, JSON.stringify(positionObj));
}

function handleSuccess(position){
    const longitude = position.coords.longitude,
          latitude = position.coords.latitude,
          positionObj = {
              longitude: longitude,
              latitude: latitude
          }
    saveLocation(positionObj);
    getWeather(longitude, latitude);
    console.log(position);
}
function handleFail(){
    console.log('cant access geo location.');
}

function askForLocation(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleFail);
}

function loadLocation(){
    const loadedLocation = localStorage.getItem(COORDS);
    const parsedLocation = JSON.parse(loadedLocation);
    if(loadedLocation===null){
        askForLocation();
    }else{
        getWeather(parsedLocation.longitude, parsedLocation.latitude);      
    }
}

function init(){
    loadLocation();
}
init();