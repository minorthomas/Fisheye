const modal = document.querySelector("#contact_modal");
const main = document.querySelector("main");

function displayModal() {
    modal.style.display = "block";
    main.style.opacity = "0.4";
}

function closeModal() {
    modal.style.display = "none";
    main.style.opacity = "1";
}

async function displayNameModal() {
    const { photographers } = await getPhotographers(); //recup photographers et medias

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );

    const namePhoto = new Photographers(selectedPhotographer);

    const modalPhotographeName = document.querySelector(".modal_header_name");
    modalPhotographeName.innerHTML = namePhoto._name;

    const confirmModalButton = document.querySelector("#modal_confirm_form");

    // confirmModalButton.addEventListener("click", (event) => {
    //     const firstname = document.querySelector('#firstname').value;
    //     console.log(firstname);
    // });

}

function getValueInput() {

}

displayNameModal();
