<?php 	if(isset($_GET['lang'])) 
		{
			$lang = $_GET['lang'];	
			include_once('language/'.$lang.'.php');
		}
		
		else 
		{
			$lang = 'en';
			include_once('language/en.php');
		}
?>
<!DOCTYPE html>
<!--[if IE 7]>         <html class="no-js ie ie7"> <![endif]-->
<!--[if IE 8]>         <html class="no-js ie ie8"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $aLang['page.title']; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
		<link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        
        <link href='http://fonts.googleapis.com/css?family=Unkempt:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400' rel='stylesheet' type='text/css'>
        
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/animations.css">
        <script src="js/vendor/modernizr.js"></script>
    </head>
    <body>
        <header class="gradient">
        	<h1><?php echo $aLang['header.title']; ?></h1>
            <ul class="language">
            	<li><a href="<?php echo $lang == 'en' ? $_SERVER['PHP_SELF'] . '?lang=fr' : $_SERVER['PHP_SELF'] . '?lang=en'; ?>"><?php echo $aLang['header.lang.switcher']; ?></a></li>
            </ul>
			<nav class="menu">
            	<span class="menu-about"><?php echo $aLang['menu.about']; ?></span>
                <span class="menu-projects"><?php echo $aLang['menu.projects']; ?></span>
            </nav>
            
            <div id="sun"></div>
            <div id="background"></div>
            <div id="forefront"></div>
            
            <div id="helice">
            	<img class="helice-img" src="images/helice.png">
            </div>
            
        </header>
        
        <section id="about-us">
        	<div class="row">
                <h2><?php echo $aLang['about.title']; ?></h2>
                <p><?php echo $aLang['about.copy1']; ?></p>
                <p><?php echo $aLang['about.copy2']; ?></p>
                <p><?php echo $aLang['about.copy3']; ?></p>
                <p><?php echo $aLang['about.copy4']; ?></p>
                <p><?php echo $aLang['about.copy5']; ?></p>
            </div>
        </section>
        
        <section id="web-projects">
        	<h2><?php echo $aLang['projects.title']; ?></h2>
        	
            <div class="web-projects-wrapper clearfix">
                
                <!-- Project Bugtek -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo bugtek" src="images/logos/bugtek.jpg">
                    	<h3><?php echo $aLang['projects.bugtek.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.bugtek.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.bugtek.copy1']; ?></p>
                        <p><?php echo $aLang['projects.bugtek.copy2']; ?></p>
                        <a class="cta" href="http://www.bug-tek.ca" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
                <!-- Project Senna -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo senna" src="images/logos/senna.jpg">
                    	<h3><?php echo $aLang['projects.senna.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.senna.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.senna.copy1']; ?></p>
                        <p><?php echo $aLang['projects.senna.copy2']; ?></p>
                        <a class="cta" href="#" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
                <!-- Project Aquatek -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">	
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo aquatek" src="images/logos/aquatek.jpg">
                    	<h3><?php echo $aLang['projects.aquatek.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.aquatek.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.aquatek.copy1']; ?></p>
                        <a class="cta" href="http://www.aqua-tek.ca" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
                <!-- Project Myrrha -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                   	<img class="logo hide-logo myrrha" src="images/logos/myrrha.jpg">
                    	<h3><?php echo $aLang['projects.myrrha.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.myrrha.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.myrrha.copy1']; ?></p>
                        <p><?php echo $aLang['projects.myrrha.copy2']; ?></p>
                        <a class="cta" href="http://www.myrrhafarma.com.br/" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
                <!-- Project Biogalenus -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo biogalenus" src="images/logos/biogalenus.jpg">
                    	<h3><?php echo $aLang['projects.biogalenus.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.biogalenus.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.biogalenus.copy1']; ?></p>
                        <p><?php echo $aLang['projects.biogalenus.copy2']; ?></p>
                        <a class="cta" href="http://www.biogalenus.com.br" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
                <!-- Project Blackjack -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo blackjack" src="images/logos/blackjack.jpg">
                    	<h3><?php echo $aLang['projects.blackjack.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.blackjack.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.blackjack.copy1']; ?></p>
                        <p><?php echo $aLang['projects.blackjack.copy2']; ?></p>
                        <a class="cta" href="#" target="_blank"><?php echo $aLang['projects.blackjack.cta']; ?></a>
                </div>
                
                <!-- Project Guitar -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo guitar" src="images/logos/guitar.jpg">
                    	<h3><?php echo $aLang['projects.guitar.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.guitar.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.guitar.copy1']; ?></p>
                        <p><?php echo $aLang['projects.guitar.copy2']; ?></p>
                        <a class="cta" href="#" target="_blank"><?php echo $aLang['projects.guitar.cta']; ?></a>
                </div>
                
                <!-- Project Old Portfolio -->
                <div class="project">
                	<img class="mobile-symbol" src="images/open_with_hand.png" width="106" height="146">
                    <img class="window-left" src="images/window_left.png" width="85" height="196">
                    <img class="window-right" src="images/window_right.png" width="80" height="196">
                    <img class="logo hide-logo old-portfolio" src="images/logos/old-portfolio.jpg">
                    	<h3><?php echo $aLang['projects.portfolio.title']; ?></h3>
                        <p><?php echo $aLang['projects.developed.copy']; ?></p>
						<ul>
                            <?php echo $aLang['projects.portfolio.technologies']; ?>
                        </ul>
                        <p><?php echo $aLang['projects.portfolio.copy1']; ?></p>
                        <p><?php echo $aLang['projects.portfolio.copy2']; ?></p>
                        <p><?php echo $aLang['projects.portfolio.copy3']; ?></p>
                        <a class="cta" href="http://www.biogalenus.com.br" target="_blank"><?php echo $aLang['projects.website.cta']; ?></a>
                </div>
                
            </div>
            
            
        </section>
        
        <footer>
        
        </footer>
        

        <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>-->
        <script src="js/vendor/jquery-1.8.3.min.js"></script>
		<script src="js/vendor/raphael.js"></script>
        <script src="js/vendor/jquery.easing.js"></script>
        <script src="js/inview.js"></script>
        <script src="js/parallax.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        
    </body>
</html>
