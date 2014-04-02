// JavaScript Document

/* Librarie de validation
Author: Mauricio Farinelli
Date: 02 mars 2010
*/


/*
	Fonction pour assainie une cha�ne de caract�res en y enlevant tous les espaces, point et tiret.
	Argument(data) : 
		data - String : cha�ne de caract�res � assainir
	Retourne : 
		String : la m�me cha�ne assaini�
*/
function assainirData(data) {
	return data.replace(/[ .()-]/g,"");
	}
	
	
	/*
	Fonction pour v�rifier si le client a �crit son nom.
	Argument(nc) : 
		nc - String : sans limite de caract�re
	Retourne : 
		Boolean : vraie si le client a �crit; false sinon.
	*/
function estNomValide(nom) {
	nom = assainirData(nom);
	if (nom=="") return false;
	return true;
	}	
	
	
		/*
	Fonction pour v�rifier si le client a �crit son t�l�phone correctement.
	Argument(nc) : 
		nc - String : 11 chiffres apr�s assainir 
	Retourne : 
		Boolean : vraie si le client a �crit correctement; false sinon.
	*/
function estTelefoneValide(tel) {
	tel = assainirData(tel);
	if (tel=="") return false;
	var resultat = tel.search(/^[0-9]{11}$/);
		if (resultat == -1) return false;
	return true;
	}	
	

	

	