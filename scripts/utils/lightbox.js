function getMediaById() {
    const getSortByInLocalStorage = JSON.parse(localStorage.getItem("SortBy"));

    let arrayId = [];

    for (let i = 0; i < getSortByInLocalStorage.length; i++) {
        arrayId.push(getSortByInLocalStorage[i].id)
    }
    const allMedias = document.querySelectorAll("section > .media_section");
}

function templateLightbox() {
    const lightboxSelect = document.querySelector("#lightbox_section");

    const createTemplateLightbox = `
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
            <img src="assets/medias/82/Art_Mine.webp" alt="#"/>
            <button id="next_button">
                <svg viewBox="0 0 434.002 434.002" style="enable-background:new 0 0 434.002 434.002;">
                    <path d="M95.457,434.002l-33.105-45.076l234.094-171.928L62.352,45.077L95.456,0L360.24,194.459
                    c7.174,5.269,11.41,13.638,11.41,22.539c0,8.9-4.236,17.27-11.41,22.538L95.457,434.002z" />
                </svg>
            </button>    
        </div>
        <p class="lightbox_image_title">Titre de la photo</p>
    `;

    lightboxSelect.innerHTML = createTemplateLightbox;
}

function init() {
    getMediaById();
    templateLightbox();
};

init();