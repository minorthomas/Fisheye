async function getMedias() {
    const { media } = await getPhotographers();

    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );
    const getSortByInLocalStorage = JSON.parse(localStorage.getItem("SortBy"));

    let arrayId = [];

    for (let i = 0; i < getSortByInLocalStorage.length; i++) {
        arrayId.push(getSortByInLocalStorage[i].id)
    }
}

async function init() {
    await getMedias();
};

init();