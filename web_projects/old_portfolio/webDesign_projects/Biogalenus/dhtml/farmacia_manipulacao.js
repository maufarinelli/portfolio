// JavaScript Document

/*var position = 0;
function mudarMenuHorizontal(x) {
	var position = document.getElementById("mf_menu_horizontal").style.backgroundPosition;
	alert(position);
	position = "3px " + parseInt(position) + x*-55 +"px";
	
	}*/

var zedIndex = 0;
function changePosition(num){

var posy=0;
for (var i=1; i<6; i++) {
	document.getElementById('menu_'+i).style.backgroundPosition = "0px -58px";
	}
document.getElementById('menu_'+num).style.backgroundPosition="0 "+posy+"px";

for (var i=1; i<6; i++) {
	document.getElementById('mf_conteudo'+i).style.zIndex = 1;
	}
document.getElementById('mf_conteudo'+num).style.zIndex = zedIndex + num*5;

}
	
