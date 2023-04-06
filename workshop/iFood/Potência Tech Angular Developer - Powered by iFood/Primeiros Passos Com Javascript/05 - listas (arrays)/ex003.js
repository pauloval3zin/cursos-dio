class Tabuada {
    tabuadaDo;
    quantidadeLinha;

    constructor(tabuadaDo, quantidadeLinha) {
        this.tabuadaDo = tabuadaDo;
        this.quantidadeLinha = quantidadeLinha;
    }

    fazerTabuada() {
        for (let i = 1; i <= this.quantidadeLinha; i++) {
            console.log(`${this.tabuadaDo} x ${i} = ${i * this.tabuadaDo}`);
        }
    }

}
const tabuada = new Tabuada(3,10);
tabuada.fazerTabuada();