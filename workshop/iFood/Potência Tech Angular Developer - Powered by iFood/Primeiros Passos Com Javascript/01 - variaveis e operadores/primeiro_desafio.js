const precoCombustivel = 3.55;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosViagem = distanciaEmKm / kmPorLitros;
const gastoFinal = litrosViagem * precoCombustivel;

console.log('Valor total gasto R$:',gastoFinal.toFixed(2));
