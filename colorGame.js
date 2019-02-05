var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColors();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // ovo je umjesto if else
		reset();
	});

};
}

function reset () {
	//generate new radnom colors 
	colors = generateRandomColors(numSquares);
	// pick a new random color from the array
	pickedColor = pickColors();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		};
	};
}


resetButton.addEventListener("click", function() {
	reset();
});


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {

		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare it to clicked square
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		};

	});
};

colorDisplay.textContent = pickedColor;

function changeColors (color) {
	//loop through all the squares
	for (var i = 0; i < squares.length; i++) {
		//change colors of sqaures to color given in argument
		squares[i].style.backgroundColor = color;
	};
}

function pickColors () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	//make an array
	var arr = [];

	//generate random colors for array through a loop
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor () {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")" ; 
}