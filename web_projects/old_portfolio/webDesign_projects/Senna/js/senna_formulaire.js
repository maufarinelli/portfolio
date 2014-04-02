

// Valider le formulaire d'application
function valider() {
	// A. Saisir l'entrée des données de l'utilisateur.
	var nom = document.getElementById("nom_client");
	var entreprise = document.getElementById("nom_entreprise");
	var telephone = document.getElementById("telephone_client");
	var courriel = document.getElementById("courriel_client");
	var message = document.getElementById("message_client");
	
	// B. Vérifier les valeurs de chaque champ ("valider").
	/**/
	var formEstValide = true;
	var messageErreur = "Vous avez les erreurs suivantes (les champs jaunes): ";
	
	
	// 1- Valider le nom.
	if(estNomValide(nom.value)==false) {
		formEstValide = false;
		messageErreur = messageErreur + "\n - Vous n'avez pas inscrit votre nom.";
		nom.className = "saisieInvalide";
	}
	else {
		nom.className = "saisieValide";	
	}
	
	
	// 3- Validar o campo Telefone
	if (estTelefoneValide(telephone.value)==false) {
		formEstValide = false;
		messageErreur = messageErreur + "\n - Vous devez inscrire un téléphone valide avec 10 chiffres, comme par exemple (514)111-1111.";
		telephone.className = "saisieInvalide";
		}
		else
		telephone.className = "saisieValide";
		
	
	// 4- Valider le courriel électronique
	if (estCourrielValide(courriel.value)==false) {
		formEstValide = false;
		messageErreur = messageErreur + "\n - Vous devez inscrire un adresse de courriel valide.";
		courriel.className = "saisieInvalide";
		}
		else
		courriel.className = "saisieValide";
		
	
	
	// C. Afficher les erreurs s'il y a lieu et retourner true ou false selon le cas.
	
	if(formEstValide==true) {
		return true;	
	}
	else { 
		alert(messageErreur);
		return false;
	}
	
	
	//return formEstValide;
}