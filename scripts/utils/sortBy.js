//call elements
const mediasSection = document.querySelector("#medias_section");
const dropdownButton = document.querySelector("#filter_select_dropdown button");
const optionPopularity = document.querySelector("#option_popularity");
const optionDate = document.querySelector("#option_date");
const optionTitle = document.querySelector("#option_title");

function sortByPopularity(selectedMedia) {
    const sortedMedia = selectedMedia.sort(
        (mediaOne, mediaTwo) => mediaTwo.likes - mediaOne.likes
    );
    return sortedMedia;
}

function sortByDate(selectedMedia) {
    const sortedMedia = selectedMedia.sort((mediaOne, mediaTwo) => {
        let dateMediaOne = new Date(mediaOne.date),
            dateMediaTwo = new Date(mediaTwo.date);
        return dateMediaTwo - dateMediaOne;
    });
    return sortedMedia;
}

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

function loopMedia(medias) {
    medias.forEach((media) => {
        const factory = new MediasFactory(media);
        mediasSection.innerHTML += factory.templateMedia();
    });
}

function changingFilterOrder(by) {
    dropdownButton.textContent = "Popularité";

    optionPopularity.style.display = "none";
    optionDate.style.display = "block";
    optionTitle.style.display = "block";

    optionDate.style.borderRadius = "0";
}

function sortBy(selectedMedia, by) {
    mediasSection.innerHTML = "";

    if (by === "popularity") {
        const medias = sortByPopularity(selectedMedia);
        loopMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Popularité";

        optionPopularity.style.display = "none";
        optionDate.style.display = "block";
        optionTitle.style.display = "block";

        optionDate.style.borderRadius = "0";
    } else if (by === "date") {
        const medias = sortByDate(selectedMedia);
        loopMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Date";

        optionPopularity.style.display = "block";
        optionDate.style.display = "none";
        optionTitle.style.display = "block";
    } else if (by === "title") {
        const medias = sortByTitle(selectedMedia);
        loopMedia(medias);
        localStorage.setItem("Filter", JSON.stringify(medias));

        dropdownButton.textContent = "Titre";

        optionPopularity.style.display = "block";
        optionDate.style.display = "block";
        optionTitle.style.display = "none";

        optionDate.style.borderRadius = "0 0 0.3em 0.3em";
    }
}

// function sortByPopularity(selectedMedia) {
//     const sortByPopularity = selectedMedia.sort(
//         (mediaOne, mediaTwo) => mediaTwo.likes - mediaOne.likes
//     );
// }

// function sortByDate(selectedMedia) {
//     const sortByDate = selectedMedia.sort((mediaOne, mediaTwo) => { //compare les dates
//         let dateMediaOne = new Date(mediaOne.date),
//             dateMediaTwo = new Date(mediaTwo.date);

//         return dateMediaTwo - dateMediaOne;
//     });

//     mediasSection.innerHTML = ""; //innerhtml vide dans mediassection

//     sortByDate.forEach((media) => {
//         const allMedias = new MediasFactory(media);
//         mediasSection.innerHTML += allMedias.templateMedia();
//     });

//     //add in localstorage
//     localStorage.setItem("Filter", JSON.stringify(sortByDate));

//     //change all elements un dom
//     dropdownButton.textContent = "Date";

//     optionPopularity.style.display = "block";
//     optionDate.style.display = "none";
//     optionTitle.style.display = "block";
// }

// function sortByTitle(selectedMedia) {
//     const sortByTitle = selectedMedia.sort((mediaOne, mediaTwo) => { //compare les titres ordre alphabetique
//         let titleMediaOne = mediaOne.title.toLowerCase(),
//             titleMediaTwo = mediaTwo.title.toLowerCase();

//         if (titleMediaOne < titleMediaTwo) {
//             return -1;
//         }
//         if (titleMediaOne > titleMediaTwo) {
//             return 1;
//         }
//         return 0;
//     });

//     mediasSection.innerHTML = ""; //innerhtml vide dans mediassection

//     sortByTitle.forEach((media) => {
//         const allMedias = new MediasFactory(media);
//         mediasSection.innerHTML += allMedias.templateMedia();
//     });

//     //add in localstorage
//     localStorage.setItem("Filter", JSON.stringify(sortByTitle));

//     //change all elements un dom
//     dropdownButton.textContent = "Titre";

//     optionPopularity.style.display = "block";
//     optionDate.style.display = "block";
//     optionTitle.style.display = "none";

//     optionDate.style.borderRadius = "0 0 0.3em 0.3em";
// }
