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
        const photographerModel = new AllPhotographers(photographer);
        photographersSection.innerHTML += photographerModel.templateAllPhotographers();
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
