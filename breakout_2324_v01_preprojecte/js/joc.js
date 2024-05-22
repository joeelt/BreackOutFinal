/*
* CLASSE JOC
*/

class Joc {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.amplada = canvas.width;
        this.alcada = canvas.height;



        this.bola = new Bola(new Punt(this.canvas.width / 2, this.canvas.height / 2), 3);
        this.pala = new Pala(new Punt((this.canvas.width - 60) / 2, this.canvas.height - 15), 60, 4);
        this.mur = new Mur();



        this.key = {
            LEFT: { code: 37, pressed: false },
            RIGHT: { code: 39, pressed: false }
        };
    }

    draw() {
        this.clearCanvas();
        this.pala.draw(this.ctx);
        this.bola.draw(this.ctx);
        this.mur.draw(this.ctx); 


    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    inicialitza() {
        this.pala.draw(this.ctx);
        this.bola.draw(this.ctx);


        $(document).on("keydown", { joc: this }, function (e) {
            //Moviment de la pala y cuando supere los limites del canvas aprezca progresivamente por el otro lado.
            if (e.keyCode == 37 || e.keyCode == 65) {
                e.data.joc.pala.mou(-10, 0);
                if (e.data.joc.pala.posicio.x < 0) {
                    e.data.joc.pala.posicio.x = e.data.joc.canvas.width - e.data.joc.pala.amplada;
                }
            }
            if (e.keyCode == 39 || e.keyCode == 68) {
                e.data.joc.pala.mou(10, 0);
                if (e.data.joc.pala.posicio.x > e.data.joc.canvas.width - e.data.joc.pala.amplada) {
                    e.data.joc.pala.posicio.x = 0;
                }
            }
        });


        $(document).on("keyup", { joc: this }, function (e) {
            //Moviment de la pala cuando supere los limites del canvas aparezca por el otro lado.

            if (e.keyCode == 37) {
                e.data.joc.pala.mou(-5, 0);
                if (e.data.joc.pala.posicio.x < 0) {
                    e.data.joc.pala.posicio.x = e.data.joc.canvas.width - e.data.joc.pala.amplada;
                }
            }
            if (e.keyCode == 39) {
                e.data.joc.pala.mou(5, 0);
                if (e.data.joc.pala.posicio.x > e.data.joc.canvas.width - e.data.joc.pala.amplada) {
                    e.data.joc.pala.posicio.x = 0;
                }
            }
        });


    }

    update() {
        this.bola.update();
        this.pala.update();
        this.draw();

    }
}