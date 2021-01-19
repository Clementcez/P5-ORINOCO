
window.onload = forEachKey;

const block = document.createElement("div");
const numberBlock = document.getElementById("nombreArticle");
const vide = document.getElementById("vide");
const plein = document.getElementById("plein");

const tableauArticle = document.getElementById("article");
const tableauNom = document.getElementById("nom");
const tableauPrix = document.getElementById("prix");
const tableauCouleur = document.getElementById("couleur");
const tableauQuantité = document.getElementById("quantitéArticle");
const tableauPrixTotal = document.getElementById("total");
const viderPanier = document.getElementById("vider");

const blockPrixTotal = document.createElement("td");

//vide le panier 
viderPanier.onclick = function vider(){
    localStorage.clear();
    location.reload();
};

let calculQantité = 0;
let prixTotal = 0;

function forEachKey() {

    for( let i = 0; i < localStorage.length; i++){
        let ids = localStorage.key(i);
        const allProducts = JSON.parse(localStorage.getItem(ids));

        for (let elem of allProducts){
            let nombre = Number (elem.quantité);
            let result = calculQantité += nombre;
            numberBlock.innerHTML = result;

            //creer un p pour les noms
            const couleur = document.createElement("td");
            couleur.innerHTML = elem.couleur;
            tableauCouleur.appendChild(couleur);

            //creer un p pour les noms
            const quantité = document.createElement("td");
            quantité.innerHTML = "X" + elem.quantité;
            tableauQuantité.appendChild(quantité);

            if(elem.id !== undefined){
                const requestNounours = new XMLHttpRequest();
                requestNounours.onreadystatechange = function() {

                    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        const nounours = JSON.parse(this.responseText);
            
                        //creer un p pour les noms
                        const name = document.createElement("td");
                        name.innerHTML = nounours.name;
                        tableauNom.appendChild(name);
            
                        //creer une balise img pour les images
                        const imgArticle = document.createElement("td");
                        const img = document.createElement("img");
                        img.src = nounours.imageUrl;
                        imgArticle.appendChild(img);
                        tableauArticle.appendChild(imgArticle);
            
                        //creer un p pour les prix
                        const prix = document.createElement("td");
                        prix.innerHTML = nounours.price / 100 + " €";
                        tableauPrix.appendChild(prix);
                        
                        //calcul + creer un p pour le pix total
                        let prixSpec = Number (nounours.price);
                        let calculPrixTotal = prixSpec * elem.quantité;
                        prixTotal += calculPrixTotal;
                        blockPrixTotal.innerHTML = prixTotal / 100 + "€";
                        tableauPrixTotal.appendChild(blockPrixTotal);

                        plein.classList.remove("hidden");
                        vide.classList.add("hidden");
                        viderPanier.classList.remove("hidden");
                    }    
                };
                requestNounours.open("GET", "http://localhost:3000/api/teddies/" + elem.id);
                requestNounours.send();
            }
        }
    }
}

function testHtml() {
    const form = document.getElementById("formulaire");
    if (!form.checkValidity()) {
        alert('Oups! Formulaire non valide');
    } else {
        verification()
    } 
  } 

