window.addEventListener("load", () => {
	let coin = document.getElementById("coin");
	let head = document.getElementById("head");
	let tail = document.getElementById("tail");
  var rand = Math.random();

  if (rand < 0.5) {
    coin.className = "flipHead";
    head.style.zIndex = 1;
    tail.style.zIndex = 0;
  } else {
    coin.className = "flipTail";
    tail.style.zIndex = 1;
    head.style.zIndex = 0;
  }

  console.log(rand);
});