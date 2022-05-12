class Media {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    templateMedias() {
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

class Image extends Media {
    constructor(data) {
        super(data)
        this._image = data.image
    }

    get picture() {
        return `assets/medias/${this._video}`
    }
}

class Video extends Media {
    constructor(data) {
        super(data)
        this._video = data.video
    }

    get picture() {
        return `assets/medias/${this._video}`
    }
}