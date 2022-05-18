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
