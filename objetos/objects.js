"use strict";
(() => {
    //Objetos clasicos en java script
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    //Se puede definir un objeto y cada propiedad con su tipo
    //Ademas de propiedades opcionales con el signo ?
    //Tambien se pueden agregar metodos a un objeto
    let superman = {
        name: 'Ramon',
        age: 30,
        powers: ['Programar'],
        getNombre() {
            return this.name;
        }
    };
})();
