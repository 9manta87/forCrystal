var IMG_NUM = 14;
const body = document.querySelector('body');

function selectBgImage(picked){
    const image = new Image();
    image.src = `img/${picked}.jpg`;

    body.prepend(image);
    image.classList.add("bgImage");  
}

function randomNumber(){
    var PICKED_NUM = Math.ceil(Math.random()*IMG_NUM);
    selectBgImage(PICKED_NUM);
}

function init(){
    randomNumber();
}
init();

