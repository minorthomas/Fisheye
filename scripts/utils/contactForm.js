const modal = document.querySelector("#modal_section");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

function displayModal() {
    modal.style.display = "flex";
    main.style.opacity = "0.4";
    header.style.opacity = "0.4";
    footer.style.opacity = "0.4";
}

function closeModal() {
    modal.style.display = "none";
    main.style.opacity = "1";
    header.style.opacity = "1";
    footer.style.opacity = "1";
}

async function displayNameModal() {
    const { photographers } = await getPhotographers(); //recup photographers et medias

    const selectedPhotographer = photographers.find( //trouve et verifi si id du photographer == id dans l'url
        (photographer) => photographer.id == getIdParam
    );

    const selectedPhotographerName = new Photographer(selectedPhotographer);

    const headerSelectedPhotographerName = document.querySelector("#modal_header div p");
    headerSelectedPhotographerName.innerHTML = selectedPhotographerName._name;
}

function displayValuesInLog() {
    const sendFormButton = document.querySelector("#send_form_button");

    const firstname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const message = document.querySelector('#yourmessage');


    sendFormButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (firstname.value.length == 0 || lastname.value.length == 0 || email.value.length == 0 || message.value.length == 0) {
            console.log("Error, vous devez remplir tous les champs");
        } else {
            console.clear();
            console.log("Prénom: " + firstname.value);
            console.log("Nom: " + lastname.value);
            console.log("Adresse mail: " + email.value);
            console.log("Message: " + message.value);

            closeModal();
        }
    });
}

displayValuesInLog();
displayNameModal();
