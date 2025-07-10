const dadosCardControleMedicamentos = {
    titulo: 'Gestão de Medicamentos',
    imagem: './assets/gst_med.png',
    urlRepositorio: 'https://github.com/Davetheguy1/Gest-oDeMedicamentosAp-WEB-',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
};

const dadosCardCtrlBar = {
    titulo: 'Controle de Bar',
    imagem: './assets/ctrl_bar.png',
    urlRepositorio: 'https://github.com/Davetheguy1/ControleDeBarAP',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light'
    ], 
}

const dadosCardEagenda = {
    titulo: 'E-Agenda',
    imagem: './assets/eAgenda.png',
    urlRepositorio: 'https://github.com/Tiagao-com-T-ta/E-Agenda-Do-Tiagao',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=js&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light'
    ], 
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleMedicamentos)
        return;

    cardSelecionado = dadosCardControleMedicamentos;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardCtrlBar)
        return;

    cardSelecionado = dadosCardCtrlBar;
    carregarDadosCardAtual();
}

function selecionarTerceiroCard() {
    if (cardSelecionado == dadosCardEagenda)
        return;

    cardSelecionado = dadosCardEagenda;
    carregarDadosCardAtual();
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnSelecionarTerceiroCard = document.getElementById("btnSelecionarTerceiroCard");

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnSelecionarTerceiroCard.addEventListener('click', selecionarTerceiroCard);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);