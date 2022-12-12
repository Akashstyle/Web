function dateTime(){
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let session = document.getElementById('session');

if(hours>12){
    session.innerHTML= 'PM';
}

if(hours>12){
    hours = hours-12;
}

if(hours<10){
    hours = '0'+ hours;
}
if(minutes<10){
    minutes= '0'+ minutes;
}
if(seconds<10){
    seconds = '0'+ seconds;
}

document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;
}
setInterval(dateTime);