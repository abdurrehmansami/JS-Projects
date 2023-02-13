let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let hours = document.getElementById("hours");
let sec = 0;
let min = 0;
let hour = 0;
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
//   console.log("hi");

//   setInterval(() => {
//     sec++;
//     second.innerHTML = sec;
//     console.log(sec);
//     if (sec > 2) {
//       min++;
//       sec = 0;
//       //   console.log("min ", min, " sec ", sec);
//       minute.innerHTML = min;
//       second.innerHTML = sec;
//     }
//     if (min > 2) {
//       hour++;
//       min = 0;
//       //   console.log("hour", hour, min, ", min, ", sec, ", sec");
//       hours.innerHTML = hour;
//       minute.innerHTML = min;
//     }
//   }, 1000);
// });
var f;
function startTimer() {
  f = setInterval(() => {
    sec++;
    second.innerHTML = sec;

    if (sec > 2) {
      min++;
      sec = 0;

      minute.innerHTML = min;
      second.innerHTML = sec;
    }
    if (min > 2) {
      hour++;
      min = 0;

      hours.innerHTML = hour;
      minute.innerHTML = min;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(f);
}
function resetTimer() {
  hour = min = sec = 0;
  stopTimer();
  minute.innerHTML = min;
  second.innerHTML = sec;
  hours.innerHTML = hour;
}
