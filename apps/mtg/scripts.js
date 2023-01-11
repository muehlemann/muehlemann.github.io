var playerOneLife = 20;
var playerTwoLife = 20;
var colorArray = ["#B2AF8D", "#6992AB", "#7D7673", "#A16148", "#5B8565"];

function drawLife(p1, p2) {
  document.getElementById("player1-life").textContent = p1;
  document.getElementById("player2-life").textContent = p2;
}

function drawBackground(id, event) {
  if (event.target == event.currentTarget) {
    return;
  }

  // Get last char of id tag
  var pos = event.target.id.split('-').slice(-1).pop()
  document.getElementById(id).parentNode.style.backgroundColor = colorArray[pos]
}

window.addEventListener("load", () => {

  document.getElementById("player1-up").addEventListener('click', (event) => {
    drawLife(++playerOneLife, playerTwoLife);
  });

  document.getElementById("player1-down").addEventListener('click', (event) => {
    drawLife(--playerOneLife, playerTwoLife);
  });

  document.getElementById("player2-up").addEventListener('click', (event) => {
    drawLife(playerOneLife, ++playerTwoLife);
  });

  document.getElementById("player2-down").addEventListener('click', (event) => {
    drawLife(playerOneLife, --playerTwoLife);
  });

  document.getElementById("player1-colors").addEventListener('click', (event) => {
    drawBackground("player1-life", event);
  });

  document.getElementById("player2-colors").addEventListener('click', (event) => {
    drawBackground("player2-life", event);
  });

  document.getElementById("reset").addEventListener('click', (event) => {
    playerOneLife = 20;
    playerTwoLife = 20;
    // Draw after reset
    drawLife(playerOneLife, playerTwoLife);
  });

});

window.scroll(0, 1);