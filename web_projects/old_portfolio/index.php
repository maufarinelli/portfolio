<?php 
	include_once("lib/main.lib.php");
	$sitelan = setLanguage();
	include_once("text/$sitelan/main.txt.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="Author" content="Mauricio Farinelli" />
<meta name="Description" content="<?php echo $meta_description; ?>" />
<meta name="Keywords" content="<?php echo $meta_keywords; ?>" />
<meta name="Robots" content="index, follow" />
<meta name="google-site-verification" content="KanNjs8lbOsGoUJmYqIdxAj3v3K7EDadIHx19ei0F9c" />

<title><?php echo $title; ?></title>
<link href="dhtml/reset.css" rel="stylesheet" media="all" type="text/css" />
<link href="dhtml/webdesign_factory.css" rel="stylesheet" media="all" type="text/css" />
<script src="dhtml/webfactory.js" type="text/javascript"></script>
<script type="text/javascript" src="dhtml/diapo.lib.js"></script> 
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-18366065-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<script language="JavaScript" type="text/javascript">
<!--
var isInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
// Handle all the FSCommand messages in a Flash movie.
function Anim_machine_DoFSCommand(command, args) {
	var Anim_machineObj = isInternetExplorer ? document.all.Anim_machine : document.Anim_machine;
	//
	// Place your code here.
	//
}
// Hook for Internet Explorer.
if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
	document.write('<script language=\"VBScript\"\>\n');
	document.write('On Error Resume Next\n');
	document.write('Sub Anim_machine_FSCommand(ByVal command, ByVal args)\n');
	document.write('	Call Anim_machine_DoFSCommand(command, args)\n');
	document.write('End Sub\n');
	document.write('</script\>\n');
}
//-->
</script>


<script type="text/javascript">

function conteudoDisplay() {
	document.getElementById("conteudo").style.display = "block";
	}
	
  </script>  

</head>

