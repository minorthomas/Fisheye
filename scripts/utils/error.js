function displayPageNotFound() { //display l'erreur si pas de photographers trouvé dans "photographer.html"
    const photographerMain = document.querySelector("main"); //recup main in dom

    //display none all elements
    document.querySelector("#filter_section").style.display = "none";
    document.querySelector("#photographer_header").style.display = "none";

    setTimeout(function () { window.location.href = "index.html"; }, 3000);//set timeout after error (3s)

    //template de l'erreur
    const templateDisplayError = `
    <div class="error_section">
        <p>404</p>
        <p>Page not found</p>
        <p>Auto redirect after 3 seconds</p>
    </div>
    `

    photographerMain.innerHTML = templateDisplayError; //ajoute l'erreur dans le main dom
}