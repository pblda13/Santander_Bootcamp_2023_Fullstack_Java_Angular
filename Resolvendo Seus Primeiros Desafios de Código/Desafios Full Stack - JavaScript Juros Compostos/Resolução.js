const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

let valorFinal = valorInicial;

for (let i = 0; i < periodo; i++) {
  valorFinal *= (1 + taxaJuros);
}

print('Valor final do investimento: R$', valorFinal.toFixed(2));
