
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

