<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta name="Author" content="Mauricio Farinelli" />
<meta name="Description" content="Senna Industrie de Maintenance - Entreprise d'entretien ménager commercial à Montréal" />
<meta name="Robots" content="noindex" />

<link href="../../css/reset.css" rel="stylesheet" media="all" type="text/css" />
<link href="../../css/senna_styles.css" rel="stylesheet" media="all" type="text/css" />
<title>Senna Maintenance - page personnel de contacts</title>
</head>

<body>
	<div id="header">
    	<div class="milieu_955">
            <div id="logo">
                <a href="../index.html" title="Senna - Entretien ménager">
                    <img src="../../img/logo_senna.jpg" alt="logo Senna - Entretien ménager" title="Senna - Entretien ménager" width="185" height="80" />
                </a>
            </div>
            
            <div id="telephone">
            	<a href="../index.html" title="vers le site de Senna Entretien Ménager en français">Français</a>
                <a href="../../en/index.html" title="go to Senna Maintenance website in english">English</a>
                <p>&nbsp;</p>
                <p>tél : (514) 683-4398</p>
                <p>Montréal - QC - CA</p>
            </div>
        </div>
    </div>
    <div id="photo_montreal">
    	<div id="menu_horizontal">
            <div class="milieu_955">
                <ul>
                    <li><a href="../index.html" title="vers la page d'accueil de Senna - Entretien ménager">Accueil</a></li>
                    <li><a href="../apropos_entretien_menager.html" title="vers la page à propos de Senna - Entretien ménager">À propos</a></li>
                    <li><a href="../pages/services_entretien_menager.html" title="vers la page de services de Senna - Entretien ménager">Services</a></li>
                    <li><a href="../pages/contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">Contact</a></li>
                </ul>
            </div>    
        </div>
    </div>
    <div id="contenu">
    	<div class="milieu_955">
        	<h1 class="titre">Les derniers contacts qu'on a reçus</h1>
                
                
            <?php 
					
					/* Le nom d'utilisateur et le mot de passe*/
					$username = $_POST["txtNomUtilisateur"];
					$password = $_POST["txtMotdePasse"];
					
					include('mesparametres.php');
					
					/* La comparaison des info qui l'utilisateur a rempli : Si le nom d'utilisateur et le mot de passe sont correct, laisse passer */
					if($username == UTILISATEUR && $password == PASS) {
					
					/* la connection au serveur et la choix de la base de données*/
						if(mysql_connect(HOTE, UTILISATEUR, PASS)) {
							//echo "<p>connection serveur réussie</p><br />";
							if(mysql_select_db(BD)) {
								//echo "<p>connection à la base de données Senna Contacts réussie</p><br />";
								}
						
						echo "<h1><span>Dans 3 secondes, vous serez redigirer à la page qu'affiche les derniers contacts</span></h1>";
						echo "<meta http-equiv='refresh' content='3;url=affichage_contacts.php'>";
						}
						else {
						echo "<br /><br/><p class='erreur'>ERREUR - utilisateur ou mot de passe incorrect</p><br />"; 
						}
					}
				
			?>
                
                
        </div>
    </div>
    <div id="footer">
    	<div class="milieu_955">
        	<div id="footer_col1">
                <p>Estimation gratuite : <a href="../pages/contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">cliquez ici</a></p>
                <p>sans obligation de votre part.</p>
            </div>
            <div id="footer_col2">
            	<p>&copy; Senna Maintenance Inc. 2010 &reg;</p>
            </div>
            <div id="footer_col3">
            	<p>Contactez-nous : </p><p>(514) 683-4398</p>
                <p><a href="../pages/contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">courriel électronique</a></p>                
            </div>
            
            <div id="pub"><p>Développé par <a href="http://www.farinelliwebdesign.com" title="Veja o porfolio de web design de Mauricio Farinelli">Mauricio Farinelli</a></p></div>
        </div>
    </div>

</body>
</html>
