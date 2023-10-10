const valor = parseFloat(gets());

if (valor > 0) {
  print('Deposito realizado com sucesso!\n Saldo atual: R$  ', valor.toFixed(2))

} else if (valor < 0) {
 print('Valor invalido! Digite um valor maior que zero.')
} else {
  print('Encerrando o programa...')
}