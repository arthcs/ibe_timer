
let minute = 10;
let second = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  reset();
  cron = setInterval(() => { timer(); }, 1000);
}

function pause() {
  clearInterval(cron);
}

function reset() {

  minute = 10;
  second = 0;

  document.getElementById('minute').innerText = '10';
  document.getElementById('second').innerText = '00';

}

function timer() {

  if (second == 0) {
    minute--;
    second = 59;
  }else{
    second--;
  }

  if (minute == 0 && second == 0) {
    pause();
  }

  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}