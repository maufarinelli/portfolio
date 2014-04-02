// JavaScript Document


/*
	Fonction pour valider chaque champ du formulaire en utilisant des fonctions d'une librairie externe.
		- Première étape : elle saisit les champs qui seront validés et les gardes chacun dans une variable
		- Deuxième étape : on définit une variable boolean comme un drapeau, si tout est correct le drapeau reste verte (true) et laisse le formulaire passé. Sinon, le drapeau devient rouge (false) est indique au client où sont ses erreurs.
		- Troisième étape : on verifie chaque champ en utilisant des fonctions d'une librairie externe.
		- Quatrième étape : on fait la vérification finale du drapeau. Si tous les champs sont corrects, le drapeau est vert (true) et laisse le formulaire passé. Sinon, on indique au client où sont ses erreurs.
	*/
function validationForm() {
	
	
	// Première étape - Saisir tous les champs qui seront valider
	var nameClient = document.getElementById("nomeCliente");
	var familynameClient = document.getElementById("sobrenomeCliente");
	var phoneClient = document.getElementById("telefoneCliente");
	var receiptClient = document.getElementById("receitaCliente");
	
	// Deuxième étape - Définition du drapeau et de la variable qui contient les messages d'erreurs.
	var flag = true; 
	var messageErreur = "Os campos indicados pela cor amarela contém os seguintes erros: ";
	
	// Troisième étape
	// 1- Validar o campo Nome
	if (estNomValide(nameClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Você não escreveu seu nome.";
		nameClient.className = "erreur";
		}
		else
		nameClient.className = "sansErreur";
	
	
	// 2- Validar o campo Sobrenome
	if (estNomValide(familynameClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Você não escreveu seu sobrenome.";
		familynameClient.className = "erreur";
		}
		else
		familynameClient.className = "sansErreur";
	
	
	// 3- Validar o campo Telefone
	if (estTelefoneValide(phoneClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - O número de telefone que você escreveu não é válido.";
		phoneClient.className = "erreur";
		}
		else
		phoneClient.className = "sansErreur";
		
	// 4- Validar o campo Receita Médica
	if (estNomValide(receiptClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Você não anexou a sua receita médica.";
		receiptClient.className = "erreur";
		}
		else
		receiptClient.className = "sansErreur";

		
	
	// Quatrième étape - vérification finale pour la validation du formulaire
	if(flag==true) 
		return true;
		else { 
		alert(messageErreur);
			return false;
			}
	}

