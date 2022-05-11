function photographerFactory(data) {

    const picture = `assets/photographers/${data.portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const photographersCard = `
            <a class="photographer_link" href="photographer.html?id=${data.id}">
                <div class="photographer_header">
                    <img src="${picture}" alt="Profil de ${data.name}"/>
                    <h2>${data.name}</h2>
                </div>
                <div class="photographer_footer">
                    <h3>${data.city}, ${data.country}</h3>
                    <p class="photographer_tagline">${data.tagline}</p>
                    <p class="photographer_price">${data.price}€/jour</p>
                </div>
            </a>
        `
        article.innerHTML = photographersCard;
        return article
    }
    return { getUserCardDOM }
}