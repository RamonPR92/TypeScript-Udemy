"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    class AvengerTwo {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} - ${this.team}`;
        }
        static getAvg() {
            return this.name;
        }
    }
    AvengerTwo.avgAge = 35;
    const antMan = new Avenger('AntMan', 'Rojo', 'Hormiga');
    console.log(antMan);
    const antManDos = new AvengerTwo('AntManDos', 'azul', 'Hormiga');
    console.log(antManDos);
    console.log(AvengerTwo.getAvg());
})();
(() => {
    class Device {
        constructor(name, port) {
            this.name = name;
            this.port = port;
        }
        get getNombre() {
            return this.name;
        }
    }
    class Lector extends Device {
        constructor(name, port, version) {
            super(name, port);
            this.version = version;
        }
        leer() {
            console.log(`Leyendo ... ${this.version}`);
        }
    }
    class Monedero extends Device {
        aceptarMoneda() {
            console.log('AceptarMoneda');
        }
    }
    const lectorVenta = new Lector('Lector', 'ttyS01', '0002');
    lectorVenta.leer();
    const monedero = new Monedero('Monedero', 'ttyS01');
    monedero.aceptarMoneda();
    const funcion = (dispositivo) => {
        console.log(dispositivo.getNombre);
    };
    funcion(lectorVenta);
    funcion(monedero);
})();
(() => {
    class Figura {
        constructor(ancho, alto) {
            this.ancho = ancho;
            this.alto = alto;
        }
        get getAncho() {
            return this.ancho;
        }
        get getAlto() {
            return this.alto;
        }
        set setAncho(ancho) {
            this.ancho = ancho;
        }
        set setAlto(alto) {
            this.alto = alto;
        }
    }
    const figura = new Figura(5, 10);
    console.log(figura.getAlto);
    figura.setAlto = 45;
    console.log(figura.getAlto);
})();
(() => {
    class Father {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Son extends Father {
        constructor(name, realName, esPlaneado) {
            super(name, realName);
            this.esPlaneado = esPlaneado;
        }
        getFullName() {
            return `${this.name} - ${this.realName} - ${this.esPlaneado}`;
        }
    }
    const hijo = new Son('Ramon', 'Locote', false);
    console.log(hijo.getFullName());
    const padre = new Father('Padre', 'Locote');
})();
(() => {
    class Heroe {
        constructor() { }
        static getHeroe() {
            if (!this.heroe) {
                this.heroe = new Heroe();
            }
            return this.heroe;
        }
    }
    const aquaman = Heroe.getHeroe();
    console.log(aquaman);
})();
//# sourceMappingURL=main.js.map