// 01.
function calculaDesconto() {
    document.body.innerHTML = '';

    let nomeProduto = document.createElement('input');
    nomeProduto.setAttribute('type', 'text');
    nomeProduto.setAttribute('placeholder', 'Digite o nome do produto');
    document.body.appendChild(nomeProduto);
    
    let quantidade = document.createElement('input');
    quantidade.setAttribute('type', 'number');
    quantidade.setAttribute('placeholder', 'Digite a quantidade adquirida');
    document.body.appendChild(quantidade);

    let precoUnitario = document.createElement('input');
    precoUnitario.setAttribute('type', 'number');
    precoUnitario.setAttribute('placeholder', 'Digite o preço unitário');
    document.body.appendChild(precoUnitario);

    let button = document.createElement('button');
    button.textContent = 'Calcular';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        let total = quantidade.value * precoUnitario.value;
        let desconto = 0;

        if (quantidade.value <= 5) {
            desconto = total * 0.02;
        } else if (quantidade.value > 5 && quantidade.value <= 10) {
            desconto = total * 0.03;
        } else {
            desconto = total * 0.05;
        }

        let totalPagar = total - desconto;

        let resultado = document.createElement('p');
        resultado.textContent = `O total a pagar é R$ ${totalPagar.toFixed(2)}`;
        document.body.appendChild(resultado);
    });
    
    criarBotaoVoltar();
}

// 02.
function calculaConceito() {
    document.body.innerHTML = '';

    let nota1 = document.createElement('input');
    nota1.setAttribute('type', 'number');
    nota1.setAttribute('placeholder', 'Digite a primeira nota');
    document.body.appendChild(nota1);

    let nota2 = document.createElement('input');
    nota2.setAttribute('type', 'number');
    nota2.setAttribute('placeholder', 'Digite a segunda nota');
    document.body.appendChild(nota2);

    let nota3 = document.createElement('input');
    nota3.setAttribute('type', 'number');
    nota3.setAttribute('placeholder', 'Digite a terceira nota');
    document.body.appendChild(nota3);

    let mediaExercicios = document.createElement('input');
    mediaExercicios.setAttribute('type', 'number');
    mediaExercicios.setAttribute('placeholder', 'Digite a média dos exercícios');
    document.body.appendChild(mediaExercicios);

    let button = document.createElement('button');
    button.textContent = 'Calcular';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        let mediaAproveitamento = (Number(nota1.value) + Number(nota2.value) * 2 + Number(nota3.value) * 3 + Number(mediaExercicios.value)) / 7;

        let resultado = document.createElement('p');
        if (mediaAproveitamento >= 9) {
            resultado.textContent = 'Conceito A';
        } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
            resultado.textContent = 'Conceito B';
        } else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
            resultado.textContent = 'Conceito C';
        } else {
            resultado.textContent = 'Conceito D';
        }
        document.body.appendChild(resultado);
    });
    criarBotaoVoltar();
}

// 03.
function verificaAposentadoria() {
    document.body.innerHTML = '';

    let codigo = document.createElement('input');
    codigo.setAttribute('type', 'text');
    codigo.setAttribute('placeholder', 'Digite o código do empregado');
    document.body.appendChild(codigo);

    let anoNascimento = document.createElement('input');
    anoNascimento.setAttribute('type', 'number');
    anoNascimento.setAttribute('placeholder', 'Digite o ano de nascimento');
    document.body.appendChild(anoNascimento);

    let anoIngresso = document.createElement('input');
    anoIngresso.setAttribute('type', 'number');
    anoIngresso.setAttribute('placeholder', 'Digite o ano de ingresso na empresa');
    document.body.appendChild(anoIngresso);

    let button = document.createElement('button');
    button.textContent = 'Verificar';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        let idade = 2021 - anoNascimento.value;
        let tempoTrabalho = 2021 - anoIngresso.value;

        let resultado = document.createElement('p');
        if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
            resultado.textContent = 'Requerer aposentadoria';
        } else {
            resultado.textContent = 'Não requerer';
        }
        document.body.appendChild(resultado);
    });
    criarBotaoVoltar();
}

// 04.
function calculaAreaPoligono() {
    document.body.innerHTML = '';

    let lados = document.createElement('input');
    lados.setAttribute('type', 'number');
    lados.setAttribute('placeholder', 'Digite o número de lados do polígono');
    document.body.appendChild(lados);

    let medidaLado = document.createElement('input');
    medidaLado.setAttribute('type', 'number');
    medidaLado.setAttribute('placeholder', 'Digite a medida do lado (em cm)');
    document.body.appendChild(medidaLado);

    let button = document.createElement('button');
    button.textContent = 'Calcular';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        let area = 0;
        let tipoPoligono = '';

        if (lados.value == 3) {
            area = (medidaLado.value ** 2 * Math.sqrt(3)) / 4;
            tipoPoligono = 'TRIÂNGULO';
        }
        else if (lados.value == 4) {
            area = medidaLado.value ** 2;
            tipoPoligono = 'QUADRADO';
        }
        else if (lados.value == 5) {
            tipoPoligono = 'PENTÁGONO';
        }
        else {
            tipoPoligono = 'Polígono não identificado';
        }

        let resultado = document.createElement('p');
        resultado.textContent = `${tipoPoligono} - Área: ${area.toFixed(2)} cm²`;
        document.body.appendChild(resultado);
    });
    criarBotaoVoltar();
}

// 05.
function diferencaOperadores() {
    document.body.innerHTML = '';

    document.writeln('O operador "=" é utilizado para atribuir um valor a uma variável.<br>');
    document.writeln('O operador "==" é utilizado para comparar valores, sem levar em consideração o tipo.<br>');
    document.writeln('O operador "===" é utilizado para comparar valores, levando em consideração o tipo.<br>');
    criarBotaoVoltar();
}

function criarBotaoVoltar() {
    let button = document.createElement('button');
    button.textContent = 'Voltar';
    document.body.appendChild(button);

    button.addEventListener('click', menu);
}

// Menu

function menu() {
    document.body.innerHTML = '';

    let calculaDescontoButton = document.createElement('button');
    calculaDescontoButton.textContent = 'Calcular desconto';
    document.body.appendChild(calculaDescontoButton);

    let calculaConceitoButton = document.createElement('button');
    calculaConceitoButton.textContent = 'Calcular conceito';
    document.body.appendChild(calculaConceitoButton);

    let verificaAposentadoriaButton = document.createElement('button');
    verificaAposentadoriaButton.textContent = 'Verificar aposentadoria';
    document.body.appendChild(verificaAposentadoriaButton);

    let calculaAreaPoligonoButton = document.createElement('button');
    calculaAreaPoligonoButton.textContent = 'Calcular área do polígono';
    document.body.appendChild(calculaAreaPoligonoButton);

    let diferencaOperadoresButton = document.createElement('button');
    diferencaOperadoresButton.textContent = 'Diferença entre operadores';
    document.body.appendChild(diferencaOperadoresButton);

    calculaDescontoButton.addEventListener('click', calculaDesconto);
    calculaConceitoButton.addEventListener('click', calculaConceito);
    verificaAposentadoriaButton.addEventListener('click', verificaAposentadoria);
    calculaAreaPoligonoButton.addEventListener('click', calculaAreaPoligono);
    diferencaOperadoresButton.addEventListener('click', diferencaOperadores);
}

menu();