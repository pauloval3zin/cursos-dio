/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter capacidade de dizer o valor de seu IMC (IMC = peso / (altura*altura));
Instancie uma pessoa chamada Jose que tenha 70kg de peso e 1,75 de altura e peça ao jose para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {

        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do peso: ' + imc.toFixed(2) + 'Kg.';

        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal: ' + imc.toFixed(2) + 'Kg.';

        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso: ' + imc.toFixed(2) + 'Kg.';

        } else if (imc >= 30 && imc < 40) {
            return 'Obeso: ' + imc.toFixed(2) + 'Kg.';

        } else {
            return 'Obesidade Grave: ' + imc.toFixed(2) + 'Kg.';
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.classificarImc())


