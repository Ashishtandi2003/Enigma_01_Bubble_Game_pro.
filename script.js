var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
  score = score + 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 85; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".panelBottom").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(".panelBottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document
  .querySelector(".panelBottom")
  .addEventListener("click", function (detailes) {
    var clickedNum = Number(detailes.target.textContent);
    if (clickedNum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

// increaseScore();
getNewHit();
runTimer();
makeBubble();
