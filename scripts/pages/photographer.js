const getParams = window.location.search;
const getUrlParams = new URLSearchParams(getParams);
const getIdParam = getUrlParams.get("id");

/**
 * @param  {array} photographers
 * @return {object}
 */
function getPhotographerById(photographers) {
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id.toString() === getIdParam
    );
    return selectedPhotographer;
}

/**
 * @param  {array} medias
 * @return {array}
 */
function getPhotographerMediasById(medias) {
    const selectedMedias = medias.filter(
        (media) => media.photographerId == getIdParam
    );
    return selectedMedias;
}

/**
 * @param  {object} photographer
 *
 */
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

/**
 * @param  {array} medias
 *
 */
function displayPhotographerMedias(medias) {
    const dropdownList = document.querySelector(".dropdown_list");
    sortBy(medias, "popularity");
    eventLike(medias);

    if (medias.length > 0) {
        dropdownList.addEventListener("click", (event) => {
            sortBy(medias, event.target.value);
            eventLike(medias);
            Lightbox.init();
        });
    } else {
        mediasNotFound();
    }
}

/**
 * @param  {object} photographer
 *
 */
function changePageTitle(photographer) {
    const pageDescription = document.head.querySelector("[name=description]");

    if (photographer || photographer != undefined) {
        pageDescription.content = "Fisheye - Page de " + photographer.name;
    } else {
        pageDescription.content = "Fisheye - Error 404";
    }
}

/**
 * @param  {object} photographer
 *
 */
function changeMetaDescription(photographer) {
    const pageTitle = document.querySelector("title");

    if (photographer || photographer != undefined) {
        pageTitle.textContent = "Fisheye - " + photographer.name;
    } else {
        pageTitle.textContent = "Fisheye - Error 404";
    }
}

/**
 * @param  {array} medias
 *
 */
function calculateTotalLike(medias) {
    const likes = document.querySelector("#like_section div p");
    let sum = 0;

    medias.forEach((media) => {
        sum += media.likes;
    });
    likes.textContent = sum.toString();
    localStorage.setItem("Total-Like", JSON.stringify(sum));
}

/**
 * @param  {array} medias
 *
 */
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
    changeMetaDescription(selectedPhotographer);
    Lightbox.init();
}

photographerPage();
