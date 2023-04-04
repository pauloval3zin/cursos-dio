function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

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

(function main() {
    const peso = 83;
    const altura = 1.90;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))
})();


