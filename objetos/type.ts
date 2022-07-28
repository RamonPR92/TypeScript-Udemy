(() =>{

    //Podemos definir tipos personalizados y 
    //asi construir objetos que cumplan con la estructura del tipo
    type Hero = {
        name:string;
        age:number;
        powers:string[];
        getName: () =>string
    }

    let superman: Hero ={
        name: 'Superman',
        age: 30,
        powers: ['correr', 'dormir'],
        getName(){
            return this.name;
        }
    }

    let batman: Hero ={
        name: 'Batman',
        age: 35,
        powers: ['volar', 'dinero'],
        getName(){
            return this.name;
        }
    }


})();