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

-serviceweb :
* -n projet "C:\Users\matth\OneDrive\Bureau\backend2\projet2.db"
* -x tcpip
* -xs http(port=83)
### Shema rationne
![image du shema relatioinnel](https://i.imgur.com/8mUPWjD.png)
## Détail DB : 
### -tbNom :
Il s'agit de la tables des Noms des vetements 
pk = nomId  
Cette table comprend 2 colonnes : 
* **nomId** qui est auto incrmentée et un integer.
* **nomVet** qui est un varchar(50) regroupant les noms des vetement.
### -tbCouleur : 
Il s'agit de la tables des couleurs  
pk = couleurId
Cette table comprend 2 colonnes :
* **couleurId** qui est un integer.
* **nomCouleur** qui est un varchar(20) regroupant les noms de chaques couleurs.
### -tbImages :
Il s'agit de la table des images des vetements 
pk = imageId    
Cette table comprend 2 colonnes : 
* **imageId** qui est un integer.
* **imageFile** qui est un varchar(50) regroupant les noms d'iamge.
### -tbPannier
Il s'agit de la table qui contient les produit acheté 
pk = panniId
Cette table comprend 5 colonnes :
* **panniId** qui est un integer autoincrement.
* **nomVet** qui est un varchar(50) regroupant les noms des vetements.
* **nomCouleur** qui est un varchar(50) regroupant les noms de chaques couleurs.
* **nomTAil** qui est un varchar(50) regroupant les noms de chaques tailles.
* **shirtPrix** qui est un decimal(4,2) NULL  qui regroupe le prix de chaque vetement
### -tbTaille
Il s'agit de la table contenat les tailles 
pk = tailleId  
Cette table comprend 2 colonnes : 
* **tailleId** qui est un integer.
* **nomTAil** qui est un varchar(5) regroupant les noms de chaques tailles.
### -tbConnect
Il s'agit de la table contenat les utilisateur enregistré
pk = connecId  
Cette table comprend 3 colonnes : 
* **connecId** qui est un integer.
* **adresse** qui est un varchar(100) regroupant les adresse email de chaque utilisateurs.
* **passw** qui est un varchar(50) regroupant les mots de passes de chaque utilisateurs.
### -tbShirt
Il s'agit de la table qui regroupe toutes les infromations de chaque vetement 
pk = shirtId  
fk = nomIdId > tbNom.nomId  
fk = tailleId > tbTaille.tailleId  
fk = couleurId > tbCouleur.couleurId  
fk = imageId > tbImages.imageId  
fk = panniId > tbpannier.panniId  
Cette table comprend 7 colonnes : 
* **shirtId** qui est un integer.
* **nomId** qui est un integer.
* **tailleId** qui est un integer.
* **couleurId** qui est un integer.
* **imageId** qui est un integer.
* **panniId** qui est un integer.
* **shirtPrix** qui est un decimal(4,2) NULL  qui regroupe le prix de chaque vetement
## Détail API-REST :
* **proc_insert_ingredient(:ingredient,:unite,:quantite,:idrecette)**  
*Procedure qui permet d'inserer des ingredients dans une recette et stocker dans notre base de donnée.*
* **proc_insert_pannier(:nom,:coul, :tail, :prix)**  
*Procedure qui permet de inseret  nom de vetement, sa couleur, sa taille et son prix dans la base de donnée.*
* **proc_insert_connecter(:adres,:pasw)**  
*Procedure qui permet d'ajouter des utilisateur dans notre base de donnée.*
* **init_catalogue()**  
*Procedure qui donne les nom, image, couleur, prix, taille.*
* **getTaille()**  
*Procedure qui donne les noms des taille des vetement.*
* **getPannier()**  
*Procedure qui donne le contenue du panier.*
* **getConnect()**  D
*Procedure qui donne les adresses les mot de passe et les Id des utilisateur.*
### FONCTIONNALITES PRINCIPALES : 
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

