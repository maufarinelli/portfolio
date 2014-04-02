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

<title>Senna Janitorial and Cleaning Services - Contact us for the best janitorial cleaning service in Montreal</title>
</head>

<body>
	<div id="header">
    	<div class="milieu_955">
            <div id="logo">
                <a href="../index.html" title="Senna - Entretien ménager">
                    <img src="../../img/logo_senna.jpg" alt="logo Senna - Entretien ménager" title="Senna - Entretien ménager" width="185" height="80" align="left" />
                </a>
                	<h1>JANITORIAL AND CLEANING SERVICES</h1>
                    <h2>15 years committed to your company</h2>
            </div>
            
            <div id="telephone">
            	<a href="../../fr/pages/contact_entretien_menager.php" title="vers le site de Senna Entretien Ménager en français">Français</a>
                <a href="cleaning_service_contact.php" title="go to Senna Maintenance website in english">English</a>
                <p>&nbsp;</p>
                <p>phone : (514) 683-4398</p>
                <p>Montreal - QC - CA</p>
            </div>
        </div>
    </div>
    <div id="photo_montreal">
    	<div id="menu_horizontal">
            <div class="milieu_955">
                <ul>
                    <li><a href="../index.html" title="vers la page d'accueil de Senna - Entretien ménager">Home</a></li>
                    <li><a href="aboutus_cleaning_service.html" title="vers la page à propos de Senna - Entretien ménager">About us</a></li>
                    <li><a href="janitorial_cleaning_service.html" title="vers la page de services de Senna - Entretien ménager">Services</a></li>
                    <li><a href="cleaning_service_contact.php" title="vers la page de contact de Senna - Entretien ménager">Contact</a></li>
                </ul>
            </div>    
        </div>
    </div>
    <div id="contenu">
    	<div class="milieu_955">
        	<h1 class="titre">Contact us</h1>
            
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
                	<p>Contact us right now. We have the best price for janitorial cleaning service in Montreal - (514) 683-4398</p>
                    <p>We are available from Monday to Sunday to help you.</p> <br />
                    <p>If you want a free quote or just ask about our services, please fill in the form below.</p>
                    <p><span>* Fields marked with an asterisk are required</span>.</p><br />
                    <div id="box_form">
                        <img src="../../img/contact_image_364x450.jpg" alt="Contactez-nous pour avoir une estimation gratuite de notre travail de entretien menager" title="Contactez-nous dès maintenant" width="364" height="450"  />
                        <form action="contact_entretien_menager.php" name="frmContact" method="post" onsubmit="return valider()">
                            <div class="form_label"><label>Name <span>*</span> : </label></div>				<div class="form_input"><input tabindex="1" id="nom_client" type="text" name="txtNom" value="" /></div>
                            <div class="form_label"><label>Company name : </label></div>	<div class="form_input"><input id="nom_entreprise" type="text" name="txtEntreprise" value="" /></div>
                            <div class="form_label"><label>Phone <span>*</span> : </label></div>			<div class="form_input"><input id="telephone_client" type="text" name="txtTelefone" value="" /></div>
                            <div class="form_label"><label>E-mail <span>*</span> : </label></div>			<div class="form_input"><input id="courriel_client" type="text" name="txtCourriel" value="" /></div>
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
                <p>Free price quote : <a href="cleaning_service_contact.php" title="vers la page de contact de Senna - Entretien ménager">click here</a></p>
                <p>no obligation.</p>
            </div>
            <div id="footer_col2">
            	<p>&copy; Senna Maintenance Inc. 2010 &reg;</p>
            </div>
            <div id="footer_col3">
            	<p>Contact us : </p><p>(514) 683-4398</p>
                <p><a href="cleaning_service_contact.php" title="vers la page de contact de Senna - Entretien ménager">e-mail</a></p>                
            </div>
            
            <div id="pub"><p>Developed by  <a href="http://www.farinelliwebdesign.com" title="Veja o porfolio de web design de Mauricio Farinelli">Mauricio Farinelli</a></p></div>
        </div>
    </div>

</body>
</html>
