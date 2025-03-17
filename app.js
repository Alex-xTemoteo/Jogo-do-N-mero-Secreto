
import RandomNum from "./RandomNum.js"; // Importando classe
let randomNum = new RandomNum(1, 30);
let numSort = randomNum.getNumRandom();
exibirMensagemInicial();
let tentativas = parseInt(1);

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if(chute >= 1 && chute <= 10){
        if(chute == numSort){
            exibirTextoNaTela('h1','Parabéns! Você acertou o número secreto.');
            let msg = (tentativas > 1)? `Você descobriu com ${tentativas} tentativas.`: `Você descobriu com ${tentativas} tentativa.`;
            exibirTextoNaTela('p', `Congratulations!! ${msg}`);
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
        exibirTextoNaTela('p', 'Por gentileza, escolha um número de 1 a 10.');
    } 
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 à 10');
};

function exibirTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // cmd para ler um texto | rate é velocidade da voz 
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