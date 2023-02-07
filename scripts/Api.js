async function getPhotographers() {
    const photographers = fetch("data/photographers.json")
        .then((res) => res.json())
        .then((photographers) => photographers)
        .catch((err) => console.log("Error" + err));
    return photographers;
}