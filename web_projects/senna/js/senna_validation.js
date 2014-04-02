/*
	Librairie de validation
	Auteur : Mauricio Farinelli
	Date : 3 février 2010
*/


/*
	Assainie une chaîne de caractères en y enlevant tous les espaces.
	Argument(s) : 
		c - String : chaîne de caractères à assainir
	Retourne : 
		String : la même chaîne assainie
*/
function assainirData(c) {
	return c.replace(/[ .()-]/g,"");
}

/*
	Vérifie la validité d'un code postal canadien.
	Argument(s) : 
		cp - String : un code postal canadien
	Retourne : 
		Boolean : vraie si cp est valide; false sinon.
*/


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
	var resultat = tel.search(/^[0-9]{10}$/);
		if (resultat == -1) return false;
	return true;
	}	



/*
	Fonction pour vérifier si le courriel écrit est valide.
	Argument(c) : 
		c - String : un courriel électronique avec les paramètres suivantes: code@domaine.tld, où 
		"code" est composé d'au moin deux caractères alphanumériques, trait de soulignement, point et/ou tiret et doit commencer apr une letre. 
		"domaine" est composé d'au moins un caractère alphanumérique ou tiret, et doit commencer par une lettre ou un chiffre.
		"tld" est composé de deux à six caractères alphabétiques
	Retourne : 
		Boolean : vraie si c est valide; false sinon.
	*/
function estCourrielValide(c) {
	var courrielEcrit = c.search(/^[^@]+@[^@.]+\.[^@]*\w\w$/i);
	if (courrielEcrit==-1) return false;
	return true;
	}



