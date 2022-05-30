const getParams = window.location.search; //recup params dans l'url
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id"); //recup seulement param id de l'url

async function selectedPhotographerPage() {
    const { photographers, media } = await getPhotographers(); //get photographers et medias

    const selectedPhotographer = photographers.find( //trouve et verifie si photographer selectionné === id dans url
        (photographer) => photographer.id == getIdParam
    );

    const selectedMedias = media.filter( //trouve et verifie si media selectionné === id dans url
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

        sortByPopularity(selectedMedias); //initialise popularity filter par defaut

        filterSelect.addEventListener("click", (event) => {
            if (event.target.value === "popularity") { //si sur popularity, change dans l'ordre like
                sortByPopularity(selectedMedias);
            } else if (event.target.value === "date") { //si sur date, change dans l'ordre: plus recente plus ancienne
                sortByDate(selectedMedias);
            } else if (event.target.value === "title") { //si sur title, change ordre alpha
                sortByTitle(selectedMedias);
            }
            likesMedias();
        })
    }

    /////////////////////////////////////////////////////
    function calculateTotalLike() {
        const totalLikesDom = document.querySelector(".photographer_likes");

        let sum = 0;

        for (i = 0; i < selectedMedias.length; i++) {
            sum += selectedMedias[i].likes
        }

        totalLikesDom.textContent = sum.toString();

        localStorage.setItem("TotalLike", JSON.stringify(sum));
    }

    ////////////////////////////////////////////////////////
    function likesMedias() {
        selectedMedias.forEach((selectedMedia) => {
            let status = false; //status sur false par defaut === pas de like

            const likesSection = document.querySelector('#like' + selectedMedia.id);

            likesSection.addEventListener("click", (event) => {
                event.preventDefault();

                const heart = document.querySelector("#heart" + selectedMedia.id);

                if (status == false) {
                    let incrementLike = selectedMedia.likes += 1;
                    likesSection.firstChild.textContent = incrementLike;
                    heart.style.fill = "#DB8876";
                    status = true;
                } else {
                    let decrementLike = selectedMedia.likes -= 1;
                    likesSection.firstChild.textContent = decrementLike;
                    status = false;
                    heart.style.fill = "#901C1C";
                }
                calculateTotalLike()
            });
        });
    }

    /////INIT ALL FUNCTION
    displayPhotographerInfos();
    filterMedias();
    calculateTotalLike();
    likesMedias();
}

selectedPhotographerPage(); //init la function selectedPhotographerPage