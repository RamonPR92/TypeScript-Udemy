"use strict";
(() => {
    //El signo ? despues del parametro indica que es opcional
    //Si solo llamamos el metodo con el parametro obligatorio el ultimo parametro sera unsigned
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Ramon'));
})();
