const getParams = window.location.search; //recup params dans l'url
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id"); //recup seulement param id de l'url

async function selectedPhotographerPage() {
    const { photographers, media } = await getPhotographers(); //get photographers et medias

    const selectedPhotographer = photographers.find( //trouve et verifie si photographer selectionné === id dans url
        (photographer) => photographer.id == getIdParam
    );

    const selectedMedia = media.filter( //trouve et verifie si media selectionné === id dans url
        (media) => media.photographerId == getIdParam
    );

    async function displayPhotographerInfos() { //display infos photographers
        const photographerHeader = document.querySelector(".photographer_header");//recup element dom (header)

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

    /////////////////////////////////////////////////
    function filterMedias() {
        const filterSelect = document.querySelector("#filter_select")

        sortByPopularity(selectedMedia); //initialise popularity filter par defaut

        filterSelect.addEventListener("click", (event) => {
            if (event.target.value === "popularity") { //si sur popularity, change dans l'ordre like
                sortByPopularity(selectedMedia);
            } else if (event.target.value === "date") { //si sur date, change dans l'ordre: plus recente plus ancienne
                sortByDate(selectedMedia);
            } else if (event.target.value === "title") { //si sur title, change ordre alpha
                sortByTitle(selectedMedia);
            }
        })
    }

    /////////////////////////////////////////////////////
    async function calculateTotalLike() {


        const totalLikesDom = document.querySelector(".photographer_likes");

        let sum = 0;

        for (i = 0; i < selectedMedia.length; i++) {
            sum += selectedMedia[i].likes
        }

        totalLikesDom.textContent = sum.toString();

        localStorage.setItem("TotalLike", JSON.stringify(sum));
    }

    ////////////////////////////////////////////////////////
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

    /////INIT ALL FUNCTION
    displayPhotographerInfos();
    filterMedias();
}

selectedPhotographerPage(); //init la function selectedPhotographerPage