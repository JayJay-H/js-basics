const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  var Hour = date.getHours();
  var Min = date.getMinutes();
  var Sec = date.getSeconds();

  clockTitle.innerText = `${Hour}:${Min}:${Sec}`;
}

function init() {
  getTime();
}

init();
