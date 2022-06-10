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

    sortByPopularity(selectedMedias);

    async function displayPhotographerInfos() { //display infos photographers
        const photographerHeader = document.querySelector("#photographer_header");//recup element dom (header)

        //condition si aucun photographe
        if (selectedPhotographer === undefined) {
            //initialise fonction affichage error dom
            displayPageNotFound();
        } else {
            const photographerModel = new Photographer(selectedPhotographer); //constructor creer new photographer

            photographerHeader.innerHTML += photographerModel.templateDisplaySelectedPhotographer(); //ajout les infos photographer dans dom

            const photographerBottom = document.querySelector("#footer_photographer_page");

            photographerBottom.innerHTML = photographerModel.templateDisplayLikeAndPrice();
        }
    }

    /////////////////////////////////////////////////

    async function displayPageTitle() {
        const pageTitle = document.querySelector("title");
        pageTitle.textContent = "Fisheye - " + await selectedPhotographer.name;
    }

    /////////////////////////////////////////////////

    function filterMedias() {
        const filterSelect = document.querySelector("#filter_select")

        //initialise popularity filter par defaut

        filterSelect.addEventListener("click", (event) => {
            if (event.target.value === "popularity") { //si sur popularity, change dans l'ordre like
                sortByPopularity(selectedMedias);
            } else if (event.target.value === "date") { //si sur date, change dans l'ordre: plus recente plus ancienne
                sortByDate(selectedMedias);
            } else if (event.target.value === "title") { //si sur title, change ordre alpha
                sortByTitle(selectedMedias);
            }
            likesMedias();
            Lightbox.init();
        })
    }

    /////////////////////////////////////////////////////

    function calculateTotalLike() {
        const totalLikesDom = document.querySelector("#other_section div p");

        let sum = 0;

        for (let i = 0; i < selectedMedias.length; i++) {
            sum += selectedMedias[i].likes
        }

        totalLikesDom.textContent = sum.toString();

        localStorage.setItem("TotalLike", JSON.stringify(sum));
    }

    ////////////////////////////////////////////////////////

    function likesMedias() {
        selectedMedias.forEach((selectedMedia) => {
            let checked = false; //status sur false par defaut === pas de like

            const likesSection = document.querySelector('#like' + selectedMedia.id);
            const heart = document.querySelector("#heart" + selectedMedia.id);

            likesSection.addEventListener("click", (event) => {
                event.preventDefault();

                if (checked == false) {
                    let incrementLike = selectedMedia.likes += 1;
                    likesSection.firstChild.textContent = incrementLike;
                    heart.style.fill = "#DB8876";
                    likesSection.style.color = "#DB8876";
                    checked = true;
                    likesSection.setAttribute("aria-checked", "true");
                } else {
                    let decrementLike = selectedMedia.likes -= 1;
                    likesSection.firstChild.textContent = decrementLike;
                    checked = false;
                    heart.style.fill = "#901C1C";
                    likesSection.style.color = "#901C1C";
                    likesSection.setAttribute("aria-checked", "false");
                }

                calculateTotalLike()
            });
        });
    }

    ////////////////////////////////////////////////

    /////INIT ALL FUNCTION
    displayPhotographerInfos();
    displayPageTitle();
    filterMedias();
    calculateTotalLike();
    likesMedias();
    Lightbox.init();
}

selectedPhotographerPage(); //init la function selectedPhotographerPage