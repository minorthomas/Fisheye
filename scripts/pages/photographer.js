async function getPhotographerData() {
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json())
        .then((photographers) => photographers)
        .catch((err) => console.log("Error" + err));

    return photographers;
}

async function displayData() {
    const { photographers, media } = await getPhotographerData(); //get photograph & medias

    const searchUrlParams = window.location.search;
    const getUrlParams = new URLSearchParams(searchUrlParams);
    const getIdParam = getUrlParams.get("id");

    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id == getIdParam
    );

    const photographerSection = document.querySelector(".photographer_header");

    const photographerModel = new Photographers(selectedPhotographer);
    photographerSection.innerHTML += photographerModel.templatePhotographerPage();

    const photographerContact = document.createElement("button");
    photographerContact.setAttribute("onclick", "displayModal()");
    photographerContact.classList.add("contact_button");
    photographerSection.appendChild(photographerContact);
    photographerContact.textContent = "Contactez-moi";
};

async function init() {
    await displayData();
};

init();
