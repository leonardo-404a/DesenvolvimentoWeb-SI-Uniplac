// 1. Crie um algoritmo que recebe 2 parâmetros e retorna a multiplicação deles.

// 2. Desenvolva um algoritmo que receba um número como parâmetro e verifique se ele é par ou ímpar e escreva o resultado.

// 3. Crie um algoritmo que receba um valor e uma porcentagem como parâmetros. Deve retornar o valor acrescido da percentagem indicada.

// 4. Faça um algoritmo que receba dois números e verifique qual é o maior e informe o resultado.

// 5. Crie um algoritmo que calcula 5% de desconto retornando o valor do desconto.

// 6. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. 

// 7. Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

// 8. A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 

// Atividade 1
function multiplicacao(a, b) {
    return a * b;
}

function calculaMultiplicacao() {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = multiplicacao(a, b);
    alert(`O resultado da multiplicação é ${resultado}`);
}

// Atividade 2
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

function verificaParOuImpar() {
    const numero = Number(prompt('Digite um número: '));
    const resultado = parOuImpar(numero);
    alert(`O número é ${resultado}`);
}

// Atividade 3
function acrescimo(valor, porcentagem) {
    return valor + (valor * porcentagem / 100);
}

function calculaAcrescimo() {
    const valor = Number(prompt('Digite o valor: '));
    const porcentagem = Number(prompt('Digite a porcentagem: '));
    const resultado = acrescimo(valor, porcentagem);
    alert(`O valor acrescido da porcentagem é ${resultado}`);
}

// Atividade 4
function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function verificaMaiorNumero() {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = maiorNumero(a, b);
    alert(`O maior número é ${resultado}`);
}

// Atividade 5
function desconto(valor) {
    return valor * 0.05;
}

function calculaDesconto() {
    const valor = Number(prompt('Digite o valor: '));
    const resultado = desconto(valor);
    alert(`O valor do desconto é ${resultado}`);
}

// Atividade 6
function areaRetangulo(base, altura) {
    return base * altura;
}

function calculaAreaRetangulo() {
    const base = Number(prompt('Digite a base do retângulo: '));
    const altura = Number(prompt('Digite a altura do retângulo: '));
    const resultado = areaRetangulo(base, altura);
    alert(`A área do retângulo é ${resultado}`);
}

// Atividade 7
function positivoOuNegativo(numero) {
    if (numero >= 0) {
        return 'Positivo';
    } else {
        return 'Negativo';
    }
}

function verificaPositivoOuNegativo() {
    const numero = Number(prompt('Digite um número: '));
    const resultado = positivoOuNegativo(numero);
    alert(`O número é ${resultado}`);
}

// Atividade 8
function salarioTotal(horasTrabalhadas, salarioHora) {
    if (horasTrabalhadas > 160) {
        return (160 * salarioHora) + ((horasTrabalhadas - 160) * salarioHora * 1.5);
    } else {
        return horasTrabalhadas * salarioHora;
    }
}

function calculaSalarioTotal() {
    const horasTrabalhadas = Number(prompt('Digite o número de horas trabalhadas: '));
    const salarioHora = Number(prompt('Digite o salário por hora: '));
    const resultado = salarioTotal(horasTrabalhadas, salarioHora);
    alert(`O salário total do funcionário é ${resultado}`);
}

// Menu de teste
/*
* se quiser testar cada função separadamente, comente a função menu() e chame apenas a função que desejar chamar
* se o teu navegador não permitir o prompt, chame as funções a partir do console passando os parametros necessários
*/
function menu() {
    let opcao = 0;
    while (opcao !== 9) {
        opcao = Number(prompt('Escolha uma opção:\n1. Multiplicação\n2. Par ou ímpar\n3. Porcentagem\n4. Maior número\n5. Desconto\n6. Área do retângulo\n7. Positivo ou negativo\n8. Salário total\n9. Sair'));
        switch (opcao) {
            case 1:
                calculaMultiplicacao();
                break;
            case 2:
                verificaParOuImpar();
                break;
            case 3:
                calculaAcrescimo();
                break;
            case 4:
                verificaMaiorNumero();
                break;
            case 5:
                calculaDesconto();
                break;
            case 6:
                calculaAreaRetangulo();
                break;
            case 7:
                verificaPositivoOuNegativo();
                break;
            case 8:
                calculaSalarioTotal();
                break;
        }
    }
}

menu();