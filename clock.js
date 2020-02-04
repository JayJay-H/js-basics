const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  var Hour = date.getHours();
  var Min = date.getMinutes();
  var Sec = date.getSeconds();

  clockTitle.innerText = `${Hour < 10 ? `0${Hour}` : Hour}:${
    Min < 10 ? `0${Min}` : Min
  }:${Sec < 10 ? `0${Sec}` : Sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
