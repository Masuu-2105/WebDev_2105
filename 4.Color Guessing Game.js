var numSquares = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var msg = document.getElementById("msg");
var h1 = document.querySelector("h1");
var newcolors = document.querySelector("#new");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;


process();

function process() {
for(var i = 0; i< squares.length; i++) {
	//add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//adding clicking listeners to the squares
	squares[i].addEventListener("click", function() {
		//grab the color of the clicked square
		var clickedColor = this.style.backgroundColor;
		//compare the clicked and picked colors
		if(clickedColor === pickedColor) {
			msg.textContent = "CORRECT!";
			for(var i = 0; i< squares.length; i++) {
				squares[i].style.backgroundColor = clickedColor;
				h1.style.backgroundColor = clickedColor;
				newcolors.textContent = "PLAY AGAIN?";
			}
		} else {
			this.style.backgroundColor = "#232323";
			msg.textContent = "TRY AGAIN!";
		}
	})
}
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
	//make an array
	var random = [];
	//add num random colors to array
	for(var i=0; i< num; i++) {
		//get random color and push into the array
		random.push(randomColor());
	}
	//return that array
	return random;
}

function pickColor() {
	var pick = Math.floor(Math.random() * colors.length);
	return colors[pick];
}

newcolors.addEventListener("click", function() {
	h1.style.backgroundColor = "steelblue";
	newcolors.textContent = "NEW COLORS";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	process();
	msg.textContent = "";
})

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	newcolors.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue"
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	process();
	msg.textContent = "";
	for (i = 3; i<squares.length; i++) {
		squares[i].style.display = "none";
	}
})

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	newcolors.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue"
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	msg.textContent = "";
	process();
	for(i = 0; i<squares.length; i++) {
		squares[i].style.display = "block";
	}
})