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

function pageNotFound() {
    //recup id main
    const photographerMain = document.querySelector("#main");

    //display none all elements
    document.querySelector(".sort_by").style.display = "none";
    document.querySelector(".photographer_header").style.display = "none";

    //set timeout after error (3s)
    setTimeout(function () { window.location.href = "index.html"; }, 3000);

    const errorInDom = `
    <div class="error">
        <p class="error_number">Error 404</p>
        <p class="error_text">Page not found, redirect after 3 seconds</p>
    </div>
    `

    photographerMain.innerHTML = errorInDom;
}

async function displayPhotographerData() { //display infos photographers
    const { photographers } = await getPhotographerData(); //recup photographers et medias
    const photographerHeader = document.querySelector(".photographer_header");//recup element dom (header)

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );

    //condition si aucun photographe
    if (selectedPhotographer === undefined) {
        //initialise fonction affichage error dom
        pageNotFound();
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