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

class Picture extends Media {
    constructor(data) {
        super(data)
        this._image = data.image
    }

    get picture() {
        return `assets/medias/${this._photographerId}/${this._image}`
    }

    templateMedia() {
        return `
            <article>
                <a tabindex="2" href="${this.picture}" class="open_lightbox">
                    <p>Voir ></p>
                    <img loading="lazy" src="${this.picture}" class="media_source" alt="${this._title}"/>
                </a>
                <div class="media_infos">
                    <h2>${this._title}</h2>
                    <button tabindex="2" role="checkbox" aria-checked="false" id="like${this._id}">
                        ${this._likes}
                        <svg id="heart${this._id}" viewBox="0 0 302.489 302.489" style="enable-background:new 0 0 302.489 302.489;">
                            <path d="M302.351,98.012c-1.116-20.846-9.942-40.422-24.855-55.122c-15.103-14.887-34.811-23.086-55.491-23.086
                            c-30.776,0-53.082,24.334-65.065,37.408c-1.85,2.019-4.018,4.384-5.527,5.827c-1.208-1.25-2.845-3.114-4.351-4.828
                            c-10.944-12.466-33.72-38.406-66.571-38.406c-20.68,0-40.387,8.199-55.49,23.086C10.087,57.59,1.259,77.165,0.143,98.012
                            c-1.111,20.812,4.212,38.921,17.26,58.72c10.324,15.669,37.545,46.266,66.195,74.408c14.757,14.495,28.339,26.779,39.277,35.524
                            c17.762,14.2,24.565,16.021,28.506,16.021c3.695,0,10.683-1.657,28.615-15.981c10.913-8.717,24.448-20.982,39.143-35.468
                            c28.393-27.99,55.515-58.628,65.956-74.507C293.877,143.372,303.774,124.629,302.351,98.012z"/>
                        </svg>
                    </button>
                </div>
            </article>
        `
    }
}

class Video extends Media {
    constructor(data) {
        super(data)
        this._video = data.video
        this._miniature = data.miniature
    }

    get video() {
        return `assets/medias/${this._photographerId}/${this._video}`
    }

    get miniature() {
        return `assets/medias/miniatures/${this._miniature}`
    }

    templateMedia() {
        return `
            <article>
                <a tabindex="2" href="${this.video}" class="open_lightbox">
                    <img loading="lazy" src="${this.miniature}" class="media_source" alt="${this._title}"/>
                    <svg class="play_button" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;">
                        <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651
                        l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416
                        c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151
                        C315.662,233.564,313.652,237.364,310.292,239.651z"/>
                    </svg>
                </a>
                <div class="media_infos">
                    <h2 class="media_title">${this._title}</h2>
                    <button tabindex="2" role="checkbox" aria-checked="false" id="like${this._id}">
                        ${this._likes}
                        <svg class="media_heart" id="heart${this._id}" viewBox="0 0 302.489 302.489" style="enable-background:new 0 0 302.489 302.489;">
                            <path d="M302.351,98.012c-1.116-20.846-9.942-40.422-24.855-55.122c-15.103-14.887-34.811-23.086-55.491-23.086
                            c-30.776,0-53.082,24.334-65.065,37.408c-1.85,2.019-4.018,4.384-5.527,5.827c-1.208-1.25-2.845-3.114-4.351-4.828
                            c-10.944-12.466-33.72-38.406-66.571-38.406c-20.68,0-40.387,8.199-55.49,23.086C10.087,57.59,1.259,77.165,0.143,98.012
                            c-1.111,20.812,4.212,38.921,17.26,58.72c10.324,15.669,37.545,46.266,66.195,74.408c14.757,14.495,28.339,26.779,39.277,35.524
                            c17.762,14.2,24.565,16.021,28.506,16.021c3.695,0,10.683-1.657,28.615-15.981c10.913-8.717,24.448-20.982,39.143-35.468
                            c28.393-27.99,55.515-58.628,65.956-74.507C293.877,143.372,303.774,124.629,302.351,98.012z"/>
                        </svg>
                    </button>       
                </div>
            </article>
        `
    }
}