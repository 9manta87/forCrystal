var dDay = new Date(2020, 02, 25, 00, 00, 00, 50);


function showNumber(result){
    const dDayCounter = document.getElementById('dday');
    dDayCounter.innerHTML = `BKK D-${result}`;
}

function doNumber(timeNow){
    var gap = timeNow.getTime() - dDay.getTime();
    var result = Math.floor(gap/(1000*60*60*24))*-1;
    showNumber(result);
}

function getTimeNow(){
    var now = new Date();
    doNumber(now);
//    console.log(now);
//    console.log(dDay);
}

function init(){
    getTimeNow();
//    setInterval(init, 1000);
}
init();
