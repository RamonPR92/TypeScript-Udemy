(() => {

    //Hay tres formas de declarar un string
    const batman: string = 'Batman';
    const superman: string = "Superman's";
    const gatubela: string = `Gatubela`;

    console.log(batman.toUpperCase());
    console.log(superman.toLowerCase());
    console.log(gatubela.repeat(2));

    //Si no hay caracter en la posicion 10 no se ejecuta la funcion toLowerCase y se imprime el mensaje despues del ||
    //Esto se logra con el signo ? 
    console.log(batman[10]?.toLowerCase() || 'No hay letra en la posicion 10');

})();