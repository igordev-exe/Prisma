const dialogos = [
    "Saudações, viajante...",
    "Uma grande aventura pelo conhecimento o aguarda.\n\nDomine as artes da tecnologia e evolua suas habilidades.",
    "Acompanhe-me nesta jornada."
];

let dialogoAtual = 0;
let escrevendo = false;
let intervaloAtual = null;

const containerPai = document.getElementById('containerPai');
const dialogoEl    = document.getElementById('dialogoMago');
const textoEl      = document.getElementById('dialogoTexto');
const proximoBtn   = document.getElementById('dialogoProximo');

function escreverTexto(texto) {
    if (intervaloAtual) clearInterval(intervaloAtual);
    escrevendo = true;
    textoEl.textContent = '';
    let i = 0;
    intervaloAtual = setInterval(() => {
        textoEl.textContent += texto[i];
        i++;
        if (i >= texto.length) {
            clearInterval(intervaloAtual);
            intervaloAtual = null;
            escrevendo = false;
        }
    }, 35);
}

function mostrarDialogo(index) {
    escreverTexto(dialogos[index]);
}

function encerrarDialogo() {
    dialogoEl.classList.remove('visivel');
    containerPai.classList.remove('magoGrande');
    containerPai.classList.add('magoPequeno');
    localStorage.setItem('animacaoMagoVista', '1');
}

proximoBtn.addEventListener('click', () => {
    if (escrevendo) {
        clearInterval(intervaloAtual);
        intervaloAtual = null;
        textoEl.textContent = dialogos[dialogoAtual];
        escrevendo = false;
        return;
    }

    dialogoAtual++;
    if (dialogoAtual < dialogos.length) {
        mostrarDialogo(dialogoAtual);
    } else {
        encerrarDialogo();
    }
});

if (localStorage.getItem('animacaoMagoVista')) {
    containerPai.classList.add('magoPequeno');
} else {
    setTimeout(() => {
        containerPai.classList.add('magoGrande');

        setTimeout(() => {
            dialogoEl.classList.add('visivel');
            mostrarDialogo(0);
        }, 900);
    }, 1000);
}
