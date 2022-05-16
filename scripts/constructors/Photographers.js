class Photographers {
    constructor(data) {
        this._name = data.name;
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._picture = data.portrait;
    }

    get picture() {
        return `../assets/photographers/${this._picture}`;
    }

    get localisation() {
        return `${this._city}, ${this._country}`;
    }

    get price() {
        return `${this._price}€/jour`;
    }

    templatePhotographerHomePage() {
        return `
        <a class="photographers_link" href="photographer.html?id=${this._id}">
            <div class="photographers_header">
                <img class="photographers_picture" src="${this.picture}" alt="${this._name} profile"/>
                <h2>${this._name}</h2>
            </div>
            <div class="photographers_footer">
                <h3>${this.localisation}</h3>
                <p class="photographers_tagline">${this._tagline}</p>
                <p class="photographers_price">${this.price}</p>
            </div>
        </a>
        `
    }

    templatePhotographerPage() {
        return `
        <div class="photographer_infos">
            <h1 class="photographer_name">${this._name}</h1>
            <p class="photographer_localisation">${this.localisation}</p>
            <p class="photographer_tagline">${this._tagline}</p>
        </div>
        <img class="photographer_picture" src="${this.picture}" alt="${this._name} profile"/>
        `
    }


}