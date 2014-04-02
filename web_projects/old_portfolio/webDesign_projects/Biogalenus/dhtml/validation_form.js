// JavaScript Document


/*
	Fonction pour valider chaque champ du formulaire en utilisant des fonctions d'une librairie externe.
		- Premi�re �tape : elle saisit les champs qui seront valid�s et les gardes chacun dans une variable
		- Deuxi�me �tape : on d�finit une variable boolean comme un drapeau, si tout est correct le drapeau reste verte (true) et laisse le formulaire pass�. Sinon, le drapeau devient rouge (false) est indique au client o� sont ses erreurs.
		- Troisi�me �tape : on verifie chaque champ en utilisant des fonctions d'une librairie externe.
		- Quatri�me �tape : on fait la v�rification finale du drapeau. Si tous les champs sont corrects, le drapeau est vert (true) et laisse le formulaire pass�. Sinon, on indique au client o� sont ses erreurs.
	*/
function validationForm() {
	
	
	// Premi�re �tape - Saisir tous les champs qui seront valider
	var nameClient = document.getElementById("nomeCliente");
	var familynameClient = document.getElementById("sobrenomeCliente");
	var phoneClient = document.getElementById("telefoneCliente");
	var receiptClient = document.getElementById("receitaCliente");
	
	// Deuxi�me �tape - D�finition du drapeau et de la variable qui contient les messages d'erreurs.
	var flag = true; 
	var messageErreur = "Os campos indicados pela cor amarela cont�m os seguintes erros: ";
	
	// Troisi�me �tape
	// 1- Validar o campo Nome
	if (estNomValide(nameClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Voc� n�o escreveu seu nome.";
		nameClient.className = "erreur";
		}
		else
		nameClient.className = "sansErreur";
	
	
	// 2- Validar o campo Sobrenome
	if (estNomValide(familynameClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Voc� n�o escreveu seu sobrenome.";
		familynameClient.className = "erreur";
		}
		else
		familynameClient.className = "sansErreur";
	
	
	// 3- Validar o campo Telefone
	if (estTelefoneValide(phoneClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - O n�mero de telefone que voc� escreveu n�o � v�lido.";
		phoneClient.className = "erreur";
		}
		else
		phoneClient.className = "sansErreur";
		
	// 4- Validar o campo Receita M�dica
	if (estNomValide(receiptClient.value)==false) {
		flag = false;
		messageErreur = messageErreur + "\n - Voc� n�o anexou a sua receita m�dica.";
		receiptClient.className = "erreur";
		}
		else
		receiptClient.className = "sansErreur";

		
	
	// Quatri�me �tape - v�rification finale pour la validation du formulaire
	if(flag==true) 
		return true;
		else { 
		alert(messageErreur);
			return false;
			}
	}

