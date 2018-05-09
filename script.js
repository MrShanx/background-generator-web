
var colorleft = document.querySelector(".color1");
var colorright = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var radial = document.getElementById('checkbox');
//set default radialcheck to false (firefox)
radial.checked = false;
colorleft.value = '#C5A9DF';
colorright.value = '#EBC030';

function setString() {
	var colorStr;
	if(!radial.checked) {
		colorStr = "linear-gradient(to right, " 
			+ colorleft.value 
			+ ", " 
			+ colorright.value 
			+ ")";
	}
	if(radial.checked) {
		colorStr= "radial-gradient(" 
			+ colorright.value 
			+ ", " 
			+ colorleft.value 
			+ ")";
	}

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


//radial
radial.addEventListener("click", radialGradient);

function radialGradient() {
	changeGradient();
}