function verification(){
    //empeche la redirection automatique du formulaire html
    event.preventDefault();

    const formPrenom = document.getElementById("prenom");
    const formNom = document.getElementById("name");
    const formTel = document.getElementById("phone");
    const formAdress = document.getElementById("adress");
    const formVille = document.getElementById("ville");
    const formMail = document.getElementById("mail");

    let valide = 0;

    //met en evidence les nombres
    const regexDigit = /\d/;
    //met en évidence les caracteres spéciaux
    const regexSpec = /\W/;
    //met en évidence toute les lettres min et maj
    const regexLettre = /[a-zA-Z]/;
    //test si un mail est valide spoiler je l'ai pas écrite celle-ci 
    const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //test si la chaine contient des caracteres spéciaux en ayant auparavant retiré les espaces
    //ajoute 1 à la variable valide si test validé
    if(regexDigit.test(formPrenom.value.replace(/\ /g, "")) === true || regexSpec.test(formPrenom.value.replace(/\ /g, "")) === true){
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }
    else if(formPrenom.value.replace(/\ /g, "") === ""){
        alert('Oups! Formulaire non valide');
        return  
    }
    else{
        valide ++;
    }

    //test nom
    if(regexDigit.test(formNom.value.replace(/\ /g, "")) === true || regexSpec.test(formNom.value.replace(/\ /g, "")) === true){
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }
    else if(formNom.value.replace(/\ /g, "") === ""){
        alert('Oups! Formulaire non valide');
        return  
    }
    else{
        valide ++;
    }

    //test tel
    if(regexLettre.test(formTel.value.replace(/\ /g, "")) === true || regexSpec.test(formTel.value.replace(/\ /g, "")) === true || formTel.value.length > 10) {
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }
    else{
        valide ++;
    }

    //test adress
    if(regexSpec.test(formAdress.value.replace(/\ /g, ""))){
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }
    else if(formAdress.value.replace(/\ /g, "") === ""){
        alert('Oups! Formulaire non valide');
        return  
    }
    else{
        valide ++;
    }

    //test ville
    if(regexSpec.test(formVille.value.replace(/\ /g, ""))){
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }
    else if(formVille.value.replace(/\ /g, "") === ""){
        alert('Oups! Formulaire non valide');
        return  
    }
    else{
        valide ++;
    }

    //test mail
    if(regexMail.test(formMail.value) === true){
        valide ++;
    }
    else{
        console.error("Pas cool d'éssayer de hacker, 'FBI OPEN UP'... ;D");
        alert('Oups! Quelque chose s\'est mal passé.');
        return
    }

    //si la variable valide contient 6 on déclenche la fonction d'envoi du formulaire au serveur
    //sinon renvoi une erreur
    if(valide === 6){
        envoiServeur(formPrenom, formNom, formTel, formAdress, formVille, formMail);
    }
    else{
        alert('Oups! Quelque chose s\'est mal passé.');
    }
};

//fonction envoi au serveur
function envoiServeur(prenom, nom, tel, adress, ville, mail){

    //variable contenant un tableau des id recuperé dans local storage
    let ids = [];

    //recupere les id des produits dans le local storage et les ajoutes au tableau ids
    for( let i = 0; i < localStorage.length; i++){
        let id = localStorage.key(i);
        ids.push(id);
        
        //si i contient le meme nombre que la longueur du tableau local storage -1
        //créer l'objet envoyer au serveur
        if(i === localStorage.length - 1){
            const objectCommande = {
                contact: {
                    firstName: prenom.value,
                    lastName: nom.value,
                    phone: tel.value,
                    address: adress.value,
                    email: mail.value,
                    city: ville.value
                },
                products: ids
            }
            //requete serveur
            fetch("http://localhost:3000/api/teddies/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objectCommande)
            }).then((response) => {
                // si reponse serveur ok, creer un nouvel objet puis redirige vers la page de confirmation
                if(response.ok === true){
                    //si ok vide le local storage afin de stocker un nouvel objet
                    localStorage.clear();
                    response.json().then(
                        response2 => {
                            //ajoute la reponse serveur au local storage
                            localStorage.setItem("responseServ", JSON.stringify(response2));

                            //recupere l'url actuelle sous forme de string puis remplace l'emplacement actuel
                            //par la page de confirmation et redirige l'utilisateur ver elle

                            let urlAct = window.location + "";
                            window.location.href = (urlAct.replace(/[^\/]*$/, "confirmation.html"))

                            //
                            // let quantitéCommande = [];
                            // for (let elem of document.querySelectorAll("#quantitéArticle > td")){
                            //     quantitéCommande.push(elem.innerHTML);
                            // }
                            // localStorage.setItem("quantitéCommande", JSON.stringify(quantitéCommande));

                            // let couleurCommande = [];
                            // for (let elem of document.querySelectorAll("#couleur > td")){
                            //     couleurCommande.push(elem.innerHTML);
                            // }
                            // localStorage.setItem("couleurCommande", JSON.stringify(couleurCommande));
                        }
                    )
                }
            })
        }
    }
}
