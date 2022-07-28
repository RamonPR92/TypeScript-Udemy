"use strict";
(() => {
    class Pato {
        volar() {
            return '';
        }
    }
})();
(() => {
    const cliente = {
        name: 'Ramon',
        age: 30,
        address: {
            id: 2,
            zip: '45234',
            city: 'Zapopan'
        },
        getFullAddress(id) {
            return `Es el id: ${id}`;
        },
    };
    const funcion = (cliente) => {
        cliente.getFullAddress('09d');
    };
})();
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const restar = (a, b) => {
        return a - b;
    };
    const multiplicar = (a, b) => {
        return a * b;
    };
    const dividir = (a, b) => {
        return a / b;
    };
    console.log(sumar(1, 5));
    console.log(restar(1, 5));
    console.log(multiplicar(1, 5));
    console.log(dividir(1, 5));
})();
//# sourceMappingURL=main.js.map