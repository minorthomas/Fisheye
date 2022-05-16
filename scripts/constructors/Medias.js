class Media {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._type = data.type
    }

    get template() {
        this.templateMedia();
    }
}

class Image extends Media {
    constructor(data) {
        super(data)
        this._image = data.image
    }

    get picture() {
        return `assets/medias/${this._image}`
    }

    templateMedia() {
        return `
            <div class="image_section">
                <img src="${this.picture}" class="image_link" alt="photographer image"/>
                <div class="image_infos">
                    <h2 class="image_title">${this._title}</h2>
                    <p class="image_like">${this._likes}</p>
                </div>
            </div>
        `
    }
}

class Video extends Media {
    constructor(data) {
        super(data)
        this._video = data.video
    }

    get video() {
        return `assets/medias/${this._video}`
    }

    templateMedia() {
        return `
            <div class="video_section">
                <video class="video_link" width="320" height="240" controls/>
                    <source src="${this.video}" type="video/mp4"/>
                </video>
                <div class="video_infos">
                    <h2 class="video_title">${this._title}</h2>
                    <p class="video_like">${this._likes}</p>
                    <img src="/assets/icons/heart.svg" alt="heart like"/>
                </div>
            </div>
        `
    }
}