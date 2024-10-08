const username = document.getElementById("use");
const passward = document.getElementById("pass");
function feedbact() {
	if (passward == "1234") {
		window.alert("passward is correct");
		location.replace("https://calculateexponent.netlify.app");

		} 
	else {
		window.alert("nothing correct from js");
	}

};
