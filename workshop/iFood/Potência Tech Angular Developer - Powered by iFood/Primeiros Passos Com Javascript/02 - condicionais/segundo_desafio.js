/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.
Você terá 5 variáveis. Sendo elas:

- 1 Preço do etanol:
- 2 Preço da Gasolina:
- 3 Tipo de combustivel do carro:
- 4 Gasto médio do combustivel do carro por KM:
- 5 Distancia em KM da viagem.

Imprima no console o valor que sera gasto para realizar esta viagem.
*/

const precoEtanol = 4.25;
const precoGasolina = 5.50;
const tipoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;


if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('Valor gasto em R$:', valorGasto)
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('Valor gasto em R$:', valorGasto)
}
