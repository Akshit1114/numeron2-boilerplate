// Iteration 8: Making scoreboard functional
var hey = new URLSearchParams(window.location.search);
console.log(hey);
var score = hey.get("score");

var scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML = score;

var playagainbutton = document.getElementById("play-again-button");
playagainbutton.onclick = (evt) => {
    location.href = "./game.html";
};
