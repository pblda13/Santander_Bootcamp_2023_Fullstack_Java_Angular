// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());


var ValorRestante = saldoTotal - valorSaque;

if(valorSaque > saldoTotal){
  
print ('Saldo insuficiente. Saque nao realizado!')
}
else{
  
  print('Saque realizado com sucesso. Novo saldo: ' + ValorRestante);
}