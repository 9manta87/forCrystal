const torontoClock = document.querySelector('.toronto_clock');
const bkkClock = document.querySelector('.bkk_clock');



function handleClock2(){
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();
    const am = '오전';
    const pm = '오후';
    bkkClock.innerHTML = `${hours<12 ? `${pm}` : `${am}`} ${hours<10 ? `0${hours}` : hours>12 ? `0${hours-12}` : hours}:${minutes<10 ? `0${minutes}` : minutes}`;
    setInterval(handleClock2, 1000);
}


function handleClock(){
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();
    const am = '오전';
    const pm = '오후';
    torontoClock.innerHTML = `${hours<12 ? `${am}` : `${pm}`} ${hours<10 ? `0${hours}` : hours<13 ? hours : hours<22 ? `0${hours-12}` : hours<25 ? `${hours-12}` : hours}:${minutes<10 ? `0${minutes}` : minutes}`;
    setInterval(handleClock, 1000);
}

function init(){
    handleClock();
//    handleClock2();
}
init();