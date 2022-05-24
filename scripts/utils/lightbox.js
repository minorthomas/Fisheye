function getMediaById() {
    const getSortByInLocalStorage = JSON.parse(localStorage.getItem("SortBy"));

    let arrayId = [];

    for (let i = 0; i < getSortByInLocalStorage.length; i++) {
        arrayId.push(getSortByInLocalStorage[i].id)
    }
    const allMedias = document.querySelectorAll("section > .media_section");
}

function templateLightbox() {
    const lightboxSelect = document.querySelector(".lightbox_section");

    const createTemplateLightbox = `
        <svg class="lightbox_close" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"/>
        </svg>
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
    getMediaById();
    templateLightbox();
};

init();