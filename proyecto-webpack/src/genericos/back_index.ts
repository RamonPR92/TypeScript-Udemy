// import {Hero} from './classes/Hero';
// import {Hero, Hero1, Hero2, Hero3} from './classes/Hero';
// import {Hero as SuperHero} from './classes/Hero';
import * as SuperHeroClases from '../data/Hero';
import powers from '../data/powers';

import { genericFunction, genericFunctionArrow, printObject } from "../genericos/intro";


console.log('Hola Mundo!!!!');

const hero: SuperHeroClases.Hero = new SuperHeroClases.Hero('Superman', 1, 30);
console.log(hero);
console.log(powers);

printObject(123);
printObject(true);
printObject('Ramon');
printObject(new Date());

console.log(genericFunction<number>(4234).toFixed(4));
console.log(genericFunction<string>('4234').length);
console.log(genericFunction(new Date()).getHours());

console.log(genericFunctionArrow(['ramon', 'perez']).join('-'));


const superman:Volador = {
    velocidadParaVolar: 500,
    volar() {
        console.log(`Estoy volando a ${this.velocidadParaVolar} km/h`)
    },
}


const Aquaman:Acuatico = {
    tiempoAguantandoLaRespiracion: 30,
    nadar() {
        console.log(`Estoy nadanndo y aguanto respirando ${this.tiempoAguantandoLaRespiracion} minutos`)
    },
}
genericFunctionArrow<Volador>(superman).volar();
genericFunctionArrow<Acuatico>(Aquaman).nadar();




