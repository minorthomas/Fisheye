const getParams = window.location.search; //recup params dans l'url
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id"); //recup seulement param id de l'url

function displayPageNotFound() {
    //recup id main
    const photographerMain = document.querySelector("#main");

    //display none all elements
    document.querySelector("#select_menu").style.display = "none";
    document.querySelector(".photographer_header").style.display = "none";

    //set timeout after error (3s)
    setTimeout(function () { window.location.href = "index.html"; }, 3000);

    const errorInDom = `
    <div class="error">
        <p class="error_number">404</p>
        <p class="error_text">Page not found</p>
        <p class="error_redirect">Auto redirect after 3 seconds</p>
    </div>
    `

    photographerMain.innerHTML = errorInDom;
}

async function displayPhotographerInfos() { //display infos photographers
    const { photographers, media } = await getPhotographers(); //recup photographers et medias
    const photographerHeader = document.querySelector(".photographer_header");//recup element dom (header)

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );



    //condition si aucun photographe
    if (selectedPhotographer === undefined) {
        //initialise fonction affichage error dom
        displayPageNotFound();
    } else {
        const photographerModel = new Photographers(selectedPhotographer); //constructor creer new photographer
        photographerHeader.innerHTML += photographerModel.templatePhotographerPage(); //ajout les infos photographer dans dom

        const photographerBottom = document.querySelector(".photographer_bottom");

        photographerBottom.innerHTML = photographerModel.templateLikeAndPrice();
    }
};

async function displayPhotographerMedias() { //display les medias photographers (images, videos)
    function sortBy() {
        const filterSelect = document.querySelector("#filter_select")

        sortByPopularity(); //initialise popularity filter par defaut

        filterSelect.addEventListener("click", (event) => {
            if (event.target.value === "popularity") { //si sur popularity, change dans l'ordre like
                sortByPopularity();
            } else if (event.target.value === "date") { //si sur date, change dans l'ordre: plus recente plus ancienne
                sortByDate();
            } else if (event.target.value === "title") { //si sur title, change ordre alpha
                sortByTitle();
            }
        })
    }

    async function calculateTotalLike() {
        const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
            (media) => media.photographerId == getIdParam
        );

        const totalLikesDom = document.querySelector(".photographer_likes");

        let sum = 0;

        for (i = 0; i < selectedMedia.length; i++) {
            sum += selectedMedia[i].likes
        }

        totalLikesDom.textContent = sum.toString();

        localStorage.setItem("TotalLike", JSON.stringify(sum));
    }

    async function likesMedias() {
        const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
            (media) => media.photographerId == getIdParam
        );

        selectedMedia.forEach((media) => {
            let status = false;
        })

        const medias = document.querySelectorAll(".media_like");

        console.log(medias);
    }

    sortBy(); //initialise la funct de tri
    calculateTotalLike()
    likesMedias();
}

async function init() {
    await displayPhotographerInfos();
    await displayPhotographerMedias();
};

init();