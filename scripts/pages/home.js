async function homePage() {
    const { photographers } = await getPhotographers();
    const main = document.querySelector("main");
    photographers.forEach((photographer) => {
        const photographerModel = new Photographer(photographer);
        main.innerHTML += photographerModel.templateDisplayAllPhotographers();
    });
}

homePage();
