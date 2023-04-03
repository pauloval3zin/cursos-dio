/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Codigo Condicao de pagamento

- Á vista Debito, recebe 10% de desconto;
- Á vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais jutos de 10%.
*/

const preco = 99.90;
// const condicao = ['Debito', 'Dinheiro ou PIX', 'Duas Vezes', 'Mais Vezes'];
const condicao = 2;

if (condicao === 1) {
    const desconto = (preco * 10) / 100;
    const totalAPagar = preco - desconto
    console.log('Preço do produto original: R$', preco.toFixed(2));
    console.log('preco com 10% de desconto: R$', Math.round(totalAPagar));
} else if (condicao === 2) {
    const desconto = (preco * 15) / 100;
    const totalAPagar = preco - desconto;
    console.log('Preço do produto original: R$', preco.toFixed(2));
    console.log('preco com 15% de desconto: R$', Math.round(totalAPagar));
} else if (condicao === 3) {
    console.log('Pagamento em 2x preço normal do produto: R$', preco.toFixed(2));
} else {
    const precoACimaDe2x = (preco * 10) / 100;
    const totalAPagar = preco + precoACimaDe2x;
    console.log('Preço do produto original: R$', preco.toFixed(2));
    console.log('Pagamento acima de 2x taxa de 10% de juros: R$', Math.round(totalAPagar));
}