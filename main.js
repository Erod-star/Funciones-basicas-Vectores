let vector = new Array(10);

class FuncionesBasicas {
    constructor(vector) {
        this.vector = vector;
    }

    getLlenarNumerosPares() {
        let x = 2;
        for (let i = 0; i < vector.length; i++) {
            vector[i] = x;
            x += 2;
        }
    }

    mostrar() {
        console.log(this.vector);
    }

    girarDerecha() {
        let x = vector[10];
        let y = vector[10];
        let z = 0;
        for (let i = 0; i < vector.length; i++) {
            z = vector[i];
            vector[i] = x;
            x = z;
        }

    }

    girarIzquierda() {

    }

    invertirNumeros() {
        var x = vector.length;
        var vectorInvertido = 0;

        while (x >= 0) {
            vectorInvertido = vectorInvertido + vector[x];
            x--;
        }
    }

}

let app = new FuncionesBasicas(vector);
app.getLlenarNumerosPares();
app.invertirNumeros();
app.mostrar();