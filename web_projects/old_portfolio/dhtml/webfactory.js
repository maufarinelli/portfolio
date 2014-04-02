// JavaScript Document



function changeMouseDown(num){
var posy=-59;
for (var i=1; i<4; i++) {
	document.getElementById('menu_'+i).style.backgroundPosition = "0 0";
	}
document.getElementById('menu_'+num).style.backgroundPosition="0 "+posy+"px";
}

var zedIndex = 0;
function changeMouseUp(num){
var posy=-119;
for (var i=1; i<4; i++) {
	document.getElementById('menu_'+i).style.backgroundPosition = "0 0";
	document.getElementById('menu_'+i).style.color = "#fff";
	}
document.getElementById('menu_'+num).style.backgroundPosition="0 "+posy+"px";
document.getElementById('menu_'+num).style.color="#000";

for (var i=1; i<4; i++) {
	document.getElementById('conteudo_'+i).style.zIndex = 1;
	}
document.getElementById('conteudo_'+num).style.zIndex = zedIndex + num*5;
}