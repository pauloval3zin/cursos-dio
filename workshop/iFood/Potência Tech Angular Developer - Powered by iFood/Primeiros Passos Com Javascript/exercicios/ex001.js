/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média
e a sua classificação conforme tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
 - Média menor que 5, reprovação;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre;
*/

const n1 = 4;
const n2 = 5;
const n3 = 5;
const media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log('Reprovado, Nota:', media.toFixed(2));

} else if (media >= 5 && media <= 7) {
    console.log('Recuperação, Nota:', media.toFixed(2));

} else {
    console.log('Passou de semestre, Nota:', media.toFixed(2));

}