(() =>{

    //Una interfaz es parecido a un type pero el type no se puede extender
    //Es como una clase pero sin implementar los metodos, solo hay firmae y propiedades
    interface Volador {
        volar: () => string;
    }

    class Pato implements Volador {

        public volar(){
            return '';
        }
    }

})();