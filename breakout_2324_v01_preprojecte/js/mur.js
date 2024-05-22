/*
* CLASSE MUR
*/

class Mur {
    constructor() {
        this.totxos = [];
        this.nivells = [];
        this.nivellActual = 0;
        this.defineixNivells();
        this.generaMur();
    }

    generaMur() {
        let nivell = this.nivells[this.nivellActual]; // nivell actual
        let color = nivell.color; // color dels totxos
        let totxos = nivell.totxos; // matriu de totxos
        let ampladaTotxo = 20; // amplada del totxo
        let alcadaTotxo = 10; // alcada del totxo
        let x = 2.5; // posició x del primer totxo
        let y = 2.5; // posició y del primer totxo de la fila
        let separacion = 15;

        for (let fila = 0; fila < totxos.length; fila++) {
            let linia = Array.from(totxos[fila]); // fila de totxos
            x = 2.5;

            for (let columna = 0; columna < linia.length; columna++) { // recorrem la fila
                if (linia[columna] == 'a') { // si hi ha un totxo
                    let posicio = new Punt(x, y); // posició del totxo
                    let totxo = new Totxo(posicio, ampladaTotxo, alcadaTotxo, color); // creem el totxo
                    this.totxos.push(totxo); // afegim el totxo al mur
                }
                x += alcadaTotxo + separacion; // incrementem la posició y para el siguiente totxo
            }

            y += separacion; // Mover a la siguiente columna de totxos
        }
    }

    draw(ctx) {
        this.totxos.forEach(totxo => {
            totxo.draw(ctx);
        });
    }

    defineixNivells() {
        this.nivells = [
            {
                color: "#4CF", // blue cel
                totxos: [
                    "aaaaaaaaaaaa",
                    "aaaaaaaaaaaa",
                    "aaaaaaaaaaaa",
                    "aaaaaaaaaaaa",
                ]
            },
            {
                color: "#8D1", // verd
                totxos: [
                    "aaaaaaaaaaaa",
                    "     aa     ",
                    "   aaaaaa   ",
                    "   aaaaaa   ",
                    "     aa     ",
                ]
            },
            {
                color: "#D30", // vermell
                totxos: [
                    "aaaaaaaaaaaa",
                    "a          a",
                    " a        a ",
                    "aa        aa",
                    "  aaaaaaaa  ",
                ]
            }
        ];
    }

};

