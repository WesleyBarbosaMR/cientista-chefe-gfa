let header = document.querySelector(".header");

header.innerHTML = `
    
    <nav class="navbar navbar-expand-xl justify-content-end flex-column flex-md-row container">
    <div class="navbar-brand flex-column d-flex ">
        <span class="ps-4 pb-0 m-0 position-absolute CC quicksand-light"
        >Cientista Chefe em</span
        >
        <span class="cinzel-bold pt-3 ps-2">Governança Fundiária e Ambiental</span>
    </div>
    <button
        class="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-lg-5" id="navbarNav">
        <div class="container navbar-nav flex-grow-1 justify-content-end">
        <a class="btn" href="index.html">Home</a>

        <a class="btn" href="pages/sobre.html">Sobre o Projeto</a>

        <a class="btn" href="#rodape-contato">Contato</a>
        </div>
    </div>
    </nav>
    
    `;
