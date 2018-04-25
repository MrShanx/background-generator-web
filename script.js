
var colorleft = document.querySelector(".color1");
var colorright = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

function setString() {
	h3.textContent = body.style.background + ";";
}
function changeGradient() {
	var colorStr = "linear-gradient(to right, " 
		+ colorleft.value 
		+ ", " 
		+ colorright.value 
		+ ")";
	body.style.background = colorStr;
	setString();
}

colorleft.addEventListener("input", changeGradient);
colorright.addEventListener("input", changeGradient);

setString();

