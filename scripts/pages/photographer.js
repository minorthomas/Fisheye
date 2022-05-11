async function getPhotographerData() {
    const photographerData = fetch("../data/photographers.json")
        .then((res) => res.json())
        .then((medias) => medias)
        .catch((err) => console.log("Error" + err));

    return photographerData;
}