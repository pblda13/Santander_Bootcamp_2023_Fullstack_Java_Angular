const saldoAtual = parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());

var valorFinal = (saldoAtual + valorDeposito) - valorRetirada;
var valorFinalFormatado = valorFinal.toFixed(1);

print("Saldo atualizado na conta: " + valorFinalFormatado);
