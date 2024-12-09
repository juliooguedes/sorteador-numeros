function sortear() {
    let quantidadeDeNumero = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;
    
    if(numeroMinimo > numeroMaximo) {
        alert('O campo "DO NÚMERO" tem que ser inferior ao campo "ATÉ O NÚMERO". Verifique!')
        return;
    }
    let quantidadeMinima = numeroMaximo - numeroMinimo;

    if( quantidadeMinima < quantidadeDeNumero){
        alert('A quantidade de números do campo "QUANTIDADE DE NÚMEROS" tem que ser maior ou igual ao intervalo informado ao campo "DO NÚMERO" até o campo "ATÉ O NÚMERO". Verifique!')
        return;
    }

    for (let i = 0; i < quantidadeDeNumero; i++) {
        numero = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        }

        sorteados.push(numero);
    }

    let palavraNumero = quantidadeDeNumero > 1 ? 'Números Sorteados: ' : 'Número Sorteado: ';
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo" id="mensagem_sorteados">${palavraNumero}  ${sorteados} </label>`;

    alterarStatusBotao()
    
}

function gerarNumeroAleatorio(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo" id="mensagem_sorteados">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}