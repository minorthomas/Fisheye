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
    const photographerHeader = document.querySelector(".photographer_header");//recup element dom (header)
    const photographerMain = document.querySelector("#main");

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );

    //condition si aucun photographe
    if (selectedPhotographer === undefined) {

        //select elements
        const error = document.createElement("div");

        const errorText = document.createElement("div");
        const errorNumber = document.createElement('p');

        //add classname & text
        errorNumber.textContent = "Error 404";
        errorText.textContent = "Page not found, redirect after 3 seconds";

        error.className = "error";
        errorNumber.className = "errorNumber";
        errorText.className = "errorText";

        //add child
        photographerMain.appendChild(error);
        error.appendChild(errorNumber);
        error.appendChild(errorText);

        //display none all elements
        document.querySelector(".sort_by").style.display = "none";
        document.querySelector(".photographer_header").style.display = "none";

        //set timeout after error (3s)
        setTimeout(function () { window.location.href = "index.html"; }, 3000);

    } else {
        const photographerModel = new Photographers(selectedPhotographer); //constructor creer new photographer
        photographerHeader.innerHTML += photographerModel.templatePhotographerPage(); //ajout les infos photographer dans dom

        const photographerBottom = document.querySelector(".photographer_bottom");

        photographerBottom.innerHTML = photographerModel.templateLikeAndPrice();
    }
};

async function displayPhotographerMedias() { //display les medias photographers (images, videos)
    const { media } = await getPhotographerData(); //recup photographers et medias
    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

    const mediasSection = document.querySelector(".medias");

    selectedMedia.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

}

async function init() {
    await displayPhotographerData();
    await displayPhotographerMedias();
};

init();