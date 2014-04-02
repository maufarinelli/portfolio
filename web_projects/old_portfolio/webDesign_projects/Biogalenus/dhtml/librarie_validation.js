// JavaScript Document

/* Librarie de validation
Author: Mauricio Farinelli
Date: 02 mars 2010
*/


/*
	Fonction pour assainie une chaîne de caractères en y enlevant tous les espaces, point et tiret.
	Argument(data) : 
		data - String : chaîne de caractères à assainir
	Retourne : 
		String : la même chaîne assainié
*/
function assainirData(data) {
	return data.replace(/[ .()-]/g,"");
	}
	
	
	/*
	Fonction pour vérifier si le client a écrit son nom.
	Argument(nc) : 
		nc - String : sans limite de caractère
	Retourne : 
		Boolean : vraie si le client a écrit; false sinon.
	*/
function estNomValide(nom) {
	nom = assainirData(nom);
	if (nom=="") return false;
	return true;
	}	
	
	
		/*
	Fonction pour vérifier si le client a écrit son téléphone correctement.
	Argument(nc) : 
		nc - String : 11 chiffres après assainir 
	Retourne : 
		Boolean : vraie si le client a écrit correctement; false sinon.
	*/
function estTelefoneValide(tel) {
	tel = assainirData(tel);
	if (tel=="") return false;
	var resultat = tel.search(/^[0-9]{11}$/);
		if (resultat == -1) return false;
	return true;
	}	
	

	

	