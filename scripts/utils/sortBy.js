const mediasSection = document.querySelector(".medias_section");



const dropdownButton = document.querySelector(".dropdown_button");

const optionPopularity = document.querySelector(".option_popularity");
const optionDate = document.querySelector(".option_date");
const optionTitle = document.querySelector(".option_title");

async function sortByPopularity() {
    const sortByPopularity = selectedMedia.sort((a, b) => b.likes - a.likes);

    mediasSection.innerHTML = "";

    sortByPopularity.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    localStorage.setItem("SortBy", JSON.stringify(sortByPopularity));

    dropdownButton.textContent = "Popularité";

    optionPopularity.style.display = "none";
    optionDate.style.display = "block";
    optionTitle.style.display = "block";

    optionDate.style.borderRadius = "0";
}

async function sortByDate() {
    const sortByDate = selectedMedia.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateB - dateA;
    });

    mediasSection.innerHTML = "";

    sortByDate.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    localStorage.setItem("SortBy", JSON.stringify(sortByDate));

    dropdownButton.textContent = "Date";

    optionPopularity.style.display = "block";
    optionDate.style.display = "none";
    optionTitle.style.display = "block";
}

async function sortByTitle() {
    const sortByTitle = selectedMedia.sort((a, b) => {
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

    mediasSection.innerHTML = "";

    sortByTitle.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });

    localStorage.setItem("SortBy", JSON.stringify(sortByTitle));

    dropdownButton.textContent = "Titre";

    optionPopularity.style.display = "block";
    optionDate.style.display = "block";
    optionTitle.style.display = "none";

    optionDate.style.borderRadius = "0 0 0.3em 0.3em";
}