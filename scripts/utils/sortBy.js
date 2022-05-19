const mediasSection = document.querySelector(".medias");

async function sortByPopularity() {
    const { media } = await getPhotographers(); //recup photographers et medias
    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

    const sortByPopularity = selectedMedia.sort((a, b) => b.likes - a.likes);

    mediasSection.innerHTML = "";

    sortByPopularity.forEach((media) => {
        const allMedias = new MediasFactory(media);
        mediasSection.innerHTML += allMedias.templateMedia();
    });
}

async function sortByDate() {
    const { media } = await getPhotographers(); //recup photographers et medias
    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

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
}

async function sortByTitle() {
    const { media } = await getPhotographers(); //recup photographers et medias
    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

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
}