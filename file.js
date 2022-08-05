let hoursSpan = document.querySelector("span.hours"),
  minutesSpan = document.querySelector("span.minutes"),
  secondsSpan = document.querySelector("span.seconds"),
  hours,
  minutes,
  seconds;

setInterval(() => {
  let currentDate = new Date();

  hours = currentDate.getHours();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();

  hours = hours > 12 ? hours - 12 : hours == 0 ? 12 : hours;

  hoursSpan.textContent = hours < 10 ? `0${hours}` : hours;
  minutesSpan.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.textContent = seconds < 10 ? `0${seconds}` : seconds;

  console.log(currentDate.getHours());
}, 1000);
