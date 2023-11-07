
let max = 50;
let numeroMisterioso = gerarNumero(max);
let tentativas=0;
mensagemInicial();
function mensagemInicial(){
    exibir('h1', 'Jogo do número misterioso');
    exibir('p', 'Digite seu chute de 1 a ' + max);
}

function gerarNumero(max){
    return Math.round(Math.random()*max);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroMisterioso){
        exibir('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentaiva';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibir('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute>numeroMisterioso){
            exibir('p', 'O número secreto é menor');
        }
        else{
            exibir('p', 'O número secreto é maior');
        }
        tentativas++;
    }   limpaCampo()
}

function exibir(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function limpaCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroMisterioso = gerarNumero();
    limpaCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}