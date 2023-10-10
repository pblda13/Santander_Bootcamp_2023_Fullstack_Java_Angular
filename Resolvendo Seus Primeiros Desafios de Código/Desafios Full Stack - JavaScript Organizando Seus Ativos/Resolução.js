// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(gets());

//Entrada dos tipos de ativos
const ativos = [ ];
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = gets();
  ativos.push(codigoAtivo);
}

ativos.sort();

for (let i = 0; i < quantidadeAtivos; i++) {
  console.log(ativos[i]);
}