<body>
<div id="principal">
	<div id="header">
    	
        <div id="machine">
        	<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="942" height="424" id="Anim_machine" align="middle">
			<param name="allowScriptAccess" value="always" />
			<param name="allowFullScreen" value="false" />
			<param name="movie" value="img/anim_machine.swf" />
    		<param name="loop" value="false" />
    		<param name="quality" value="high" />
    		<param name="wmode" value="transparent" />	
    		<embed src="img/anim_machine.swf" loop="false" quality="high" width="942" height="424" name="Anim_machine" wmode="transparent" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_fr" />
	</object>
        </div>
        
        <div id="logo">
        	<a href="<?php echo $_SERVER['PHP_SELF']; ?>"><img src="img/logo_webdesign.png" alt="logo Farinelli Web Factory" title="<?php echo $h_alt_logo; ?>" width="168" height="121" /></a>
        </div>
        <div id="descricao">
        	<h1><?php echo $h1_description; ?></h1>
        </div>
        <div id="language">
        	<ul>
        	<?php 
                $lanCodes = getAvailableLanguages();
                $h_ahref_title = "";
				foreach($lanCodes as $lanCode) {
					if ($lanCode == "fr") $h_ahref_title = $h_ahref_title_fr;
					elseif ($lanCode == "en") $h_ahref_title = $h_ahref_title_en;
					else $h_ahref_title = $h_ahref_title_pt;
                print("<li><a href='".$_SERVER['PHP_SELF']."?lan=$lanCode' title='$h_ahref_title'>".$availableLanCodes[$lanCode]."</a></li>");
				}
            ?>
            </ul>
            <!--<a href="index.html" title="Vers la version en français du mon portfolio de web design"><?php echo $h_langue_francais; ?></a> | <a href="en/port_webdesign_en.html" title="Go to the english portfolio version"><?php echo $h_langue_english; ?></a> | <a href="pt/port_webdesign_pt.html" title="Veja a versão em Português do meu portfolio de web design"><?php echo $h_langue_portugues; ?></a>-->
        </div>
        
        <div id="menu">
        	<div id="menu_1" onmousedown="changeMouseDown(1);" onmouseup="changeMouseUp(1);"><h2><?php echo $nav_about; ?></h2></div>
            <div id="menu_2" onmousedown="changeMouseDown(2);" onmouseup="changeMouseUp(2);"><h2><?php echo $nav_projets; ?></h2></div>
            <div id="menu_3" onmousedown="changeMouseDown(3);" onmouseup="changeMouseUp(3);"><h2><?php echo $nav_contact; ?></h2></div>
        </div>
        
    </div>
    <div id="conteudo">
   	   <div id="conteudo_main">
           <div id="conteudo_1"> <!-- era o conteudo_aboutme -->
               <h1><?php echo $about_h1; ?></h1>
                    <?php echo $about_text; ?>

        	</div>
            <div id="conteudo_3"> <!-- era o conteudo_contact -->
                <h1><?php echo $contact_h1; ?></h1>
                    <?php echo $contact_text; ?>
            </div>
            
            <!-- começo da div com todos os projetos -->
            <div id="conteudo_2"> <!-- era o conteudo_webprojects -->
                <h1><?php echo $projets_h1; ?></h1>
                
                <!-- começo da div que contem as miniaturas dos projetos --> 
                <div id="blocNav">
                		<p>&nbsp;</p>
                		<div id="seemore">
                            <h3><?php echo $projets_h3; ?></h3>
                        </div>
                    <div id="seta_esquerda" onclick="deroulerFicheNav(0)"><p>&nbsp;</p></div>
                    <div id="seta_direita" onclick="deroulerFicheNav(1)"></div>
                    <div id="fenetreNav">
                        <!-- Le div suivant contient les miniatures -->
                        <div id="nav">
                        
                        <?php 
							$xmlSimple = simplexml_load_file("xml/web_projects.xml");
							$projets = $xmlSimple->xpath("//content[@xml:lang='$sitelan']");
							/*echo var_dump($projets);*/
							
							/*foreach ($projets as $projet) {*/
							for($i=0; $i<count($projets); $i++) {
								$nom = $projets[$i]->name[0];
								$petite_img = $projets[$i]->thumb[0];
								$alt = $projets[$i]->alt_thumb[0];
									if ($i==0) 
									echo "<span class='navSelected' onclick='deroulerFiche($i, this)'><p>$nom</p><img src='$petite_img' alt='$alt' title='' width='198' height='102' /></span>";
									else
									echo "<span class='navNotSelected' onclick='deroulerFiche($i, this)'><p>$nom</p><img src='$petite_img' alt='$alt' title='' width='198' height='102' /></span>";
							}
							
						?>
                              
                        </div>
                  	</div>
                   	
              	</div>
                
            <!-- a div que clipa -->
                <div id="conteudo_web_clip">
                     <hr id="linha_hr" /> 
                     <!-- a div com width 10000 -->
                    <div id="fiches">     
                        <!-- inicio do loop que gera todos os projetos a partir do XMl web_projects.xml  -->           	
                        
                        <?php 
														
							
							/*echo var_dump($projets);*/
																				
							foreach ($projets as $projet) {
								$alt = $projet->alt_thumb[0];
								$image = $projet->img[0];
								$nom_h1 = $projet->h1[0];
								
								$chaque_langage = ""; 
								$langages = $projet->languages->language;
								for($i=0; $i<count($langages); $i++) {
									if($langages[$i] == "Photoshop") 
									$chaque_langage .= "<li><b>".$langages[$i]."</b> $projets_cree</li>";
									else $chaque_langage .= "<li><b>".$langages[$i]."</b></li>";
									}
								
								$chaque_paragraphe = "";
								$paragrafo = $projet->paragraphes->par;
								for($i=0; $i<count($paragrafo); $i++) {
									$chaque_paragraphe .= "<p>".$paragrafo[$i]."</p>";
									}
							
								$lien_site = $projet->lien[0];
								$text_lien_site = $projet->text_lien[0];
								
								echo "<div class='fiche'>                      	
                   	 			<div class='gauche'>
                            		<img src='$image' alt='$alt' />
                            	</div>
                            	<div class='droite'>
                                	<h1>$nom_h1</h1>
                                	<p><b>$projets_developpe</b></p>
                                	<ul>
										$chaque_langage
                                	</ul>
                                	<br />
                                	$chaque_paragraphe
                                	<h6><a target='_blank' href='$lien_site'>$text_lien_site</a></h6>";
                                	
									if ($lien_site != "") {
									echo "<p><span class='small_advise'>
									$projets_note_lien</span></p>
                            		</div><br clear='all' />
                        		</div>";
									}
							}
							
						?>
                        <!-- fim do loop que gera todos os projetos a partir do XMl web_projects.xml  -->
                        
                    <!-- fim da div Fiche com width 10000px -->    
                    </div>    
                       
                <!-- fim da div que clipa -->       	
                </div>
                  
              </div>
             </div></div>   <!-- dois fechamentos a checar -->             
          	<div id="footer">
            	<p>
					<?php echo $footer_copyright ?>
            		<script type="text/javascript">
              		var currentTime = new Date();
              		var year = currentTime.getFullYear();
              		document.write(year);
              		</script>
            	</p>
            </div>
          	
            
      	</div>
    </div>
</div>

</body>
</html>
