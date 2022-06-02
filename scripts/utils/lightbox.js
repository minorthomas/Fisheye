class Lightbox {

    static init() {
        const links = Array.from(document.querySelectorAll('a[href$=".webp"], a[href$=".mp4"]')) //recup tous les link avec l'attr href webp et mp4
        const gallery = links.map(link => link.getAttribute("href")) //recup tous les href des link

        links.forEach(link => link.addEventListener("click", event => {
            event.preventDefault();

            document.querySelector("header").style.display = "none";
            document.querySelector("main").style.display = "none";
            document.querySelector("footer").style.display = "none";
            window.scrollTo(0, 0);

            new Lightbox(event.currentTarget.getAttribute("href"), gallery);
        }))
    }

    constructor(url, images) {
        this.element = this.buildDOM(url)
        this.images = images
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this);

        document.addEventListener("keyup", this.onKeyUp)
        document.body.appendChild(this.element)
    }

    // close lightbox

    close(event) {
        event.preventDefault();

        this.element.parentElement.removeChild(this.element);

        document.removeEventListener("keyup", this.onKeyUp); //retire l'event après fermeture de la lightbox

        document.querySelector("header").style.display = "flex";
        document.querySelector("main").style.display = "grid";
        document.querySelector("footer").style.display = "flex";
    }

    //create media

    loadImage(url) {
        this.url = null;
        const container = this.element.querySelector("#media_lightbox");

        if (url.endsWith(".mp4")) {
            this.url = url;
            const video = document.createElement("video");
            container.innerHTML = "";
            container.appendChild(video);
            video.setAttribute("controls", "");
            video.src = url;
        } else {
            this.url = url;
            const picture = new Image();
            container.innerHTML = "";
            container.appendChild(picture);
            picture.src = url;
            picture.setAttribute("alt", this.alt);
        }
    }

    //image suivante

    next(event) {
        event.preventDefault();

        let i = this.images.findIndex(image => image === this.url);
        if (i === this.images.length - 1) {
            i = -1
        }
        this.loadImage(this.images[i + 1])
    }

    //image precedente

    previous(event) {
        event.preventDefault();

        let i = this.images.findIndex(image => image === this.url);
        if (i === 0) {
            i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    //

    onKeyUp(event) {
        if (event.key === "Escape") {
            this.close(event);
        } else if (event.key === "ArrowLeft") {
            this.previous(event);
        } else if (event.key === "ArrowRight") {
            this.next(event);
        }
    }

    // create lightbox

    buildDOM(url) {
        const lightboxDom = document.createElement("div");
        lightboxDom.setAttribute("id", "lightbox_section");

        lightboxDom.innerHTML = `
            <button id="close_lightbox">
                <svg viewBox="0 0 460.775 460.775" style="enable-background:new 0 0 460.775 460.775;">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                    c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                    c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                    c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                    l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                    c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                </svg>
            </button>
            <div class="lightbox_select">
                <button id="previous_button">
                    <svg viewBox="0 0 434.002 434.002" style="enable-background:new 0 0 434.002 434.002;">
                        <path d="M95.457,434.002l-33.105-45.076l234.094-171.928L62.352,45.077L95.456,0L360.24,194.459
                        c7.174,5.269,11.41,13.638,11.41,22.539c0,8.9-4.236,17.27-11.41,22.538L95.457,434.002z" />
                    </svg>
                </button>
                <div id="media_lightbox">
                </div>
                <button id="next_button">
                    <svg viewBox="0 0 434.002 434.002" style="enable-background:new 0 0 434.002 434.002;">
                        <path d="M95.457,434.002l-33.105-45.076l234.094-171.928L62.352,45.077L95.456,0L360.24,194.459
                        c7.174,5.269,11.41,13.638,11.41,22.539c0,8.9-4.236,17.27-11.41,22.538L95.457,434.002z" />
                    </svg>
                </button>    
            </div>
            <p class="lightbox_image_title">Titre de la photo</p>
        `

        //event des boutons de la lightbox
        lightboxDom.querySelector("#close_lightbox").addEventListener('click', this.close.bind(this))
        lightboxDom.querySelector("#previous_button").addEventListener('click', this.previous.bind(this))
        lightboxDom.querySelector("#next_button").addEventListener('click', this.next.bind(this))

        return lightboxDom;
    }
}