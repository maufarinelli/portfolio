<?php 

// dsfsdfsdfs
function setLanguage() {
	$sitelan = "fr";
	if(isset($_GET["lan"])) {
		$sitelan = $_GET["lan"];
		setcookie("bolddesignlan",$_GET["lan"],time()+5*365*24*3600);
	}
	else if(isset($_COOKIE["bolddesignlan"])) {
		$sitelan = $_COOKIE["bolddesignlan"];
	}
	return $sitelan;
}


$availableLanCodes = array(
						"fr"	=>	"Français",
						"en"	=>	"English",						
						"pt"	=>	"Português"
					   );

function getAvailableLanguages() {
	global $availableLanCodes;
	global $sitelan;
	
	$lanCodes = array();
	
	$textDir = scandir("text");
	for($i=0; $i<count($textDir); $i++) {
		$lanCode = $textDir[$i];
		if(file_exists("text/$lanCode/main.txt.php") && $lanCode!=$sitelan && isset($availableLanCodes[$lanCode])) 
			$lanCodes[] = $lanCode;
	}
	
	return $lanCodes;
}

?>