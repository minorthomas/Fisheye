async function photographersPage() { //function contient getPhotographer & displayData funct
    const { photographers } = await getPhotographers(); //get all photographers

    function displayData() { //affiche all infos photographers
        const photographersSection = document.querySelector("main"); //select "main" in dom

        photographers.forEach((photographer) => { //boucle ajoute in dom chaque photographers trouvé
            const photographerModel = new Photographers(photographer); //creer photographer avec le constructor
            photographersSection.innerHTML += photographerModel.templateDisplayAllPhotographers(); //ajoute photographer dans dom
        });
    };

    displayData() //init la function display data
}

photographersPage(); //init la function photographerPage
