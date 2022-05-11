class AllPhotographers {
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

    templateAllPhotographers() {
        return `
        <a class="photographer_link" href="photographer.html?id=${this._id}">
            <div class="photographer_header">
                <img src="${this.picture}" alt="${this._name} profile"/>
                <h2>${this._name}</h2>
            </div>
            <div class="photographer_footer">
                <h3>${this.localisation}</h3>
                <p class="photographer_tagline">${this._tagline}</p>
                <p class="photographer_price">${this.price}</p>
            </div>
        </a>
        `
    }
}