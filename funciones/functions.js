"use strict";
(() => {
    //En las constantes se puede inferir los tipos y no indicar el tipo
    const hero = 'flash';
    //Se indica el tipo de devolucion del metodo
    function returnName() {
        return hero;
    }
    //En una funcion de flecha se debe de indicar tambien el tipo de retorno
    const activate = () => {
        return 'activate';
    };
    //El tipo de la funcion activate es Function
    console.log(typeof activate);
})();
