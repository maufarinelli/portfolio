<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Author" content="Mauricio Farinelli" />
<meta name="Description" content="Senna Industrie de Maintenance - Entreprise d'entretien ménager commercial à Montréal" />
<meta name="Keywords" content="estimation gratuite, contact, entretien ménager, nettoyage, lavage, nettoyage commercial, nettoyage de bureau, lavage de tapis, nettoyage après construction, nettoyage des magasins, nettoyage de fenêtres, lavage des fenêtres, nettoyage de plancher" />
<meta name="Robots" content="index, follow" />

<link href="../../css/reset.css" rel="stylesheet" media="all" type="text/css" />
<link href="../../css/senna_styles.css" rel="stylesheet" media="all" type="text/css" />

<script src="../../js/senna_validation.js" type="text/javascript"></script>
<script src="../../js/senna_formulaire.js" type="text/javascript"></script>

<title>Senna services d'entretien ménager à Montréal - Contactez-nous pour nos services d'entretien ménager commercial</title>
</head>

<body>
	<div id="header">
    	<div class="milieu_955">
            <div id="logo">
                <a href="../index.html" title="Senna - Entretien ménager">
                    <img src="../../img/logo_senna.jpg" alt="logo Senna - Entretien ménager" title="Senna - Entretien ménager" width="185" height="80" align="left" />
                </a>
                	<h1>SERVICE D'ENTRETIEN MÉNAGER</h1>
                    <h2>15 années à votre service</h2>
            </div>
            
            <div id="telephone">
            	<a href="contact_entretien_menager.php" title="vers le site de Senna Entretien Ménager en français">Français</a>
                <a href="../../en/pages/cleaning_service_contact.php" title="go to Senna Maintenance website in english">English</a>
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
                    <li><a href="apropos_entretien_menager.html" title="vers la page à propos de Senna - Entretien ménager">À propos</a></li>
                    <li><a href="services_entretien_menager.html" title="vers la page de services de Senna - Entretien ménager">Services</a></li>
                    <li><a href="contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">Contact</a></li>
                </ul>
            </div>    
        </div>
    </div>
    <div id="contenu">
    	<div class="milieu_955">
        	<h1 class="titre">Contactez-nous</h1>
            
            <?php 
			if (isset($_POST["btnEnvoyerEstim"])) {
			
			$namePerson = $_POST["txtNom"];
			$nameCompany = $_POST["txtEntreprise"];
			$telephone = $_POST["txtTelefone"];
			$courriel = $_POST["txtCourriel"];
			$message = $_POST["txtMessage"];
			
			include('mesparametres.php');
			
			if(mysql_connect(HOTE, UTILISATEUR, PASS)) {
				//echo "connection serveur réussie<br />";
				if(mysql_select_db(BD)) {
					//echo "<p>connection à la base de données Senna Contacts réussie</p><br />";
					}
				}
			
			utf8_encode($namePerson);
			utf8_encode($nameCompany);
			utf8_encode($telephone);
			utf8_encode($courriel);
			utf8_encode($message);
			
			
			$requete = "INSERT INTO `e0997501`.`contacts_recu` (`Nom_personne` ,`Nom_entreprise` , `Telephone` ,`Courriel` ,`Message`) 
			VALUES ('$namePerson', '$nameCompany', '$telephone', '$courriel', '$message')";
			
			if(mysql_query("SET NAMES 'utf8'")) {
				//echo "Utf8 a été choisi";
				if(mysql_query($requete)) {
					echo "<h1><span>Merci d'avoir contacté Senna Maintenance Inc.<br />Nous allons vous contacter dans les prochaines 24 heures.</span></h1>";
					}
					else {
						echo "<h1 style='color:#f00'>Problème de connexion. Votre message n'a pas été envoyé.<br /> S'il vous plaît, essayez de nous envoyer votre question de nouveau.</h1>";
						}
			}
		}
			?>
            
                <div class="contenu_forms">
                	<p>N'hésitez pas à nous contacter dès maintenant - (514) 683-4398</p>
                    <p>Nous sommes disponibles du lundi à dimanche pour vous aider.</p> <br />
                    <p>Si vous voulez une estimation gratuite ou seulement nous poser une question, utilisez le formulaire ci-dessous.</p>
                    <p><span>* Tous les champs avec un astérisque sont obligatoires</span>.</p><br />
                    <div id="box_form">
                        <img src="../../img/contact_image_364x450.jpg" alt="Contactez-nous pour avoir une estimation gratuite de notre travail de entretien menager" title="Contactez-nous dès maintenant" width="364" height="450"  />
                        <form action="contact_entretien_menager.php" name="frmContact" method="post" onsubmit="return valider()">
                            <div class="form_label"><label>Nom <span>*</span> : </label></div>				<div class="form_input"><input tabindex="1" id="nom_client" type="text" name="txtNom" value="" /></div>
                            <div class="form_label"><label>Nom de l'entreprise : </label></div>	<div class="form_input"><input id="nom_entreprise" type="text" name="txtEntreprise" value="" /></div>
                            <div class="form_label"><label>Téléphone <span>*</span> : </label></div>			<div class="form_input"><input id="telephone_client" type="text" name="txtTelefone" value="" /></div>
                            <div class="form_label"><label>Courriel <span>*</span> : </label></div>			<div class="form_input"><input id="courriel_client" type="text" name="txtCourriel" value="" /></div>
                            <div class="form_label"><label>Message : </label></div>				<div class="form_input"><textarea id="message_client" name="txtMessage" ></textarea></div>
                            <div id="form_bouton"><input type="submit" name="btnEnvoyerEstim" value="Envoyer" /></div>
                        </form>
                    </div>
                </div>
                
        </div>
    </div>
    <div id="footer">
    	<div class="milieu_955">
        	<div id="footer_col1">
                <p>Estimation gratuite : <a href="contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">cliquez ici</a></p>
                <p>sans obligation de votre part.</p>
            </div>
            <div id="footer_col2">
            	<p>&copy; Senna Maintenance Inc. 2010 &reg;</p>
            </div>
            <div id="footer_col3">
            	<p>Contactez-nous : </p><p>(514) 683-4398</p>
                <p><a href="contact_entretien_menager.php" title="vers la page de contact de Senna - Entretien ménager">courriel électronique</a></p>                
            </div>
            
            <div id="pub"><p>Développé par <a href="http://www.farinelliwebdesign.com" title="Veja o porfolio de web design de Mauricio Farinelli">Mauricio Farinelli</a></p></div>
        </div>
    </div>

</body>
</html>
