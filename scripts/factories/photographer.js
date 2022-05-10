function photographerFactory(data) {

    const picture = `assets/photographers/${data.portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const photographersCard = `
            <a href="photographer.html?id=${data.id}">
                <img src="${picture}" alt="Profil de ${data.name}"/>
                <h2>${data.name}</h2>
                <h3>${data.city}, ${data.country}</h3>
                <p>${data.tagline}</p>
                <p>${data.price}€/jour</p>
            </a>
        `
        article.innerHTML = photographersCard;
        return article
    }
    return { getUserCardDOM }
}