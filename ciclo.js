let emprestimo = parseFloat(prompt("Digite o valor total do empréstimo:"));
let taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
let numParcelas = parseInt(prompt("Digite o número de parcelas:"));
let parcelaAtual = 1;

while (parcelaAtual <= numParcelas) {

let juros = emprestimo * taxaDeJuros;
let valorParcela = (emprestimo / (numParcelas - parcelaAtual + 1)) + juros;

console.log(`Parcela ${parcelaAtual}: R$${valorParcela.toFixed(2)} | Saldo devedor: R$${emprestimo.toFixed(2)}`);

emprestimo -= (valorParcela - juros);

parcelaAtual++;

let userInput = prompt("Digite 'sair' para interromper ou pressione Enter para continuar:");
    if (userInput !== null && userInput.toLowerCase() === "sair") {
        break;
    }
}