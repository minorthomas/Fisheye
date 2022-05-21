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
            <article class="media_section">
                <img loading="lazy" src="${this.picture}" class="media_source" alt="${this._title}"/>
                <div class="media_infos">
                    <h2 class="media_title">${this._title}</h2>
                    <div class="media_like">
                        <p class="media_total_like">${this._likes}</p>
                        <img loading="lazy" class="heart" src="/assets/icons/heartred.svg" alt="like"/>
                    </div>
                </div>
            </article>
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
            <article class="media_section">
                <video class="media_source" width="320" height="240" alt="${this._title}" controls/>
                    <source src="${this.video}" type="video/mp4"/>
                </video>
                <div class="media_infos">
                    <h2 class="media_title">${this._title}</h2>
                    <div class="media_like">
                        <p class="media_total_like">${this._likes}</p>
                        <img loading="lazy" class="heart" src="/assets/icons/heartred.svg" alt="like"/>
                    </div>       
                </div>
            </article>
        `
    }
}