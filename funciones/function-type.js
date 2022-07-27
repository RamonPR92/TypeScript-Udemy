"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => ` Hola ${name}`;
    const saveTheWorld = (name) => `Salvando al mundo`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Ramon'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
