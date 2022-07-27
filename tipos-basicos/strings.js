"use strict";
(() => {
    var _a;
    //Hay tres formas de declarar un string
    const batman = 'Batman';
    const superman = "Superman's";
    const gatubela = `Gatubela`;
    console.log(batman.toUpperCase());
    console.log(superman.toLowerCase());
    console.log(gatubela.repeat(2));
    //Si no hay caracter en la posicion 10 no se ejecuta la funcion toLowerCase y se imprime el mensaje despues del ||
    //Esto se logra con el signo ? 
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'No hay letra en la posicion 10');
})();
