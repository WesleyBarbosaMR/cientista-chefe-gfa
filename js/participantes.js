let participantes = [
  {
    atuacao: "Coordenadora",
    nome: "Profa. Inês Escobar",
    resumo:
      "Graduada em Agronomia pela Universidade Federal de Viçosa, Mestra em Política Pública e Meio Ambiente pela UnB e Doutora em Educação pela USP. É professora Adjunta II da UFC; Membro da Comissão de Direitos Humanos/UFC; Representante dos docentes do Nordeste na Coordenação Pedagógica Nacional do PRONERA (INCRA/MDA); Coordenadora do Curso de Economia Ecológica da UFC e da EmpresaJúnior Eco-Lógica/UFC; Professora colaboradora do Programa de Desenvolvimento e Meio Ambiente - PRODEMA/UFC.",
    Lattes: "http://lattes.cnpq.br/2359052636977383",
    img: "../assets/img/placeholders/Ines_esco.png",
    funcao: "Coordenadora Geral da Pesquisa",
  },
  {
    atuacao: "Coordenadora",
    nome: "Profa. Kelly Menezes",
    resumo:
      "Doutora em Educação pela UFC; Mestra em Políticas Públicas e Sociedade pela Uece; Graduada em Serviço Social pela Uece, em Pedagogia e em Gerontologia.",
    Lattes: "http://lattes.cnpq.br/5768872699906558",
    img: "../assets/img/placeholders/kelly.gif",
    funcao: "Coordenadora dos painéis de Especialistas e análises qualitativas",
  },
  {
    atuacao: "Coordenadora",
    nome: "Profa. Nazaré Soares",
    resumo:
      "Doutora e Mestra em Administração e Controladoria pela UFC, Especialista Gestão Pública pela UECE.",
    Lattes: "http://lattes.cnpq.br/3073541276192824",
    img: "../assets/img/placeholders/nazare.gif",
    funcao: "Coordenadora de análises quantitativas",
  },
  {
    atuacao: "Coordenadora",
    nome: "Profa. Christine Farias Coelho",
    resumo: "Cientista Ambiental pela UFPE, Mestra em Desenvolvimento e Meio Ambiente pela UFC e Doutora em Engª Agrícola pela UFC.",
    Lattes: "http://lattes.cnpq.br/1472233199190560",
    img: "../assets/img/placeholders/christine.gif",
    funcao: "Coordenação de campo e de interface de plataformas de dados",
  },
  {
    atuacao: "Especialista",
    nome: "Prof. Wellington Wagner Ferreira Sarmento",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/1015561507843037",
    img: "",
    funcao: "Especialista em Machine Learning e Projetista de software de apoio a tomada de decisão em Governança",
  },
  {
    atuacao: "Especialista",
    nome: "Erika Roanna da Silva",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/1221207746147800",
    img: "",
    funcao: "Especialista em SIG e elaboração de mapas",
  },
  {
    atuacao: "Pesquisador",
    nome: "Jefferson Souza da Silva",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/9824186435160764",
    img: "",
    funcao: "Pesquisador, articulação de campo e coleta de dados",
  },
  {
    atuacao: "Pesquisadora",
    nome: "Antonia Everlania Felix Araujo",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/2839298847385321",
    img: "",
    funcao: "Pesquisadora",
  },
  {
    atuacao: "Pesquisadora",
    nome: "Bárbara Sheyla Pereira Lima Moreira",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/7595375305413599",
    img: "",
    funcao: "Pesquisadora",
  },
  {
    atuacao: "Pesquisadora",
    nome: "Juliana Azevedo da Silva",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/7266072421228618",
    img: "",
    funcao: "Pesquisadora",
  },
  {
    atuacao: "Pesquisador",
    nome: "Weldes Santos Alexandre",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/1967666536541863",
    img: "",
    funcao: "Pesquisador",
  },
  {
    atuacao: "Pesquisador",
    nome: "Lunian Fernandes Moreira",
    resumo: "",
    Lattes: "http://lattes.cnpq.br/1720864508024579",
    img: "",
    funcao: "Pesquisador",
  },
  {
    atuacao: "Bolsista Voluntário",
    nome: "André Domingues",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "Auxilio na elaboração geral de softwares",
  },
  {
    atuacao: "Bolsista",
    nome: "Wesley Barbosa",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "Auxilio na elaboração geral de softwares",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
];

let membros = document.querySelector(".membros");

colocarParticipantes(participantes, membros);

function colocarParticipantes(participantes, parent) {
  participantes.forEach((p) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("p-3");

    card.innerHTML = `
    
      <h5 class="fw-bold">${p.atuacao}</h5>
      <h6 class="fw-light">${p.funcao}</h6>
      <div class="pb-3 d-flex justify-content-center">
        <img class=" card" src="${p.img || "../assets/img/placeholders/placeholder_face.jpg"}" alt="foto de ${p.nome}" />
      </div>
      <span class='h5 fw-bold' >${p.nome}</span>
      <a class="link-body-emphasis" href="${p.Lattes}">Lattes</a>
      <span class="fw-bold">Resumo</span>
      <div class="part-resumo">
        <p data-bs-spy="scroll" class="overflow-y-scroll ">
        ${p.resumo ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere molestias vero? Molestiae sed amet similique explicabo incidunt ullam, recusandae nulla dolore asperiores beatae. Veniam at fugit placeat deleniti minus."
        }
        </p>
      </div>
    
    `;

    parent.appendChild(card);
  });
}
