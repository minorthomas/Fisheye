async function getPhotographers() { //fetch recup data fichier json
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json()) //reponse en json
        .then((photographers) => photographers) //recup les photographers
        .catch((err) => console.log("Error" + err)); //gestion erreur

    return photographers; //retourne les photographes
}