const timeDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-face');
const progressBar = document.querySelector('.clock-progress-bar');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hextime;
var today;
let count = setInterval(timer, 1000);
let hexCount = setInterval(mouseTimer, 1000);
console.dir(clockFace);
console.log(time); //this logs console time on page load

clearInterval(hexCount);

//timer() is the guts of the clock.
function timer() {
//clearInterval(mouseTimer);
today = new Date();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
//if hours, mins and secs are single digits, the statements below add a 0
if (h <= 9) { h = "0"+h; }
if (m <= 9) { m = "0"+m; }
if (s <=9) { s = "0"+s; }
time = h + ":" + m + ":" + s;
hexSec = s.toString(16);
timeDisplay.textContent = time;
percent = (s / 100);
//console.log(`Time: ${time} Percent: ${percent} Color: ${hexColor}`);
barLength = (14 * percent);
hexColor = `#4${hexSec}0${hexSec}`;
clockFace.style.backgroundColor = `${hexColor}`;
progressBar.style.width = `${barLength}rem`
return time;
}

//INTERVAL BELOW IS THE DEFAULT ENGINE FOR THE CLOCK - REACTIVATE
//IF MOUSEOVERS DON'T WORK
//setInterval(timer, 1000);


function mouseTimer(){
clearInterval(count);
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  if (h <= 9) { h = "0"+h; }
  if (m <= 9) { m = "0"+m; }
  if (s <=9) { s = "0"+s; }
  time = h.toString(16) + ":" + m.toString(16) + ":" + s.toString(16);
percent = (s / 100);
barLength = (14 * percent);
progressBar.style.width = `${barLength}rem`
  timeDisplay.textContent = time;
  hexSec = s.toString(16);
  clockFace.style.backgroundColor = `${hexColor}`;
  hexColor = `#${hexSec}${hexSec}${hexSec}`;
  //timeDisplay.textContent = `${hexColor}`;
}
function mouseFace(){
  hexCount = setInterval(mouseTimer, 1000);
}
function mouseFaceLeave(){
  clearInterval(hexCount);
  count = setInterval(timer, 1000);
}

timeDisplay.addEventListener('mouseenter', mouseFace);
timeDisplay.addEventListener('mouseleave', mouseFaceLeave);
