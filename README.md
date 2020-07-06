# 1T-projet-marque
Voici le repository pour mon projet creation d'un site de vettement en ligne.

2019 - 2020 Aspects Structures et Données

 ![Image de l'ephec](https://i.imgur.com/k1pB47i.png?1)
 ## Présentation :  
je suis un élèves en TI de l'[Ephec](https://www.ephec.be/)
* [MUTTERER Matthieu](https://github.com/Matthieu-mutterer) 1TM2
## Description : 
### Configuration de la DB : 
* id utilisateur : **dba**
* mdp utisateur  : **sql**
* nom du serveur : **projet2**
* nom de la db   : **projet2**  
### Shema rationne
![image du shema relatioinnel](https://imgur.com/a/Y2isTy2)
### Fonctionnalités principales : 
   *	Est un site qui supporte la commercialisation d’une nouvelle marque de vêtements. 
   * Il y aura un formulaire pour créer son propre compte sur le site. 
 
### Fonctionnalités secondaires : 
  Pour chaque vêtement : 
   - Un prix seras affiché. 
   - L’utilisateur pourra choisir la taille. 
   - L’utilisateur pourra choisir la couleur. 
   - L’utilisateur pourra ajouter ses achats dans son panier et aller consulter son panier pour passer la commande. 
 ### Aspects implémentés : 
Backend : une base de données avec le style de vêtements, le prix de chaque vêtement, la taille et la couleur.

Backend :  Un serveur web capable de fournir les pages html, js, css, et de proposer des webservices.

Backend : Des Webservices : 
* Un webservice permettant de sélectionner chaque vêtement. 
* Un webservice permettant d’afficher le nom de chaque vêtement. 
* Un webservice permettant de sélectionner la taille et la couleur de chaque vêtement. 

Frontend : Une page web (html, js, css) permettant d'appeler les webservices et de traiter les réponses, les utilisant pour modifier la page : 
* Afficher les vêtements
* Afficher le prix de chaque vêtement
* Afficher la taille et la couleur de chaque vêtement. 

