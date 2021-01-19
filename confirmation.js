window.onload = confirmation;
window.onbeforeunload = vider;

//vide le local storage si on quitte la page
function vider(){
    localStorage.clear();
};

function confirmation (){
    const response = JSON.parse(localStorage.getItem("responseServ"));
    
    document.getElementById("prenom").innerHTML = response.contact.firstName;
    document.getElementById("nom").innerHTML = response.contact.lastName;
    document.getElementById("address").innerHTML = response.contact.address;
    document.getElementById("numbCom").innerHTML = response.orderId;

    const conf = document.getElementById("conf");

    for(let nounours of response.products){

        const blockG = document.createElement("div")

        //creer un p pour les noms
        const name = document.createElement("p");
        name.innerHTML = nounours.name;
        blockG.appendChild(name);

        //creer une balise img pour les images
        const img = document.createElement("img");
        img.src = nounours.imageUrl;
        blockG.appendChild(img);

        conf.appendChild(blockG)
    }
}
