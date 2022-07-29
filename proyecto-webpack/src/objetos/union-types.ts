(() =>{

    type Hero = {
        name:string;
        age:number;
        powers:string[];
        getName?: () =>string
    }

    //tipados multiples
    let custom: (string | Hero) = 'Ramon';
    console.log(custom);

    custom = {
        name: 'Ramon',
        age: 30,
        powers: ['trabajar']
    }

    console.log(custom);
    console.log(custom);
})();