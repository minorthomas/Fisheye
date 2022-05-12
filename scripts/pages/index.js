async function getPhotographers() {
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json())
        .then((photographers) => photographers)
        .catch((err) => console.log("Error" + err));

    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographersSection.innerHTML = "";

    photographers.forEach((photographer) => {
        const photographerModel = new Photographers(photographer);
        photographersSection.innerHTML += photographerModel.templatePhotographerHomePage();
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
