class Tabuada {
    tabuadaDo;
    quantidadeLinha;

    constructor(tabuadaDo, quantidadeLinha) {
        this.tabuadaDo = tabuadaDo;
        this.quantidadeLinha = quantidadeLinha;
    }

    fazerTabuada() {
        for (let i = 1; i <= this.quantidadeLinha; i++) {
            const resultado = `${this.tabuadaDo} x ${i} = ${i * this.tabuadaDo}`;
            console.log(resultado);
        }
    }

}
const tabuada = new Tabuada(3,10);
tabuada.fazerTabuada();