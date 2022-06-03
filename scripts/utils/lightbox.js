class Lightbox {

    static init() {
        const links = Array.from(document.querySelectorAll('a[href$=".webp"], a[href$=".mp4"]')) //recup tous les link avec l'attr href webp et mp4
        const gallery = links.map(link => link.getAttribute("href")) //recup tous les href des link

        links.forEach(link => link.addEventListener("click", event => {
            event.preventDefault();

            document.querySelector("header").style.display = "none"; //desac header
            document.querySelector("main").style.display = "none"; //desac main
            document.querySelector("footer").style.display = "none"; //desac footer
            window.scrollTo(0, 0);

            new Lightbox(event.currentTarget.getAttribute("href"), gallery); //creer la lightbox dans dom
        }))
    }

    constructor(url, images) {
        this.element = this.buildDOM(url) //this.element fait ref au html creer en bas
        this.images = images
        this.onKeyUp = this.onKeyUp.bind(this);

        document.addEventListener("keyup", this.onKeyUp)
        document.body.appendChild(this.element)

        this.loadImage(url)
    }

    // close lightbox

    close(event) {
        event.preventDefault();

        this.element.parentElement.removeChild(this.element); //remove la lightbox du dom

        document.removeEventListener("keyup", this.onKeyUp); //remove l'event après fermeture de la lightbox

        document.querySelector("header").style.display = "flex"; //ractive header
        document.querySelector("main").style.display = "grid"; //ractive main
        document.querySelector("footer").style.display = "flex"; //ractive footer
    }

    //create media

    loadImage(url) {
        this.url = null; //set l'url sur null
        this.alt = null; //set alt sur null
        const container = this.element.querySelector("#media_lightbox"); //get media lightbox qui contient le media choisi
        const titleMedia = document.querySelector("#lightbox_media_title") //get lightbox media title pour ajouter le titre

        if (url.endsWith(".mp4")) { //condition si c'est une video type mp4
            this.url = url; //get l'url du media
            const video = document.createElement("video"); //creer l'element pour accueillir le media
            container.innerHTML = ""; //container sur vide pour eviter les doublons
            container.appendChild(video); //add le media dans le container
            video.setAttribute("controls", "");
            video.src = url; //ajoute l'url dans l'attribut src

            let title = this.createTitle(this.url); //creer le titre a partir de l'url
            titleMedia.innerText = title; //ajoute le title dans title media

            this.alt = title //creer l'attr alt grace au titre
            video.setAttribute("alt", this.alt + "video"); //ajoute le titre dans l'attr alt + video
        } else { //condition si c'est une video type webp
            this.url = url;
            const picture = new Image();
            container.innerHTML = "";
            container.appendChild(picture);

            let newUrl = this.createUrl(this.url); //creer nouvelle url
            picture.src = newUrl; // add new url dans la source

            //add title
            let title = this.createTitle(this.url);
            titleMedia.innerText = title;

            this.alt = title
            picture.setAttribute("alt", this.alt + "picture"); //ajoute le titre dans l'attr alt + picture
        }
    }

    //create new url
    createUrl(url) {
        this.url = url; //get l'url
        if (url.endsWith(".webp")) { //condition si fini par .webp remplace par vide
            return url.replace(".webp", "_large.webp"); //replace .webp par _large.webp
        }
    }


    //create title
    createTitle(url) {
        let array = url.split("/"); //get l'url et retire les / et place chaque element dans un tableau
        let title = array[array.length - 1].replaceAll("_", " "); //remplace les _ par des espaces
        if (title.endsWith(".webp")) { //condition si fini par .webp remplace par vide
            return title.replace(".webp", " ");
        } else { //condition si fini par .mp4 remplace par vide
            return title.replace(".mp4", " ");
        }
    }

    //bouton image suivante
    next(event) {
        event.preventDefault();

        let i = this.images.findIndex(image => image === this.url); //get l'index du media actuel
        if (i === this.images.length - 1) { //condition si arrive a la fin du tableau retourne au premier media
            i = -1
        }
        this.loadImage(this.images[i + 1]) //index + 1 après appui
    }

    //image precedente

    previous(event) {
        event.preventDefault();

        let i = this.images.findIndex(image => image === this.url); //get l'index du media actuel
        if (i === 0) { //condition si arrive au debut du tableau retourne a la fin du tableau
            i = this.images.length
        }
        this.loadImage(this.images[i - 1]) //index - 1 après appui
    }

    //bouton d'access

    onKeyUp(event) {
        if (event.key === "Escape") { //echap ferme lightbox
            this.close(event);
        } else if (event.key === "ArrowLeft") { //fleche gauche media precedent
            this.previous(event);
        } else if (event.key === "ArrowRight") { //fleche droite media suivant
            this.next(event);
        }
    }

    // create lightbox

    buildDOM(url) {
        const lightboxDom = document.createElement("div"); //creer div 
        lightboxDom.setAttribute("id", "lightbox_section"); //ajoute attr id avec nom lightbox section

        //add l'html ci dessous à lightboxDom
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
            <p id="lightbox_media_title"></p>
        `

        //event des boutons de la lightbox
        lightboxDom.querySelector("#close_lightbox").addEventListener('click', this.close.bind(this)) //au clique ferme lightbox
        lightboxDom.querySelector("#previous_button").addEventListener('click', this.previous.bind(this)) //au clique media precedent
        lightboxDom.querySelector("#next_button").addEventListener('click', this.next.bind(this)) //au clique media suivant

        return lightboxDom;
    }
}