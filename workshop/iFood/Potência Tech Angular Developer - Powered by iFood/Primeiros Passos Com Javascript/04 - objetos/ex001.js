/*
 1 - Crie uma classe para representar carros.
 OS carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
 Crie um metodo que dado a quantidade de quilometro e o preço do combustivel nos de o valor gasto em reais para realizar
 este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(valorCombustivel, distanciaKm) {
        return (distanciaKm * this.gastoMedioPorKm) * valorCombustivel;
    }

}

const c1 = new Carros('Fiat', 'Azul', 1 / 10);
console.log(c1.calcularViagem(5, 70).toFixed(2));
const c2 = new Carros('Fiat', 'Preta', 1 / 12);
console.log(c2.calcularViagem(5, 70).toFixed(2));