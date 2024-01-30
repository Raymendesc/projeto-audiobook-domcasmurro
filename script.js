const botaoPlayPause = document.getElementById('play-pause');
const botaoAnteior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let reproduzindo = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if (reproduzindo === 0) {
        tocarFaixa();
        reproduzindo = 1;
    } else {
        pausarFaixa();
        reproduzindo = 0;
    }
}

function trocarNomeFaixa () {
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'
    tocarFaixa();
    reproduzindo = 1;
    trocarNomeFaixa();

}

function voltarFaixa(){
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'
    tocarFaixa();
    reproduzindo = 1;
    trocarNomeFaixa();

}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnteior.addEventListener('click', voltarFaixa);
