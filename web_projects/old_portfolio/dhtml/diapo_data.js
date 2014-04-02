//Javascript//

// Données du diaporama
var fiches = [
			 	/*{
					titre:"Clash of the Titans",
					image:"clash_of_titans.jpg",
					texte:"The mortal son of the god Zeus embarks on a perilous journey to stop the underworld and its minions from spreading their evil to Earth as well as the heavens",
					miniature:"clash_of_titans.jpg",
					lien:"http://www.imdb.com/title/tt0800320/",
					date:new Date(2010,2,29)
				},
			 	{
					titre:"The Nightmare Before Christmas",
					image:"nightmare_before_christmas.jpg",
					texte:"Jack Skellington, king of Halloweentown, discovers Christmas Town, but doesn't quite understand the concept.",
					miniature:"nightmare_before_christmas.jpg",
					lien:"http://www.imdb.com/title/tt0107688/",
					date:new Date(1993,9,29)
				},
			 	{
					titre:"Les visiteurs",
					image:"Les_visiteurs.jpg",
					texte:"A medieval nobleman and his squire are accidentally transported to contemporary times by a senile sorcerer...",
					miniature:"Les_visiteurs.jpg",
					lien:"http://www.imdb.com/title/tt0108500/",
					date:new Date(1996,6,16)
				},
			 	{
					titre:"Blade runner",
					image:"Blade-runner.jpg",
					texte:"Deckard, a blade runner, has to track down and terminate 4 replicants who hijacked a ship in space and have returned to earth seeking their maker.",
					miniature:"Blade-runner.jpg",
					lien:"http://www.imdb.com/title/tt0083658/",
					date:new Date(1982,5,25)
				},
			 	{
					titre:"Cinquieme éléments",
					image:"Cinquieme_elements.jpg",
					texte:"In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr Zorg at bay.",
					miniature:"Cinquieme_elements.jpg",
					lien:"http://www.imdb.com/title/tt0119116/",
					date:new Date(1997,4,9)
				},
			 	{
					titre:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
					image:"dr_strangelove.jpg",
					texte:"An insane general starts a process to nuclear holocaust that a war room of politicians and generals frantically try to stop.",
					miniature:"dr_strangelove.jpg",
					lien:"http://www.imdb.com/title/tt0057012/",
					date:new Date(1964,0,29)
				},
			 	{
					titre:"Barry Lyndon",
					image:"barry_lyndon.jpg",
					texte:"An Irish rogue wins the heart of a rich widow and assumes her dead husband's position in 18th Century aristocracy.",
					miniature:"barry_lyndon.jpg",
					lien:"http://www.imdb.com/title/tt0072684/",
					date:new Date(1975,11,18)
				},*/
				{
				  titre:"María llena eres de gracia (Maria Full of Grace)",
				  image:"01Maria.jpg",
				  texte:"HBO Films and Fine Line Features present the Sundance and Berlin Film Festival award winner, Maria Full of Grace. The film tells the story of one young woman’s journey from a small Colombian town to the streets of New York. A bright, spirited 17-year old, Maria Alvarez (Catalina Sandino Moreno) lives with three generations of her family in a cramped house in rural Colombia and works stripping thorns from flowers in a rose plantation. The offer of a lucrative job involving travel – in fact, becoming a drug “mule” – changes the course of her life.",
				  miniature:"01Maria.jpg",
				  lien:"http://www.imdb.com/title/tt0390221/",
				  date:new Date(2004,3,2)
			  },
			  
			  {
				  titre:"Paraíso travel",
				  image:"02paraiso.jpg",
				  texte:"Get into US borders by illegal ways could be a dramatic journey, but this is not a problem for Reina, a colombian teenager who only wants to live the american dream in NY. Her boyfriend is confused about his feelings and follow her, leaving behind his own dreams and a quite and simple life back in Medellin. When he faces the reality and find out his current situation alone in the big apple and with nothing else in this pockets but hopeless and sadness about his choices, we find out a story about turns and crude reality. ",
				  miniature:"02Paraiso.jpg",
				  lien:"http://www.imdb.com/title/tt0475860/",
				  date:new Date(2008,0,18)
			  },
			  
			  {
				  titre:"Rosario Tijeras",
				  image:"03Rosario.jpg",
				  texte:"The film is told in flashback from the point of view of Antonio, a young man from the upper class of Medellín. While at a Medellín disco one night, both he and his best friend, Emilio, simultaneously lay eyes upon the beautiful Rosario. Emilio pursues her and begins an affair with her. However, Emilio's family rejects the relationship, which crushes Emilio. Antonio continues his own platonic relationship with Rosario as her confidante. When Rosario's brother, Jonhefe, with whom Rosario lives, is killed, Antonio and Rosario grow closer. However, Rosario, who specializes in murdering men while kissing them, is a marked woman, and she eventually meets her comeuppance.",
				  miniature:"03Rosario.jpg",
				  lien:"http://www.imdb.com/title/tt0382271/",
				  date:new Date(2005,7,12)
			  },
			  {
				  titre:"La virgen de los sicarios",
				  image:"04Virgen.jpg",
				  texte:"Fernando (Germán Jaramillo) meets Alexis (Anderson Ballesteros), a handsome gay youth, at a party of one of his old friends and immediately falls for him. The two begin a relationship which, apart from the sex, consists mainly in Fernando telling Alexis how pastoral the city was when he left, while Alexis explains to Fernando the ins and outs of everyday robbery, violence, and shootings. Even though Fernando has come home to die, his sarcastic worldview is mellowed somewhat by his relationship with Alexis.",
				  miniature:"04Virgen.jpg",
				  lien:"http://www.imdb.com/title/tt0250809/",
				  date:new Date(2000,8,1)
			  },
			  
			  {
				  titre:"Perro come perro",
				  image:"05Perro.jpg",
				  texte:"Two Colombian hoods, Victor Peñaranda (Marlon Moreno) and Eusebio Benitez (Oscar Borda), find themselves waiting together in a hotel room for instructions on an assignment. Neither realizes that their own mistakes have brought them to this dangerous juncture. Mixing elements of thriller, action and black comedy, this film dishes out a dark lesson in comeuppance and the punishment awaiting those who break the unwritten code among criminals. ",
				  miniature:"05Perro.jpg",
				  lien:"http://www.imdb.com/title/tt1157631/",
				  date:new Date(2010,2,29)
			  },
			  
			  {
				  titre:"Satanás ",
				  image:"06Satanas.jpg",
				  texte:"Three parallel stories that occur in the eve of the infamous Pozzetto Massacre, involving a femme-fatal that cons on rich men, a priest who's in love with his housekeeper and a tired-of-life veteran of war who has become a teacher and desires one of his female students. Three characters looking for love, redemption and second chances in a world reigned by their own fears, temptations, passions and pains, which will end up in a trigger effect of tragic events.",
				  miniature:"06Satanas.jpg",
				  lien:"http://www.imdb.com/title/tt0473697/",
				  date:new Date(2007,5,1)
			  },
			  
			  {
				  titre:"Rodrigo D: No futuro",
				  image:"07Rodrigo.jpg",
				  texte:"Rodrigo, a poor and troubled teenager in the barrios of Medellin, Colombia, struggles to find hope in a world ravaged by violence and chaos. An aspiring drummer in a punk band, he uses his music to try to drive the despair out of his head. Rodrigo and his friends are bored teenagers living in Medellin. Rodrigo wants to start a punk band. The youths mainly loaf around the hillside shanty towns and, for kicks, steal a bike or car, or shoot someone.  ",
				  miniature:"07Rodrigo.jpg",
				  lien:"http://www.imdb.com/title/tt0100508/",
				  date:new Date(1990,4,15)
			  },
			  
			  {
				  titre:"Golpe de estadio",
				  image:"08Golpe.jpg",
				  texte:"An oil company has set up a camp for geological research in a small village in Colombia that have been named as New Texas becomes the target of the guerrillas holding constant clashes with police in the area, the confrontation is altered in the interest of the sides to continue the transmission of World Cup qualifying soccer USA 94 so they end up making a truce to meet to see the meeting between the Colombian and the Argentina in the only remaining TV working in the village.",
				  miniature:"08Golpe.jpg",
				  lien:"http://www.imdb.com/title/tt0183127/",
				  date:new Date(1998,11,25)
			  },
			  
			  {
				  titre:"La estrategia del caracol ",
				  image:"09Estrategia.jpg",
				  texte:"The film starts with news reporter Jose Antonio Pupo (played by Carlos Vives) interviewing a man after the movie events had taken place. This gentleman who is also a tenant reveals to the journalist how the material house where the tenants lived for so many years was taken to a different place by rudimentary but ingenious means.The man's story entangles with the depiction of the events. The house is an old one and it is home of different kinds of people. All of them are humble and from a diverse background. They are told to leave the house because its owner, a rich obnoxious man from Bogota's exclusive area, has new plans with it.",
				  miniature:"09Estrategia.jpg",
				  lien:"http://www.imdb.com/title/tt0109747/",
				  date:new Date(1993,11,25)
			  },
			  {
						titre:"La Grande illusion",
					  	image:"grande-illusion.jpg",
						texte:"Pendant la guerre de 1914, l'avion du capitaine de Boieldieu et du lieutenant Maréchal est abattu par les hommes du commandant Von Rauffenstein. Celui-ci les envoie dans un camp d'où aucun homme n'a pu jusqu'à présent s'échapper Boieldieu, Maréchal et d'autres prisonniers construisent un tunnel afin de s'évader...",
						miniature:"grande-illusion.jpg",
						lien:"http://www.cinemotions.com/modules/Films/fiche/3596/La-Grande-illusion.html",
						date:new Date(1937,5,04)
					},
					{
						titre:"Buffet froid",
						image:"buffet-froid.jpg",
						texte:"Alphonse retrouve dans le métro le gars avec qui il discutait il y a peu, mais avec son propre couteau dans le ventre. Puis sa femme est assassinée, et le meurtrier se présente à lui. Alphonse l'emmène chez son voisin, inspecteur de police. Le trio sympathise et part à la campagne, quand un tueur et une mystérieuse jeune femme les rejoignent...",
						miniature:"buffet-froid.jpg",
						lien:"http://www.cinemotions.com/modules/Films/fiche/2365/Buffet-froid.html",
						date:new Date(1979,11,19)
					},
					{
						titre:"Potemkin",
						image:"potemkine.jpg",
						texte:"1905. L'année de la première révolution russe. La capitulation de Port-Arthur a symbolisé la défaite de la Russie dans sa guerre contre le Japon. Le 9 janvier, le Tsar fait tirer sur la foule qui se dirigeait vers le Palais d'Hiver. Au large d'Odessa mouillent plusieurs unités de l'escadre tsariste, notamment le Cuirassé Prince Potemkine dont des marins se tiennent en liaison avec des ouvriers grévistes d'Odessa. Le 14 juin, les marins du Potemkine découvrent que les quartiers de viande apportés à bord du navire sont pourris. Le médecin-major Smirnov juge néanmoins la viande propre à la consommation. Les marins se refusent à manger cette viande avariée et le commandant Golikov, fait monter tout le monde sur le pont. Il convoque la garde armée du navire et décide de faire fusiller un groupe de mutins. Mais les marins de la garde refusent de faire feu et ce sont les officiers et leurs partisans qui sont jetés à l'eau. A Odessa, la foule apprend la révolte de l'équipage du Potemkine et, après avoir rendu hommage à la dépouille de Vakoulintchouk, un marin tué pendant l'émeute, se masse sur les escaliers...",
						miniature:"potemkine.jpg",
						lien:"http://www.cinemotions.com/modules/Films/fiche/20450/Le-Cuirasse-Potemkine.html",
						date:new Date(1925,1,1)
					},
					{
						titre:"Alphaville",
						image:"alphaville.jpg",
						texte:"Lemmy Caution est un agent secret chargé d'aller à Alphaville, la ville dirigée par Alpha 60, un cerveau-robot qui règne sur la cité où tout sentiment est interdit, pour convaincre le professeur von Braun de partir avec lui dans les planètes extérieures. La fille du professeur, Natacha, le guide dans la ville où il retrouve Henri Dickson, un ex-agent secret qui lui remet un message lui indiquant de détruire Alpha 60 et de sauver ceux qui pleurent...",
						miniature:"alphaville.jpg",
						lien:"http://www.cinemotions.com/recherche/alphaville.html",
						date:new Date(1965,4,5)
					},
					{
						titre:"Modern Times",
						image:"modern-times.jpg",
						texte:"Dans l'usine où il travaille, Charlot teste un appareil à faire manger les ouvriers et devient fou. Licencié, il rencontre une jeune fille pauvre et tous deux tentent de trouver à manger. Après quelques temps en prison, Charlot devient serveur dans un café. Chômeur à nouveau, il quitte la ville en compagnie de la jeune fille.",
						miniature:"modern-times.jpg",
						lien:"http://www.cinemotions.com/modules/Films/fiche/5177/Les-Temps-modernes.html",
						date:new Date(1936,1,5)
					},
					{
						titre:"Continental, un film sans fusil",
						image:"continental.jpg",
						texte:"Comédie noire pour rire jaune, Continental, un film sans fusil porte un regard ludique sur la vulnérabilité de l'individu et le lien fragile qui l'unit à ses concitoyens. Il s'agit du premier long métrage de Stéphane Lafleur, monteur de séries télévisées et réalisateur de courts métrages remarqués tels que Claude, Snooze ou Karaoké (mention spéciale du jury au Festival de Toronto). De nombreuses sélections dans des festivals internationaux (Mostra de Venise par exemple) sont venues confirmer que ce petit film québécois est bel et bien l'un des meilleurs du cru 2007. Une excellente surprise. Devant le succès remporté par le film tant au niveau public que critique, Continental, un film sans fusil eut une deuxième carrière en salles au Québec (au total : 45 000 spectateurs). Le titre de la version sous-titrée anglais est : Continental, A Film Without Guns.",
						miniature:"continental.jpg",
						lien:"http://filmsquebec.over-blog.com/article-26212400.html",
						date:new Date(2007,10,9)
					}
			  ];