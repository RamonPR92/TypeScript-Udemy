"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => ` Hola ${name}`;
    const saveTheWorld = () => `Salvando al mundo`;
    //Es de tipo funcion pero con cualquier firma seria aceptada
    // let myFunction: Function;
    //Es una variable de tipo funcion pero debe de cumplir con la firma
    let myFunctionNumer;
    myFunctionNumer = addNumbers;
    console.log(myFunctionNumer(1, 2));
    let myFunctionString;
    myFunctionString = greet;
    console.log(myFunctionString('Ramon'));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
