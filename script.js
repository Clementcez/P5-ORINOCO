
const promesse = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
};

fetch(new Request("http://localhost:3000/api/teddies"), promesse).then(function(response){
    if (!response.ok) {
        alert ('Oups! Quelque chose s\'est mal passé.');
    }
    else{
        response.json().then(function(allNounours){
            const i = document.getElementById("produits");

            for(let nounours of allNounours){
                const block = document.createElement("div");

                //creer un p pour les noms
                const name = document.createElement("p");
                name.innerHTML = nounours.name;
                block.appendChild(name);
    
                //creer une balise img pour les images
                const img = document.createElement("img");
                img.src = nounours.imageUrl;
                block.appendChild(img);
    
                //creer un p pour les prix
                const prix = document.createElement("p");
                prix.innerHTML = nounours.price / 100 + " €";
                block.appendChild(prix);
    
                //creer un bouton avec url
                const button = document.createElement("button");
                const lien = document.createElement("a");
                lien.href = "produits.html?id=" + nounours._id;
                lien.innerHTML = "Explorer moi !"
                block.appendChild(button);
                button.appendChild(lien);
    
                i.appendChild(block);
            }
        })
    }
});

fetch(new Request("http://localhost:3000/api/cameras"), promesse).then(function(response){
    if (!response.ok) {
        alert ('Oups! Quelque chose s\'est mal passé.');
    }
    else{
        response.json().then(function(allCameras){
            const i = document.getElementById("produits2");
        
            for (let cameras of allCameras) {
                const block = document.createElement("div");
    
                //creer un p pour les noms
                const name = document.createElement("p");
                name.innerHTML = cameras.name;
                block.appendChild(name);
    
                //creer une balise img pour les images
                const img = document.createElement("img");
                img.src = cameras.imageUrl;
                block.appendChild(img);
    
                //creer un p pour les prix
                const prix = document.createElement("p");
                prix.innerHTML = cameras.price / 100 + " €";
                block.appendChild(prix);
    
                //creer un bouton avec url
                const button = document.createElement("button");
                const lien = document.createElement("a");
                lien.href = "produits.html?id=" + cameras._id;
                lien.innerHTML = "Explorer moi !"
                block.appendChild(button);
                button.appendChild(lien);
    
                i.appendChild(block);
            }
        })
    }
});

fetch(new Request("http://localhost:3000/api/furniture"), promesse).then(function(response){
    if (!response.ok) {
        alert ('Oups! Quelque chose s\'est mal passé.');
    }
    else{
        response.json().then(function(allFurnitures){
            const i = document.getElementById("produits3");
        
            for (let furnitures of allFurnitures) {
                const block = document.createElement("div");
    
                //creer un p pour les noms
                const name = document.createElement("p");
                name.innerHTML = furnitures.name;
                block.appendChild(name);
    
                //creer une balise img pour les images
                const img = document.createElement("img");
                img.src = furnitures.imageUrl;
                block.appendChild(img);
    
                //creer un p pour les prix
                const prix = document.createElement("p");
                prix.innerHTML = furnitures.price / 100 + " €";
                block.appendChild(prix);
    
                //creer un bouton avec url
                const button = document.createElement("button");
                const lien = document.createElement("a");
                lien.href = "produits.html?id=" + furnitures._id;
                lien.innerHTML = "Explorer moi !"
                block.appendChild(button);
                button.appendChild(lien);
    
                i.appendChild(block);
            }
        })
    }
});