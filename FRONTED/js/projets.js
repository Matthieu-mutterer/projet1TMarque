"use strict";
let rep="";
let ingr="";
let ingreId="";
let nomId="";
let str="";
let string="";
let stri = "";
let strin = "";
let vetement, couleur,taille,prix;
function initCatalogue(){
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/initCatalogue", true );
    xhr.onload =
        function x(){
            console.log(xhr.responseText);
           rep = JSON.parse(xhr.responseText);
            for(let i of rep){

                str +=  "<div class=\"boxUn\">";
                str +=  "<div class=\"boxDe\">";
                str +=  "<a  href=\"page?url=pageVet&nomVet="+i.nomVet+"&coulVet="+i.nomCouleur+"\">";
                str +=  "<img src=\"img/"+i.imageFile+"\" alt=\""+i.nomVet+"\" width=\"300\" height=\"300\"/>\n";
                str += "</a>";
                str += "</div>";
                str += "<ul><li>Nom: "+i.nomVet+"</li> <li>Prix: "+i.shirtPrix+"€</li></ul>";
                str += "</div>";
            }
            string += "<a href=\"page?url=pannier\"> Panier </a>";
            strin += "<a href=\"page?url=seConnecter\"> S'enregistrer </a>";
            document.getElementById('catalogue').innerHTML = str;
            document.getElementById('pannier').innerHTML = string;
            document.getElementById('seConnecte').innerHTML = strin;

        }
    xhr.send();
}
var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}

function getDetails() {
    console.log(getParams(window.location.href));
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/initCatalogue", true );
    xhr.onload =
        function x(){
            rep = JSON.parse(xhr.responseText);
            console.log(getParams(window.location.href));
            string ="";
            for(let i of rep){
                if( (i.nomVet==getParams(window.location.href).nomVet) && (i.nomCouleur==getParams(window.location.href).coulVet)) {
                    str +=  "<img src=\"img/"+i.imageFile+"\" alt=\""+i.nomVet+"\" width=\"100%\" height=\"100%\"/>\n";
                    string+= "<ul><li>Nom: "+i.nomVet+"</li><li>Prix: "+i.shirtPrix+"€</li></ul>";
                    vetement=i.nomVet;
                    couleur=i.nomCouleur;
                    prix=i.shirtPrix;

                }

            }
            stri += "<a href=\"page?url=pannier\"> Panier </a>";
            strin += "<a href=\"page?url=seConnecter\"> s'enregistrer </a>";
            document.getElementById('pannier').innerHTML = stri;
            document.getElementById('seConnecte').innerHTML = strin;
            document.getElementById('boxV').innerHTML = str;
            document.getElementById('nomPrix').innerHTML = string;

        }
    xhr.send();
}

//<ul>
//<li> Nom: </li>
//<li> Prix: </li>
//<li id="taille"> Taille: <select> </select> </li>
//<li> <input type="submit" id="bouton" value="acheter"></li>
  //  </ul>
// <div class="boxUn">
//     <div class="boxDe">
//     <a id="t-shirtB" href="pageVet.html">
//     <img src="img/t-shirtBlanc.jpg" alt="T-shirt Blanc TSBE" width="300" height="300"/>
//     </a>
//     </div>
//     <ul id="lisShirtB">
//     <li> Prix: </li>
// <li> Nom: </li>
// </ul>
// </div>

function getTaille() {
    console.log(getParams(window.location.href));
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/getTaille", true );
    xhr.onload =
        function x(){
            rep = JSON.parse(xhr.responseText);
            console.log(getParams(window.location.href));
            string= "<ul><li>Taille: <select onchange=''>";
            for(let i of rep){
                if( (i.nomVet==getParams(window.location.href).nomVet) && (i.nomCouleur==getParams(window.location.href).coulVet)) {
                    string += "<option>" + i.nomTAil + "</option>";
                }
            }
            string+="</select></li></ul>";

            document.getElementById('liste').innerHTML = string;

        }
    xhr.send();

}

function affichePageVet() {
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/initCatalogue", true );
    xhr.onload =
        function x() {
            rep = JSON.parse(xhr.responseText);
            console.log(rep);

        }

}

function ajoutPannier(){
    taille= document.getElementsByTagName("select")[0].value;
    //console.log(vetement,couleur,taille, prix);
    let xhr = new XMLHttpRequest();
    let url = 'proc_insert_pannier?nom='+vetement+'&coul='+couleur+'&tail='+taille+'&prix='+prix+'';
    console.log(url);
    xhr.onload= function(){
        console.log(url);
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            alert("Envoyé, reload la page."); // C'est bon \o/
        }
    };
    xhr.open('get',url, true);
    xhr.onerror = function(){
        console.log("erreur")
    };
    xhr.send();
}

function submitForm(){
    ajoutPannier();
}
function getPannier() {
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/getPannier", true );
    xhr.onload =
    function x(){
        console.log(xhr.responseText);
        rep = JSON.parse(xhr.responseText);
        for(let i of rep){
            let achat = i.nomVet+ " " +i.nomCouleur+ " " +i.nomTAil+ " " +i.shirtPrix +"€";
            str +=  "<ul>";
            str +=  "<li> "+achat+" </li>";
            str += "</ul>";
            str += ""
            console.log(achat);
        }
        strin += "<a href=\"page?url=seConnecter\"> S'enregistrer </a>";
        string += "<a href=\"page?url=projet\"> accueil </a>";
        document.getElementById('seConnecte').innerHTML = strin;
        document.getElementById('commande').innerHTML = str;
        document.getElementById('accuielle').innerHTML = string;



    }
    xhr.send();

}


function ajoutUtilisateur(adresse, passw){
    let xhr = new XMLHttpRequest();
    let url = `proc_insert_connecter?&adres=${adresse}&pasw=${passw}`;
    console.log(url);
    xhr.onload= function(){
       console.log(url);
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            string += "vous êtes enregistré";
            document.getElementById("dejCompte") = string;
        }
    };
    xhr.open('get', url, true);
    xhr.onerror = function(){
        console.log("erreur")
    };
    xhr.send();
}

function submitForm2(){
    ajoutUtilisateur(document.getElementById('adres').value,
        document.getElementById('pasw').value);
}
function getConnect() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', "http://localhost:83/getConnect", true);
    xhr.onload =
        function x() {
            console.log(xhr.responseText);
            rep = JSON.parse(xhr.responseText);
                string+= "<h2> S'enregistrer: </h2>";
                string+= "<form  action=\"#\" onsubmit=\"return false\">";
                string+= " <label for=\"adres\">Adresse email:</label>"
                string+= "<input id=\"adres\" name=\"email\" type=\"email\"  size=\"30\" required placeholder=\"email@hormail.com\">";
                string+= " <label for=\"pasw\" >Password (8 characters minimum):</label>";
                string+= "<input id=\"pasw\" name=\"password\" type=\"password\"  required  placeholder=\"password\">";
                string+= "<input type=\"submit\" id=\"bouton\" value=\"S'enregistrer\" onclick=\"ajoutUtilisateur(document.getElementById('adres').value, document.getElementById('pasw').value)\">";
                string+= "</form>";
                string+= "<h3> enregistrez vous pour être informé des dernières nouveautés.</h3>";
            document.getElementById('dejCompte').innerHTML = string;
        }
    stri += "<a href=\"page?url=pannier\"> Panier </a>";
    document.getElementById('pannier').innerHTML = stri;
    xhr.send();
}
function reloadP(){
    window.location.reload()

}
