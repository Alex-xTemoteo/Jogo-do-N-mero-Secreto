
import RandomNum from "./RandomNum.js"; // Importando classe
let randomNum = new RandomNum(1, 30);
let minimo = randomNum.getMin();
let maximo = randomNum.getMax();
let numSort = randomNum.getNumRandom();
exibirMensagemInicial();
let tentativas = parseInt(1);

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if(chute >= minimo && chute <= maximo){
        if(chute == numSort){
            exibirTextoNaTela('h1','Parabéns! Você acertou o número secreto.');
            let msg = (tentativas > 1)? `Foi descoberto com ${tentativas} tentativas.`: `Foi descoberto com uma tentativa.`;
            exibirTextoNaTela('p', `${msg}`);
            window.document.getElementById('bt_chute').setAttribute('disabled', false);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else if(chute > numSort)
            exibirTextoNaTela('p', 'O número secreto é menor!');
        else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas += 1;
        limparCampo();
    }else{
        exibirTextoNaTela('p', `Por gentileza, escolha um número ${minimo} de  a ${maximo}.`);
    };
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de ${minimo} a ${maximo}`);
};

function exibirTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    
    // Verifica se o navegador suporta e adiciona um narrador de texto se verdadeiro
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
};
function limparCampo(){
    document.querySelector('input').value = '';
};

function reiniciarJogo(){
    numSort = randomNum.getNumRandomNew();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    // Voltando o botão iniciar p/ o estado incial
    document.getElementById('bt_chute').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

// Deixando a função acessivel globalmente.
window.verificarChute = verificarChute; 
window.reiniciarJogo = reiniciarJogo;