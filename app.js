<<<<<<< HEAD
let listaNumeroSorteados = [];
let numeroLimite = 20;
let numeroSecreto;
let tentativas;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
 
function iniciarAplicacao() {
    exibirTextoNaTela('h1',`Jogo do número secreto`);
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
 }

 iniciarAplicacao();

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1',`Acertou`);
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Parabéns vocês descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('p',mensagemTentativas);
        ativarBotao('reiniciar');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior`);
        }
        tentativas ++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosLista = listaNumeroSorteados.length;

    if (quantidadeDeElementosLista == numeroLimite){
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function ativarBotao(botao) {
    document.getElementById(botao).removeAttribute('disabled');
}

function reiniciarJogo() {
    iniciarAplicacao();
    document.getElementById('reiniciar').setAttribute('disabled',true);
=======
let listaNumeroSorteados = [];
let numeroLimite = 5;
let numeroSecreto;
let tentativas;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
 
function iniciarAplicacao() {
    exibirTextoNaTela('h1',`Jogo do número secreto`);
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
 }

 iniciarAplicacao();

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1',`Acertou`);
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Parabéns vocês descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('p',mensagemTentativas);
        ativarBotao('reiniciar');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior`);
        }
        tentativas ++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosLista = listaNumeroSorteados.length;

    if (quantidadeDeElementosLista == numeroLimite){
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function ativarBotao(botao) {
    document.getElementById(botao).removeAttribute('disabled');
}

function reiniciarJogo() {
    iniciarAplicacao();
    document.getElementById('reiniciar').setAttribute('disabled',true);
>>>>>>> 0951735fb579d78df0784700a7cf89e28e300afa
}