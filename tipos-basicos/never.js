"use strict";
(() => {
    //Never se utilza para indicar que una funcion puede tener como retorno un error o una excepcion
    //Es como el throws en java 
    //Si todo sale bien retorna un boolean y si sale mal lanza una excepcion
    const error = (message) => {
        if (message.length > 0) {
            return true;
        }
        else {
            throw new Error(message);
        }
    };
    console.log(error(''));
})();
