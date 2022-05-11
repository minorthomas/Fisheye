class Image {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get picture() {
        return `assets/medias/${this._image}`
    }
}

class Video extends Image {
    constructor(id, photographerId, title, likes, date, price) {
        super(id, photographerId, title, likes, date, price)
        this._video = data.video
    }

    get picture() {
        return `assets/medias/${this._video}`
    }
}