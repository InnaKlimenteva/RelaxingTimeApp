const myVideo = document.querySelector('#myVideo');
const myAudio = document.querySelector('#player');
const button = document.querySelector('#myButton');
const timer = 5;
let amountTime = timer * 60;



function calculateTime(timer){
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
   
    if(seconds < 10){
        seconds ='0' + seconds
    }

    countdown.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if(amountTime<0){
        stopTimer();
        myAudio.pause();
        myVideo.pause();
        amountTime = 0;
    }
}


function stopTimer(){
    clearInterval(timerID)
}


let timerID = setInterval(calculateTime, 1000);



button.addEventListener('click', function(){

     if(myVideo.paused || myAudio.paused) {
        myVideo.play();
        myAudio.play();
        }
     else{
        myAudio.pause();
        myVideo.pause();
        }

    })

    