
var colorleft = document.querySelector(".color1");
var colorright = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

function setString() {
	var colorStr = "linear-gradient(to right, " 
		+ colorleft.value 
		+ ", " 
		+ colorright.value 
		+ ")";

	h3.textContent = colorStr + ";";
	return colorStr;
}
function changeGradient() {
	body.style.background = setString();
}

colorleft.addEventListener("input", changeGradient);
colorright.addEventListener("input", changeGradient);
setString();


//randomizer
var random = document.getElementById("random");
random.addEventListener("click", randomGradient);

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randomGradient() {
    colorleft.value = getRandomColor();
	colorright.value = getRandomColor();
	changeGradient();
}


