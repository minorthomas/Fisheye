async function getPhotographerData() {
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json())
        .then((photographers) => photographers)
        .catch((err) => console.log("Error" + err));

    return photographers;
}

const getParams = window.location.search; //recup params dans l'url
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id"); //recup seulement param id de l'url

async function displayPhotographerData() { //display infos photographers
    const { photographers } = await getPhotographerData(); //recup photographers et medias

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );

    const photographerHeader = document.querySelector(".photographer_header"); //recup element dom (header)

    const photographerModel = new Photographers(selectedPhotographer); //constructor creer new photographer
    photographerHeader.innerHTML += photographerModel.templatePhotographerPage(); //ajout les infos photographer dans dom


    const photographerBottom = document.querySelector(".photographer_bottom");
    photographerBottom.innerHTML = photographerModel.templateLikeAndPrice();
};

async function displayPhotographerMedias() { //display les medias photographers (images, videos)
    const { media } = await getPhotographerData(); //recup photographers et medias

    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

    const medias_section = document.querySelector(".medias");

    selectedMedia.forEach((media) => {
        const allMedias = new MediasFactory(media);
        medias_section.innerHTML += allMedias.templateMedia();
    });

}

async function init() {
    await displayPhotographerData();
    await displayPhotographerMedias();
};

init();