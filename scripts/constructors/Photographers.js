/**
 * @param  {Object} data
 */
class Photographer {
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
        return `${this._price}€ / jour`;
    }

    templateDisplayAllPhotographers() {
        return `
            <article title='Link to ${this._name} page'>
                <a href="pages/photographer.html?id=${this._id}" aria-label="Cliquez pour en savoir plus sur ${this._name}">
                    <div class="photographers_header">
                        <img class="profile_picture" src="${this.picture}" alt="${this._name} profile picture"/>
                        <h2>${this._name}</h2>
                    </div>
                    <div class="photographers_footer">
                        <h3>${this.localisation}</h3>
                        <p class="photographers_footer_tagline">${this._tagline}</p>
                        <p class="photographers_footer_price">${this.price}</p>
                    </div>
                </a>
            </article>
        `;
    }

    templateDisplaySelectedPhotographer() {
        return `
            <div>
                <h1>${this._name}</h1>
                <p>${this.localisation}</p>
                <p>${this._tagline}</p>
            </div>
            <button aria-label="Ouvrir le formulaire pour contacter ${this._name}" tabindex="1" class="button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile_picture" src="${this.picture}" alt="Photo de profil de ${this._name}"/>
        `;
    }

    templateDisplayLikeAndPrice() {
        return `
            <div id="like_section">
                <div tabindex="2" title="Le total des likes du photographe">
                    <p></p>
                    <svg title="Image de coeur" viewBox="0 0 302.489 302.489" style="enable-background:new 0 0 302.489 302.489;">
                        <path d="M302.351,98.012c-1.116-20.846-9.942-40.422-24.855-55.122c-15.103-14.887-34.811-23.086-55.491-23.086
                        c-30.776,0-53.082,24.334-65.065,37.408c-1.85,2.019-4.018,4.384-5.527,5.827c-1.208-1.25-2.845-3.114-4.351-4.828
                        c-10.944-12.466-33.72-38.406-66.571-38.406c-20.68,0-40.387,8.199-55.49,23.086C10.087,57.59,1.259,77.165,0.143,98.012
                        c-1.111,20.812,4.212,38.921,17.26,58.72c10.324,15.669,37.545,46.266,66.195,74.408c14.757,14.495,28.339,26.779,39.277,35.524
                        c17.762,14.2,24.565,16.021,28.506,16.021c3.695,0,10.683-1.657,28.615-15.981c10.913-8.717,24.448-20.982,39.143-35.468
                        c28.393-27.99,55.515-58.628,65.956-74.507C293.877,143.372,303.774,124.629,302.351,98.012z"/>
                    </svg>
                </div>
                <p tabindex="2" title="Prix par jour">${this.price}</p>
            </div>
        `;
    }
}
