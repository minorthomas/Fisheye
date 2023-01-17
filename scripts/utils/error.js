function photographerNotFound() {
    const main = document.querySelector("main");
    const error = document.createElement('div');
    document.querySelector("#photographer_header").classList.add("not_visible");
    document.querySelector("#filter_section").classList.add("not_visible");
    document.querySelector("#medias_section").classList.add("not_visible");
    error.classList.add('error_section');

    const textError = `
        <p>404</p>
        <p>Page not found</p>
    `;

    error.innerHTML = textError;

    main.append(error);
}

function mediasNotFound() {
    const section = document.querySelector('#medias_section');
    const error = document.createElement('p')
    error.textContent = 'Aucun media trouvé';

    section.append(error);
}