(() =>{

    //Para definir un getter y un setter, el cuerpo del metodo es parecido a java solo que el modificador sera set o get
    class Figura{
        constructor(
            private ancho:number,
            private alto:number
        ){}

        get getAncho():number{
            return this.ancho;
        }

        get getAlto():number{
            return this.alto;
        }

        set setAncho(ancho:number){
            this.ancho = ancho;
        }

        set setAlto(alto:number){
            this.alto = alto;
        }

    }

    const figura = new Figura(5, 10);
    console.log(figura.getAlto) //uso de un getter
    figura.setAlto = 45;// uso de un setter
    console.log(figura.getAlto)

})();