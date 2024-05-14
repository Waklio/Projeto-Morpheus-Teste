const userName = document.getElementById("user-name");
userName.innerHTML = "Carlos" + " !";
const greetings = document.getElementById("greetings");
const clock = document.getElementById("clock");
const clockSymbol = document.getElementById("clock-symbol");

function getGreetings(date) {
  const hours = date.getHours();
  if (hours < 12) {
    return "Bom Dia";
  }
  if (hours < 18) {
    return "Boa Tarde";
  }
  return "Boa Noite";
}

function timeColor(date) {
  const hours = date.getHours();
  if (hours < 12) {
    return "yellow";
  }
  if (hours < 18) {
    return "red";
  }
  return "purple";
}

function updateClock(date, clock) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const minute = minutes < 10 ? `0${minutes}` : minutes
  clock.innerHTML = `${hours}:${minute}`;
}

function updateClockSymbol(date, clockSymbol) {
  clockSymbol.style = "color:" + timeColor(date);
}

function updateGreetings(date, greetings) {
  greetings.innerHTML = getGreetings(date) + ", ";
}

setInterval(() => {
  const date = new Date();
  updateClock(date, clock);
  updateClockSymbol(date, clockSymbol);
  updateGreetings(date, greetings);
}, 1000);
