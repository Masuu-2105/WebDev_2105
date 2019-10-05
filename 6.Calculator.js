var textview = document.querySelector(".textview");
var button = document.querySelectorAll(".button");

function insert(num) {
	textview.value = textview.value + num;
}

function equal() {
	 if(textview.value) {
	 	textview.value = eval(textview.value);
	 }
}

function refresh() {
	textview.value = "";
}

function back() {
	textview.value = textview.value.substring(0, textview.value.length-1)
}