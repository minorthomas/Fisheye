const modal = document.querySelector("#modal_section");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

function displayModal() {
    header.classList.add("opacity_medium");
    main.classList.add("opacity_medium");
    footer.classList.add("opacity_medium");
    modal.classList.add("display_flex");
}

function closeModal() {
    header.classList.remove("opacity_medium");
    main.classList.remove("opacity_medium");
    footer.classList.remove("opacity_medium");
    modal.classList.remove("display_flex");
}

async function displayNameModal() {
    const { photographers } = await getPhotographers();

    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id.toString() === getIdParam
    );

    const modalTitle = document.querySelector(
        "#modal_header h3"
    );

    modalTitle.textContent = selectedPhotographer.name;
}

function displayValuesInConsole() {
    const sendFormButton = document.querySelector("#submit_btn");

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#yourmessage");



    sendFormButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (
            firstname.value.length === 0 ||
            lastname.value.length === 0 ||
            email.value.length === 0 ||
            message.value.length === 0
        ) {
            console.log("Error, vous devez remplir tous les champs");
            return false;
        } else {
            console.clear();
            console.group('Form: User infos');
            console.log(`Prenom: '${firstname.value}'`);
            console.log(`Nom: '${lastname.value}'`);
            console.log(`Adresse mail: '${email.value}'`);
            console.log(`Message: '${message.value}'`);
            console.groupEnd();
            closeModal();
            return true;
        }
    });
}

displayNameModal();
displayValuesInConsole();