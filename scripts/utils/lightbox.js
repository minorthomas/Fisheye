async function getPhotographers() { //fetch recup data fichier json
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json()) //reponse en json
        .then((photographers) => photographers) //recup les photographers
        .catch((err) => console.log("Error" + err)); //gestion erreur

    return photographers; //retourne les photographers
}

async function getMedias() {
    const { media } = await getPhotographers();
    let arrayMediaLightbox = [];

    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

    arrayMediaLightbox.push(selectedMedia);
    console.log(arrayMediaLightbox);
}

async function init() {
    await getMedias();
};

init();