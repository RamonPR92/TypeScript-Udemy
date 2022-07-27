(() =>{

    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => ` Hola ${name}`;
    const saveTheWorld = (name:string) => `Salvando al mundo`;

    let myFunction: Function;

    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Ramon'));

    myFunction = saveTheWorld;
    console.log(myFunction());
    


})();