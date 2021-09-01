// Catch Elements

let docDays = document.getElementById('days');
let docHours = document.getElementById('hours');
let docMinutes = document.getElementById('minutes');
let docSecond = document.getElementById('seconds');


// Function that always run every one second

setInterval(function(){

    // ALGORITHM TO GET ELAPSED TIME BETWEEN TWO DATE
    let today = new Date();
    let lastRelapse = new Date('August 19, 2021 01:00:00');


    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;


    let time = today - lastRelapse;
    time = Math.floor(time / 1000);

    if (time > 86400){
        days = Math.floor(time / 86400);
        time -= (days * 86400);
    }

    if (time > 3600){
        hours = Math.floor(time / 3600);
        time -= (hours * 3600);
    }

    if (time > 60){
        minutes = Math.floor(time / 60);
        time -= (minutes * 60);
    }

    seconds = time;

    docDays.innerText = days;
    docHours.innerText = hours;
    docMinutes.innerText = minutes;
    docSecond.innerText = seconds;
},1000);
