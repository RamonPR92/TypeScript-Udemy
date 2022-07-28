(() =>{

    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => ` Hola ${name}`;
    const saveTheWorld = () => `Salvando al mundo`;

    //Es de tipo funcion pero con cualquier firma seria aceptada
    // let myFunction: Function;

    //Es una variable de tipo funcion pero debe de cumplir con la firma
    let myFunctionNumer: (x:number, y:number) => number;

    myFunctionNumer = addNumbers;
    console.log(myFunctionNumer(1, 2));

    let myFunctionString: (s:string) => string;
    myFunctionString = greet;
    console.log(myFunctionString('Ramon'));

    let myFunction: () => string;
    myFunction = saveTheWorld;
    console.log(myFunction());
    


})();