const seoulClock = document.querySelector('.bkk_clock');


function makeTime(hours, minutes){
    const newHours = hours+16-12;   //+4
    const newHourss = hours+16-24;   //-8
    const newHoursss = hours-20;
    if(hours<6){
        seoulClock.innerHTML = `오후 0${newHours}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else if(hours<8){
        seoulClock.innerHTML = `오후 ${newHours}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else if(hours===8){
        seoulClock.innerHTML = `오전 0${newHourss}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else if(hours<18){
        seoulClock.innerHTML = `오전 0${newHourss}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else if(hours===18){
        seoulClock.innerHTML = `오전 ${newHourss}:${minutes<10 ? `0${minutes}` : minutes}`;     
    }else if(hours<20){
        seoulClock.innerHTML = `오전 ${newHourss}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else if(hours===20){
        seoulClock.innerHTML = `오후 ${newHourss}:${minutes<10 ? `0${minutes}` : minutes}`;
    }else{
        seoulClock.innerHTML = `오후 0${newHoursss}:${minutes<10 ? `0${minutes}` : minutes}`;
    }
}

function checkTime(){
    const watch = new Date();
    const hours = watch.getHours();
    const minutes = watch.getMinutes();
    setInterval(checkTime, 1000);
    makeTime(hours, minutes);
}

function init(){
    checkTime();
}
init();