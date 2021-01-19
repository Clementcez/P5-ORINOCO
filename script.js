
const requestNounours = new XMLHttpRequest();
requestNounours.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits");
        
        for (let nounours of response) {
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
    }
};
requestNounours.open("GET", "http://localhost:3000/api/teddies");
requestNounours.send();

const requestCam = new XMLHttpRequest();
requestCam.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits2");
        
        for (let cameras of response) {
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
    }
};
requestCam.open("GET", "http://localhost:3000/api/cameras");
requestCam.send();

const requestMeuble = new XMLHttpRequest();
requestMeuble.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits3");
        
        for (let furnitures of response) {
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
    }
};
requestMeuble.open("GET", "http://localhost:3000/api/furniture");
requestMeuble.send();

