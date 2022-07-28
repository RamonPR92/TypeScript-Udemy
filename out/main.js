"use strict";
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName.toUpperCase()} ${lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()}`;
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    console.log(fullName('Ramon'));
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}  ${lastName}`;
    };
    console.log(fullName('Ramon', 'Perez'));
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Ramon'));
})();
(() => {
    const fullName = (firstName, ...args) => {
        let result = '';
        args.forEach(element => {
            result += `${element} `;
        });
        return `${firstName} ${result}`;
    };
    console.log(fullName('Ramon', 'Perez', 'Rodriguez', 'De la O'));
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => ` Hola ${name}`;
    const saveTheWorld = () => `Salvando al mundo`;
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
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activate = () => {
        return 'activate';
    };
    console.log(typeof activate);
})();
const mensaje = 'Hola mundo';
console.log(mensaje);
const hero = { name: 'ironman', edad: 34 };
hero.edad = 50;
console.log(hero.edad);
(() => {
    let avenger = 123;
    let power;
    avenger = 'superman';
    console.log(avenger.toUpperCase());
    avenger = 2132.2312;
    console.log(avenger.toFixed(2));
})();
(() => {
    const varios = [1, 2, 3, 4, 5, 6, 7, '4'];
    varios.push(true);
    console.log(varios);
    const numbers = [1, 2, 3, 34, 45];
    numbers.push(32);
    console.log(numbers);
})();
(() => {
    let esBatman = true;
    console.log(esBatman);
})();
(() => {
    let Volumen;
    (function (Volumen) {
        Volumen[Volumen["BAJO"] = 5] = "BAJO";
        Volumen[Volumen["MEDIO"] = 10] = "MEDIO";
        Volumen[Volumen["ALTO"] = 15] = "ALTO";
    })(Volumen || (Volumen = {}));
    ;
    let currentAudio = Volumen.BAJO;
    console.log(currentAudio);
})();
(() => {
    const error = (message) => {
        if (message.length > 0) {
            return true;
        }
        else {
            throw new Error(message);
        }
    };
    console.log(error(''));
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
let villians = 20;
let avengers = 10;
if (villians >= avengers) {
    console.log('Valio barriga');
}
else {
    console.log('Estamos salvados');
}
(() => {
    var _a;
    const batman = 'Batman';
    const superman = "Superman's";
    const gatubela = `Gatubela`;
    console.log(batman.toUpperCase());
    console.log(superman.toLowerCase());
    console.log(gatubela.repeat(2));
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'No hay letra en la posicion 10');
})();
(() => {
    const hero = ['doctor strange', 100];
})();
(() => {
    function callBatman() {
    }
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map