"use strict";
let rep="";
let ingr="";
let ingreId="";
let nomId="";
let str="";
let string="";
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
                str += "<ul><li>Nom: "+i.nomVet+"</li> <li>Prix: "+i.shirtPrix+"</li></ul>";
                str += "</div>";

            }
            document.getElementById('catalogue').innerHTML = str;

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
                    string+= "<ul><li>Nom: "+i.nomVet+"</li><li>Prix: "+i.shirtPrix+"</li></ul>";
                    vetement=i.nomVet;
                    couleur=i.nomCouleur;
                    prix=i.shirtPrix;

                }

            }
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
    //console.log(url);
    xhr.onload= function(){
        //console.log(url);
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
    console.log(getParams(window.location.href));
    let xhr= new XMLHttpRequest();
    xhr.open('get',"http://localhost:83/getPannier", true );
    xhr.onload =
        function x(){
            rep = JSON.parse(xhr.responseText);
            console.log(getParams(window.location.href));
            string ="";
            for(let i of rep){
                if( (i.nomVet==getParams(window.location.href).nomVet) && (i.nomCouleur==getParams(window.location.href).coulVet)) {
                    str +=  "<img src=\"img/"+i.imageFile+"\" alt=\""+i.nomVet+"\" width=\"100%\" height=\"100%\"/>\n";
                    string+= "<ul><li>Nom: "+i.nomVet+"</li><li>Prix: "+i.shirtPrix+"</li></ul>";
                    vetement=i.nomVet;
                    couleur=i.nomCouleur;
                    prix=i.shirtPrix;

                }

            }
            document.getElementById('commande').innerHTML = str;


        }
    xhr.send();
}
function reloadP(){
    window.location.reload()
}
