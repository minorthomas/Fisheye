async function getPhotographers() { //fetch recup data fichier json
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json()) //reponse en json
        .then((photographers) => photographers) //recup les photographers
        .catch((err) => console.log("Error" + err)); //gestion erreur
    return photographers; //retourne les photographers

}

async function displayData(photographers) { //fonction affiche les photographers dans le dom

    const photographersSection = document.querySelector(".photographers_section"); //select dans dom

    photographers.forEach((photographer) => { //chaque boucle ajoute 1 photographer
        const photographerModel = new Photographers(photographer); //creer photograher avec constructor
        photographersSection.innerHTML += photographerModel.templatePhotographerHomePage(); //ajoute photographer dans dom
    });
};

async function init() { //initialise la fonction
    const { photographers } = await getPhotographers(); //recup les data photographers
    displayData(photographers); //affiche les photographers
};

init(); //lance la fonction
