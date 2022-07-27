(() =>{

    //El parametro rest un argumento opcional y variable
    //Es muy parecido a los args en java y a los arguemntos variables args...
    //Y van siempre al ultimo de todos los parametros
    const fullName = (firstName:string, ...args : string[]):string =>{
        let result:string = '';

        args.forEach(element => {
            result += `${element} `;
        });
        return `${firstName} ${result}`;
    };

    console.log(fullName('Ramon', 'Perez', 'Rodriguez', 'De la O'));

})();