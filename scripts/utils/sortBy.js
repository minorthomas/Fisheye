async function getMedias() {
    const { media } = await getPhotographers();

    const selectedMedia = media.filter( //trouve et verifi si id du photographer == id dans l'url
        (media) => media.photographerId == getIdParam
    );

    let array = [];

    for (i = 0; i < selectedMedia.length; i++) {
        const likes = selectedMedia[i].likes;

        array.push(likes);
    }
    const byValue = (a, b) => b - a;

    array.sort(byValue)

    console.log(array);
}