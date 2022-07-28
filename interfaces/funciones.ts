(() => {

    //En una interfaz se puede definir la firma de un metodo
    //Toda aquel variable que quiera ser del tipo de esta interfaz, debera de implementar el metodo segun la firma
    interface Operacion {
        (a: number, b: number): number;
    }

    const sumar:Operacion = (a: number, b: number) =>{
        return a + b;
    }

    const restar:Operacion = (a: number, b: number) =>{
        return a - b;
    }

    const multiplicar:Operacion = (a: number, b: number) =>{
        return a * b;
    }

    const dividir:Operacion = (a: number, b: number) =>{
        return a / b;
    }

    console.log(sumar(1, 5));
    console.log(restar(1, 5));
    console.log(multiplicar(1, 5));
    console.log(dividir(1, 5));

})();