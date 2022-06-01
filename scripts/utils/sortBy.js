const mediasSection = document.querySelector("#medias_section"); //get medias section in dom

const dropdownButton = document.querySelector("#filter_select_dropdown button"); //get button dropdown in dom

//get button options filter
const optionPopularity = document.querySelector("#option_popularity");
const optionDate = document.querySelector("#option_date");
const optionTitle = document.querySelector("#option_title");

function sortByPopularity(selectedMedia) { //function filtre by likes
    const sortByPopularity = selectedMedia.sort((a, b) => b.likes - a.likes); //compare les likes

    mediasSection.innerHTML = ""; //innerhtml vide dans mediassection

    sortByPopularity.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    //add in localstorage
    localStorage.setItem("Filter", JSON.stringify(sortByPopularity));

    //change all elements un dom
    dropdownButton.textContent = "Popularité";

    optionPopularity.style.display = "none";
    optionDate.style.display = "block";
    optionTitle.style.display = "block";

    optionDate.style.borderRadius = "0";
}

function sortByDate(selectedMedia) {
    const sortByDate = selectedMedia.sort((a, b) => { //compare les dates
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateB - dateA;
    });

    mediasSection.innerHTML = ""; //innerhtml vide dans mediassection

    sortByDate.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    //add in localstorage
    localStorage.setItem("Filter", JSON.stringify(sortByDate));

    //change all elements un dom
    dropdownButton.textContent = "Date";

    optionPopularity.style.display = "block";
    optionDate.style.display = "none";
    optionTitle.style.display = "block";
}

function sortByTitle(selectedMedia) {
    const sortByTitle = selectedMedia.sort((a, b) => { //compare les titres ordre alphabetique
        let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    mediasSection.innerHTML = ""; //innerhtml vide dans mediassection

    sortByTitle.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    //add in localstorage
    localStorage.setItem("Filter", JSON.stringify(sortByTitle));

    //change all elements un dom
    dropdownButton.textContent = "Titre";

    optionPopularity.style.display = "block";
    optionDate.style.display = "block";
    optionTitle.style.display = "none";

    optionDate.style.borderRadius = "0 0 0.3em 0.3em";
}