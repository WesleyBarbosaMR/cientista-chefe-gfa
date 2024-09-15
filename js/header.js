let header = document.querySelector(".header");

header.innerHTML = `
    
    <nav class="navbar navbar-expand-xl justify-content-end container">
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
            
            <a class="btn" href="/index.html">Home</a>
            <a class="btn" href="/pages/sobre.html">Sobre o Projeto</a>
            
            <a class="btn" href="#rodape-contato">Contato</a>
          </div>
        </div>
      </nav>
    `;
