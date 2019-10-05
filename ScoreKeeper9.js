alert("Connected!")

var b1 = document.querySelector("#p1");
var b2 = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1 = document.querySelector("#p1Score");
var p2 = document.querySelector("#p2Score");
var input = document.querySelector("input");
var limit = document.querySelector("#limit");
var gameOver = false;
var winningScore = 5;

input.addEventListener("change", function() {
	limit.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

b1.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			gameOver = true;
			p1.classList.add("winner");
		}
		p1.textContent = p1Score;
	}	
})

b2.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			gameOver = true;
			p2.classList.add("winner");
		}
	p2.textContent = p2Score;
	}
	
})

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1.textContent = 0;
	p2.textContent = 0;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
};