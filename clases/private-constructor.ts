(() =>{

    //Para singletons
    class Heroe{

        private static heroe:Heroe;

        private constructor(){}

        static getHeroe(){
            if(!this.heroe){
                this.heroe = new Heroe();
            }
            return this.heroe;
        }
    }

    //const superman: Heroe = new Heroe();//No se puede instanciar
    const aquaman: Heroe = Heroe.getHeroe(); //Solo se obtiene por medio del metodo estatico
    console.log(aquaman);
})();