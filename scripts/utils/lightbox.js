function getMediaId() {
    const getSortByInLocalStorage = JSON.parse(localStorage.getItem("SortBy"));

    let arrayId = [];

    for (let i = 0; i < getSortByInLocalStorage.length; i++) {
        arrayId.push(getSortByInLocalStorage[i].id)
    }

    console.log(arrayId);

    const allMedias = document.querySelectorAll("section > .media_section");
}

function templateLightbox() {
    const lightboxSelect = document.querySelector(".lightbox_section");

    const createTemplateLightbox = `
        <img class="lightbox_close" alt="button close ligthbox" src="assets/icons/closered.svg"/>
        <div class="lightbox_select">
            <img class="lightbox_previous" src="#" alt="#"/>
            <img class="lightbox_image" src="#" alt="#"/>
            <img class="lightbox_next" src="#" alt="#"/>
        </div>
        <p class="lightbox_image_title">Text test</p>
    `;

    lightboxSelect.innerHTML = createTemplateLightbox;
}

function init() {
    getMediaId();
    templateLightbox();
};

init();