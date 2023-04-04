/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Codigo Condicao de pagamento

- Á vista Debito, recebe 10% de desconto;
- Á vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais jutos de 10%.

Fazer com função
*/
const precoProduto = 100;
const condicao = 1;

function descontoPorcentagem(valor, porcentagem) {
    return valor - (valor * porcentagem) / 100;
}

function jurosPorcentagem(valor, porecentagem) {
    return valor + (valor * porecentagem) / 100;
}

function condicaoPagamento(numero) {
    if (numero === condicao) {
        return 'Valor do Produto R$: ' + precoProduto.toFixed(2) + '. Valor com 10% de desconto, pagamento no Debito: R$:' + descontoPorcentagem(precoProduto,10).toFixed(2);
    } else if (numero === 2) {
        return 'Valor do Produto R$: ' + precoProduto.toFixed(2) + '. Valor com 15% de desconto, pagamento no PIX ou Dinheiro: R$:' + descontoPorcentagem(precoProduto,15).toFixed(2);
    } else if (numero === 3) {
        return 'Valor do produto em 2x no Credito: R$:' + precoProduto.toFixed(2);
    } else if (numero === 4) {
        return 'Valor do Produto R$: ' + precoProduto.toFixed(2) + '. Valor com 10% de Juros: R$:' + jurosPorcentagem(100,10).toFixed(2);
    } else {
        return 'Opção inválida.'
    }

}

console.log(condicaoPagamento(4));