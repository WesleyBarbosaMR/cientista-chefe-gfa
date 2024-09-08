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
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
  },
  {
    atuacao: "",
    nome: "",
    resumo: "",
    Lattes: "",
    img: "",
    funcao: "",
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
    card.classList.add("participante");

    card.innerHTML = `
    <div class="part-perfil">
        <p>Pesquisador</p>
        <img
            src="${p.img}"
            alt="foto de ${p.nome}"
        />
        <p>
            ${p.nome}
        </p>
        <a href="${p.Lattes}">
            lattes
        </a>
    </div>
    <div class="part-resumo">
        <p data-bs-spy="scroll" class="overflow-y-scroll h-50">
            ${p.resumo}
        </p>
        <p>
            <strong>
            ${p.funcao}
            </strong>
        </p>
    </div>
    `;

    parent.appendChild(card);
  });
}
