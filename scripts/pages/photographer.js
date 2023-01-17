const getParams = window.location.search;
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id");

function getPhotographerById(photographers) {
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id.toString() === getIdParam
    );
    return selectedPhotographer;
}

function getPhotographerMediasById(medias) {
    const selectedMedias = medias.filter(
        (media) => media.photographerId == getIdParam
    );
    return selectedMedias;
}

function displayPhotographerInfos(photographer) {
    const header = document.querySelector("#photographer_header");
    const footer = document.querySelector("#footer_photographer_page");

    if (photographer || photographer != undefined) {
        const photographerModel = new Photographer(photographer);
        header.innerHTML =
            photographerModel.templateDisplaySelectedPhotographer();
        footer.innerHTML = photographerModel.templateDisplayLikeAndPrice();
    } else {
        photographerNotFound();
    }
}

function displayPhotographerMedias(medias) {
    const input = document.querySelector("#filter_select");
    sortBy(medias, "popularity");

    if (medias.length > 0) {
        input.addEventListener("click", (event) => {
            sortBy(medias, event.target.value);
            // likesMedias();
            Lightbox.init();
        });
    } else {
        mediasNotFound();
    }
}

function changePageTitle(photographer) {
    const pageTitle = document.querySelector("title");

    if (photographer || photographer != undefined) {
        pageTitle.textContent = "Fisheye - " + photographer.name;
    } else {
        pageTitle.textContent = "Fisheye";
    }
}

function calculateTotalLike(medias) {
    const likes = document.querySelector("#like_section div p");
    let sum = 0;

    medias.forEach((media) => {
        sum += media.likes;
    });
    likes.textContent = sum.toString();
    localStorage.setItem("Total-Like", JSON.stringify(sum));
}

function eventLike(medias) {
    calculateTotalLike(medias);
    medias.forEach((media) => {
        let checked = false;

        const like = document.querySelector("#like" + media.id);
        const heart = document.querySelector("#heart" + media.id);

        like.addEventListener("click", (event) => {
            event.preventDefault();

            if (checked === false) {
                let incrementLike = (media.likes += 1);
                like.firstChild.textContent = incrementLike;
                heart.classList.add("checked");
                like.classList.add("checked");
                checked = true;
                like.setAttribute("aria-checked", "true");
            } else {
                let decrementLike = (media.likes -= 1);
                like.firstChild.textContent = decrementLike;
                heart.classList.remove("checked");
                like.classList.remove("checked");
                checked = false;
                like.setAttribute("aria-checked", "false");
            }

            calculateTotalLike(medias);
        });
    });
}

async function photographerPage() {
    const { photographers, medias } = await getPhotographers();
    const selectedPhotographer = getPhotographerById(photographers);
    const selectedMedias = getPhotographerMediasById(medias);

    displayPhotographerInfos(selectedPhotographer);
    displayPhotographerMedias(selectedMedias);
    changePageTitle(selectedPhotographer);
    eventLike(selectedMedias);
    Lightbox.init();
}

photographerPage();