function calcular() {
    const num1 = parseFloat(document.getElementsByClassName('num1')[0].value);
    const num2 = parseFloat(document.getElementsByClassName('num2')[0].value);
    const operacao = document.getElementsByClassName('operacao')[0].value;
    let resultado;

    if (operacao === 'Adicao') {
        resultado = num1 + num2;
    } else if (operacao === 'Subtracao') {
        resultado = num1 - num2;
    } else if (operacao === 'Multiplicacao') {
        resultado = num1 * num2;
    } else if (operacao === 'Divisao') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = 'Erro: divisão por zero';
        }
    } else {
        resultado = 'Operação inválida';
    }

    document.getElementById('resultado').value = resultado;
}
