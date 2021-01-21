
let url = new URLSearchParams(location.search);

const promesse = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
};

fetch(new Request("http://localhost:3000/api/teddies/" + url.get('id')), promesse).then(function(response){
    if (!response.ok) {
        alert ('Oups! Quelque chose s\'est mal passé.');
    }
    else{
        response.json().then(function(nounours){
            const i = document.getElementById("selectedProduits");
            const colorSelect = document.getElementById("colorSelect");
    
            const block = document.createElement("div");
    
            for (let color of nounours.colors){
                const colorOption = document.createElement("option");
                colorOption.value = color;
                colorOption.innerHTML = color;
                colorSelect.appendChild(colorOption);
            }
    
            // indique le nombre de couleurs disponible
            const amountColor = document.getElementById("amountColors");
            amountColor.innerHTML = nounours.colors.length;
    
            //creer un p pour le noms
            const name = document.createElement("p");
            name.innerHTML = nounours.name;
            block.appendChild(name);
    
            //creer une balise img pour l'image
            const img = document.createElement("img");
            img.src = nounours.imageUrl;
            block.appendChild(img);
    
            //creer un p pour le prix
            const prix = document.createElement("p");
            prix.innerHTML = nounours.price / 100 + " €";
            block.appendChild(prix);
    
            //creer un p pour la decription
            const descript = document.createElement("p");
            descript.innerHTML = "DESCRIPTION : " + nounours.description;
            block.appendChild(descript);
    
            i.appendChild(block);
        })
    }
});

const amountItem = document.getElementById("quantité");
const color = document.getElementById("colorSelect");
const cartButton = document.getElementById("panier");


//fonction test renvoie true si la couleur du tableau est 
//égale a la couleur selectionné par l'utilisateur 
function isInTheCart(array, valueToDetect) {
    for (let elem of array) {
        if (elem.couleur === valueToDetect) {
        return true
        }
    }
    return false 
}

cartButton.onclick = ajoutAuPanier;

function ajoutAuPanier(){

    const urlId = url.get("id");
    let contenuDuPanier = JSON.parse(localStorage.getItem(urlId));
    let couleurTest = color.value;
    let commande = [
        { couleur: color.value, quantité: amountItem.value, id: urlId }
    ];

    // si le panier est vide push le contenu de base de commande
    if (contenuDuPanier === null){
        window.localStorage.setItem(url.get('id'), JSON.stringify(commande));
    }

    //appel la fonction isInTheCart
    //sinon si une couleur correspond 
    else if (isInTheCart(contenuDuPanier, couleurTest)){

        //boucle dans le panier, recupere le quantité de base et 
        //ajoute la quantité selectionné par l'utilisateur
        for (let elem of contenuDuPanier){
            let base = Number (elem.quantité);
            let ajout = Number (amountItem.value);
            let result = base + ajout;

            //verifie chaque couleur du panier et ajoute le resultat précédent au nombre d'article correspondant 
            if(elem.couleur === couleurTest){
                elem.quantité = result + "";
                window.localStorage.setItem(url.get('id'), JSON.stringify(contenuDuPanier));
            }
        }

    }else{
        //sinon creer un nouvel objet prenant les nouvelle valeurs et les ajoutes au tableau commande de base
        commande = { couleur: color.value, quantité: amountItem.value, id: urlId };
        contenuDuPanier.push(commande)

        window.localStorage.setItem(url.get('id'), JSON.stringify(contenuDuPanier));
    }

    let popup = document.getElementById("popup");
    popup.classList.remove("hidden");
};