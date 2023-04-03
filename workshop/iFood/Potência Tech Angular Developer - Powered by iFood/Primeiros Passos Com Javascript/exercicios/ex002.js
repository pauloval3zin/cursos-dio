/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição
de peso de uma pessoa adulta.

Formula IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC de adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 83;
const altura = 1.90;
const imc = peso / (altura*altura);

if (imc <= 18.5) {
    console.log('Abaixo do peso.', imc.toFixed(2))

} else if (imc > 18.5 && imc <= 25) {
    console.log('Peso normal', imc.toFixed(2))

} else if (imc > 25 && imc <= 30) {
    console.log('Acima do peso', imc.toFixed(2))

} else if (imc > 30 && imc <= 40) {
    console.log('Obeso', imc.toFixed(2))

} else {
    console.log('Obesidade Grave', imc.toFixed(2))
}