//call elements
const mediasSection = document.querySelector("#medias_section");
const dropdownButton = document.querySelector(".dropdown_button button");
const popularityOpt = document.querySelector("#popularity");
const dateOpt = document.querySelector("#date");
const titleOpt = document.querySelector("#title");

/**
 * @param  {Array} selectedMedia
 * @return {Array}
 */
function sortByPopularity(selectedMedia) {
    const sortedMedia = selectedMedia.sort(
        (mediaOne, mediaTwo) => mediaTwo.likes - mediaOne.likes
    );
    return sortedMedia;
}

/**
 * @param  {Array} selectedMedia
 * @return {Array}
 */
function sortByDate(selectedMedia) {
    const sortedMedia = selectedMedia.sort((mediaOne, mediaTwo) => {
        let dateMediaOne = new Date(mediaOne.date),
            dateMediaTwo = new Date(mediaTwo.date);
        return dateMediaTwo - dateMediaOne;
    });
    return sortedMedia;
}

/**
 * @param  {Array} selectedMedia
 * @return {Array}
 */
function sortByTitle(selectedMedia) {
    const sortedMedia = selectedMedia.sort((mediaOne, mediaTwo) => {
        let titleMediaOne = mediaOne.title.toLowerCase(),
            titleMediaTwo = mediaTwo.title.toLowerCase();

        if (titleMediaOne < titleMediaTwo) {
            return -1;
        }
        if (titleMediaOne > titleMediaTwo) {
            return 1;
        }
        return 0;
    });
    return sortedMedia;
}

/**
 * @param  {Array} medias
 */
function createMedia(medias) {
    medias.forEach((media) => {
        const factory = new MediasFactory(media);
        mediasSection.innerHTML += factory.templateMedia();
    });
}

function toggleDropdown() {
    document.querySelector("#list").classList.toggle("show");
}

/**
 * @param  {Array} selectedMedia
 * @param  {String} by
 */
function sortBy(selectedMedia, by) {
    mediasSection.innerHTML = "";

    if (by === "popularity") {
        const medias = sortByPopularity(selectedMedia);
        createMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Popularité";
        dropdownButton.value = "popularity";
        popularityOpt.style.display = "none";
        dateOpt.style.display = "flex";
        titleOpt.style.display = "flex";
        dateOpt.style.borderRadius = "0";
        document.querySelector("#list").classList.remove("show");
    } else if (by === "date") {
        const medias = sortByDate(selectedMedia);
        createMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Date";
        dropdownButton.value = "date";
        popularityOpt.style.display = "flex";
        dateOpt.style.display = "none";
        titleOpt.style.display = "flex";
        document.querySelector("#list").classList.remove("show");
    } else if (by === "title") {
        const medias = sortByTitle(selectedMedia);
        createMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Titre";
        dropdownButton.value = "title";
        popularityOpt.style.display = "flex";
        dateOpt.style.display = "flex";
        titleOpt.style.display = "none";
        dateOpt.style.borderRadius = "0 0 0.3em 0.3em";
        document.querySelector("#list").classList.remove("show");
    }
}
