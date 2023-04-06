/*
Faça um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero encontrado.
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20];

for (let i = 0; i < lista.length; i++) {
    const numeros = lista[i];
    numeroPar = numeros % 2;
    if (numeroPar === 0) {
        console.log(numeros);
    }
}