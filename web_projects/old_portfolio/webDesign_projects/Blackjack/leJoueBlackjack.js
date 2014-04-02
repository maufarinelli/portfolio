// JavaScript Document

var sommeJoueur;	
			var sommeCroupier;
            var valeurDe3;
			var valeurDe4;
			var valeurDeCroupier1;
			var valeurDeCroupier2;
			var valeurDeCroupier3;
			var valeurDeCroupier4;
			var plusGrande;
			var medium;
			var plusPetit;	
		
			// Valeur initial dans la formulaire du compte du joueur
			function valeurInitial() {
				document.frmJoueur.sommeInitialeDesJoueur.value = "0";
				disparaitreBouton(document.getElementById("btnRelancer"));
				disparaitreBouton(document.getElementById("btnArreter"));
				disparaitreBouton(document.getElementById("btnAjouterValeurDes1"));
				disparaitreBouton(document.getElementById("btnAjouterValeurDes2"));
				disparaitreBouton(document.getElementById("btnAjouterLaSomme"));
				desactiverDes(document.getElementById("emplacement2"));
				desactiverDes(document.getElementById("emplacement1"));
				desactiverDes(document.getElementById("emplacement3"));
				desactiverDes(document.getElementById("emplacement4"));
				desactiverBouton(document.getElementById("btnReload"));
				disparaitreBouton(document.getElementById("redemarrer"));
				
			}
			
			 /* Valeur initial dans la formulaire du compte du croupier
			function Croupier() {
				document.frmCroupier.compteCroupier.value = "0";
				document.frmCroupier.btnSubmit.disabled = true;
			}*/
			
			// formule de calcule du nombre aléatoire
			function getNombresAleatoires(valMin,valMax) {
				var nombreAleatoire = Math.floor(Math.random() * (valMax-valMin+1)) + valMin;
				return nombreAleatoire;
			}
			
			// fonction pour lancer le premier dés
			function lancerInitiale() {
				valeurDe1 = getNombresAleatoires(1,6);
				valeurDe2 = getNombresAleatoires(1,6);
				document.getElementById("d1").src = "des" + valeurDe1 + ".png";
				document.getElementById("d2").src = "des" + valeurDe2 + ".png";
				// maintenant désactiver le bouton
				desactiverBouton(document.getElementById("btnLancerInitiale"));
				sommeInitialJouer();
				apparaitreBouton(document.getElementById("btnRelancer"));
				apparaitreBouton(document.getElementById("btnArreter"));
				activerDes(document.getElementById("emplacement2"));
				verifierJoueur ();
			}
			
			// désactivation du bouton
			function desactiverBouton(bouton) {
				bouton.disabled = true;
			}	
			
			// désactivation des dés
			function desactiverDes(tousLesDes) {
				tousLesDes.style.display = "none";
			}	
			
			// activation des dés
			function activerDes(tousLesDes) {
				tousLesDes.style.display = "block";
			}	
			
			// activation du bouton
			function activerBouton(bouton) {
				bouton.disabled = false;
			}	
			
			function disparaitreBouton(bouton) {
				bouton.style.visibility = "hidden"; 
				}
				
			function apparaitreBouton(bouton) {
				bouton.style.visibility = "visible"; 
				}	
			
			// le calcule de la somme des deux dés
			function sommeInitialJouer() {
				sommeJoueur = 2 * (valeurDe1 + valeurDe2);
				document.getElementById("txtSommeJouer").value = sommeJoueur;
			}
			
			// fonction pour relancer les dés
			function relancerDes () {
				valeurDe3 = getNombresAleatoires(1,6);
				valeurDe4 = getNombresAleatoires(1,6);
				document.getElementById("d3").src = "des" + valeurDe3 + ".png";
				document.getElementById("d4").src = "des" + valeurDe4 + ".png";
				desactiverBouton(document.getElementById("btnRelancer"));
				apparaitreBouton(document.getElementById("btnAjouterValeurDes1"));
				activerBouton(document.getElementById("btnAjouterValeurDes1"));
				apparaitreBouton(document.getElementById("btnAjouterValeurDes2"));
				activerBouton(document.getElementById("btnAjouterValeurDes2"));
				apparaitreBouton(document.getElementById("btnAjouterLaSomme"));
				activerBouton(document.getElementById("btnAjouterLaSomme"));
				activerDes(document.getElementById("emplacement1"));
				desactiverBouton(document.getElementById("btnArreter"));
			}
			
			// fonction pour Ajouter le valeur du Dé 1
			function ajouterValeurDes1 () {
				sommeJoueur = sommeJoueur + valeurDe3;
				document.getElementById("txtSommeJouer").value = sommeJoueur;
				activerBouton(document.getElementById("btnRelancer"));
				desactiverBouton(document.getElementById("btnAjouterValeurDes1"));
				desactiverBouton(document.getElementById("btnAjouterValeurDes2"));
				desactiverBouton(document.getElementById("btnAjouterLaSomme"));
				activerBouton(document.getElementById("btnArreter"));
				verifierJoueur ();
				}
			
			// fonction pour Ajouter le valeur du Dé 2
			function ajouterValeurDes2 () {
				sommeJoueur = sommeJoueur + valeurDe4;
				document.getElementById("txtSommeJouer").value = sommeJoueur;
				activerBouton(document.getElementById("btnRelancer"))
				desactiverBouton(document.getElementById("btnAjouterValeurDes1"));
				desactiverBouton(document.getElementById("btnAjouterValeurDes2"));
				desactiverBouton(document.getElementById("btnAjouterLaSomme"));
				activerBouton(document.getElementById("btnArreter"));
				verifierJoueur ();
				}
			
			// fonction pour Ajouter le valeur de la somme des deux dés
			function ajouterLaSomme	() {
				sommeJoueur = sommeJoueur + valeurDe3 + valeurDe4;
				document.getElementById("txtSommeJouer").value = sommeJoueur;
				activerBouton(document.getElementById("btnRelancer"))
				desactiverBouton(document.getElementById("btnAjouterValeurDes1"));
				desactiverBouton(document.getElementById("btnAjouterValeurDes2"));
				desactiverBouton(document.getElementById("btnAjouterLaSomme"));
				activerBouton(document.getElementById("btnArreter"));
				verifierJoueur ();
				}
				
			//faire changer le fond d'écran en cliquant sur arreter et commencer le croupier
			function arreter()    {      
               	var imgPath = new String();        
               	imgPath = document.getElementById("principal").style.backgroundImage;              
                if(imgPath == "url(bg_joueur.jpg)" || imgPath == "") {        
                document.getElementById("principal").style.backgroundImage = "url(bg21blackjack_croupier2.png)";      
                }    
                /*else{          
                document.getElementById("principal").style.backgroundImage = "url(bg_joueur.jpg)";  
                }*/
				desactiverBouton(document.getElementById("btnRelancer"))
				desactiverBouton(document.getElementById("btnArreter"))
				desactiverBouton(document.getElementById("btnAjouterValeurDes1"));
				desactiverBouton(document.getElementById("btnAjouterValeurDes2"));
				desactiverBouton(document.getElementById("btnAjouterLaSomme"));
				leCroupierJoue();
				}
				
			// Le croupier commencer à jouer
			function leCroupierJoue () {
				valeurDeCroupier1 = getNombresAleatoires(1,6);
				valeurDeCroupier2 = getNombresAleatoires(1,6);
				document.getElementById("dc1").src = "des" + valeurDeCroupier1 + ".png";
				document.getElementById("dc2").src = "des" + valeurDeCroupier2 + ".png";
				activerDes(document.getElementById("emplacement4"));
				sommeInitialCroupier();
				verifierCroupier ();
				}	
				
			// le calcule de la somme des deux dés du croupier
			function sommeInitialCroupier() {
				sommeCroupier = 2 * (valeurDeCroupier1 + valeurDeCroupier2);
				document.getElementById("txtSommeCroupier").value = sommeCroupier;
			}
			
			//  Le croupier relance les dés 
			function relancerDesCroupier () {
				valeurDeCroupier3 = getNombresAleatoires(1,6);
				valeurDeCroupier4 = getNombresAleatoires(1,6);
				document.getElementById("dc3").src = "des" + valeurDeCroupier3 + ".png";
				document.getElementById("dc4").src = "des" + valeurDeCroupier4 + ".png";
				activerDes(document.getElementById("emplacement3"));
				choisirMeilleurOption();
				verifierJoueur ();
				document.getElementById("txtSommeCroupier").value = sommeCroupier;	
				}
				
			// cette fonction calcule le meilleur option pour le croupier
			function choisirMeilleurOption() {
				var plusGrande = valeurDeCroupier3 + valeurDeCroupier4 + sommeCroupier;
				var medium = valeurDeCroupier3 + sommeCroupier;
				var plusPetit = valeurDeCroupier4 + sommeCroupier;
				
				if (plusGrande > sommeJoueur && plusGrande <= 21 ) {
					sommeCroupier = plusGrande;
					// alert(valeurDeCroupier3 + valeurDeCroupier4);
					// document.getElementById("txtCompteSommeCroupier").value = valeurDeCroupier3 + " + " + valeurDeCroupier4;
					verifierCroupier ();
					}
					
				else
				if (medium > sommeJoueur && plusGrande <= 21 ) {
					sommeCroupier = medium;
					// alert(valeurDeCroupier3);
					// document.getElementById("txtCompteSommeCroupier").value = valeurDeCroupier3;
					verifierCroupier ();
					}
					
				else {
					sommeCroupier = plusPetit;
					// alert(valeurDeCroupier4);
					// document.getElementById("txtCompteSommeCroupier").value = valeurDeCroupier4;
					verifierCroupier ();
				}
				}	
				
			// 	vérification si ont creve ou ont a 21 et ont gagner automatiquement
			function verifierJoueur () {
				
				if (sommeJoueur > 21) {
					document.getElementById("imgGagnePerdu").src = "VousAvezCreve.png";
					apparaitreBouton(document.getElementById("redemarrer"));
					activerBouton(document.getElementById("btnReload"));
					desactiverBouton(document.getElementById("btnRelancer"))
					desactiverBouton(document.getElementById("btnArreter"))
					desactiverBouton(document.getElementById("btnAjouterValeurDes1"));
					desactiverBouton(document.getElementById("btnAjouterValeurDes2"));
					desactiverBouton(document.getElementById("btnAjouterLaSomme"));
		
					}
					}
			
			// vérification si le croupier doit jouer ou il a crevé ou il a 21 
			function verifierCroupier () {
				
				if (sommeCroupier > 21) {
					document.getElementById("imgGagnePerdu").src = "LeCroupierACreve.png";
					apparaitreBouton(document.getElementById("redemarrer"));
					activerBouton(document.getElementById("btnReload"));
					
					
				}
				
				else
				if (sommeCroupier == 21 && sommeJoueur == 21) {
					document.getElementById("imgGagnePerdu").src = "nulle0x0.png";
					apparaitreBouton(document.getElementById("redemarrer"));
					activerBouton(document.getElementById("btnReload"));
					
				}
				
				else
				if (sommeCroupier == 21 && sommeJoueur < 21) {
					document.getElementById("imgGagnePerdu").src = "VousAvezPerdu.png";
					apparaitreBouton(document.getElementById("redemarrer"));
					activerBouton(document.getElementById("btnReload"));
					
				}
				
				else
				if (sommeCroupier > sommeJoueur) {
					document.getElementById("imgGagnePerdu").src = "VousAvezPerdu.png";
					apparaitreBouton(document.getElementById("redemarrer"));
					activerBouton(document.getElementById("btnReload"));
					
				}
				
				else  
					relancerDesCroupier ();
				}