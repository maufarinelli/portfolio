// Librairie de code Diapo
// Version : 0.1 / 7 avril 2010

// funçao para mover os web projects quando clicarmos em uma das imagens de projetos abaixo
var fichesDiv,posFinale,posOriginale;
var delta = 0;
var pas = 0;
var moveTimer;
var dernierPosition = 0;

var Lst;

function deroulerFiche(x,obj) {
	clearInterval(moveTimer);
	if(posOriginale!=posFinale) {
		fichesDiv.style.left = posFinale + "px";
	}
	fichesDiv = document.getElementById("fiches");
	posFinale = x * -950;
	posOriginale = (parseInt(fichesDiv.style.left))?parseInt(fichesDiv.style.left):0;
	delta = posFinale - posOriginale;
	pas = delta/25; 
	dernierPosition = x;
	//(delta<0)?-45:45;
	moveTimer = setInterval(move,5);
	
	if (Lst) Lst.className='navNotSelected';
	else {
		 var span1 = document.getElementById("nav").firstChild;
		 if (span1.nodeType != 1) span1 = span1.nextSibling;
		 span1.className = 'navNotSelected';
		 };
 	obj.className='navSelected';
 	Lst=obj;

	
}

function move() {
	if(delta==0) {
		clearInterval(moveTimer);
		return;
	}
	fichesDiv.style.left = posOriginale + pas + "px";
	posOriginale = posOriginale + pas;
	delta = delta - pas;
}



// funçao para mover o menu abaixo que contem as fotos dos trabalhos que fiz, o menu para escolher um novo trabalho a ver
var navDiv,posFinaleNav,posOriginaleNav;
var deltaNav = 0;
var pasNav = 0;
var moveTimerNav;
var dernierPositionNav = 0;

function deroulerFicheNav(x) {
	clearInterval(moveTimerNav);
	navDiv = document.getElementById("nav");
	posFinaleNav = x * -912;
	posOriginaleNav = (parseInt(navDiv.style.left))?parseInt(navDiv.style.left):0;
	deltaNav = posFinaleNav - posOriginaleNav;
	pasNav = deltaNav/12; 
	dernierPositionNav = x;
	//(delta<0)?-45:45;
	moveTimerNav = setInterval(moveNav,1);
	
	if(dernierPositionNav == "0") {
		document.getElementById("seta_direita").style.backgroundPosition = "0 0";
		document.getElementById("seta_direita").style.cursor = "pointer";
		document.getElementById("seta_esquerda").style.backgroundPosition = "0 -160px";
		document.getElementById("seta_esquerda").style.cursor = "default";
	}
	else {
		document.getElementById("seta_direita").style.backgroundPosition = "0 -160px";
		document.getElementById("seta_direita").style.cursor = "default";
		document.getElementById("seta_esquerda").style.backgroundPosition = "0 0";
		document.getElementById("seta_esquerda").style.cursor = "pointer";
	}
}

function moveNav() {
	if(deltaNav==0) {
		clearInterval(moveTimerNav);
		return;
	}
	navDiv.style.left = posOriginaleNav + pasNav + "px";
	posOriginaleNav = posOriginaleNav + pasNav;
	deltaNav = deltaNav - pasNav;
}	


/*function displayBlockNone() {
	var conteudoCSS = ;
	conteudoCSS = ;
	}*/

/*function conteudoDisplay() {
	var timeoutId = setTimeout('document.getElementById("conteudo").style.display = "block"', 5900);
	}*/