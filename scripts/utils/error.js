function displayPageNotFound() { //display l'erreur si pas de photographers trouvé dans "photographer.html"
    const photographerMain = document.querySelector("#main"); //recup main in dom

    //display none all elements
    document.querySelector("#select_menu").style.display = "none";
    document.querySelector(".photographer_header").style.display = "none";

    setTimeout(function () { window.location.href = "index.html"; }, 3000);//set timeout after error (3s)

    //template de l'erreur
    const templateError = `
    <div class="error_section">
        <p class="error_number">404</p>
        <p class="error_notfound_text">Page not found</p>
        <p class="error_redirect_text">Auto redirect after 3 seconds</p>
    </div>
    `

    photographerMain.innerHTML = templateError; //ajoute l'erreur dans le main dom
}