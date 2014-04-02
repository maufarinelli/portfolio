// JavaScript Document

/*var divMessageTele1 = document.getElementById("mt1");
var divMessageTele2 = document.getElementById("mt2");
var divMessageTele3 = document.getElementById("mt3");
var divMessageTele4 = document.getElementById("mt4");*/


function callTimer() {
var timer = setInterval(changerBG, 4990)
	}

var compteur = 2;
function changerBG() {

		for (var i=1;i<5; i++) {
			document.getElementById("mt1").className = "";
			document.getElementById("mt2").className = "";
			document.getElementById("mt3").className = "";
			document.getElementById("mt4").className = "";
			}
		
		document.getElementById("mt"+compteur).className = "selected";
		
		if(compteur<4) compteur += 1;
		else compteur = 1;
}