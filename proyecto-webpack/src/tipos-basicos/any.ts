(() =>{

    //Nunca usar el tipo any, 
    //Any va ser el tipo por defecto cuando no se especifique un tipo
    //Cuando un tipo es any nos estamos devolviendo a los tipados debiles, que seria cualquier tipo
    let avenger:any = 123;
    let power;

    avenger = 'superman';
    console.log(( avenger as string).toUpperCase());//Para castear y obtener la ayuda de 

    avenger = 2132.2312;
    console.log(<number>avenger.toFixed(2));//Para castear y obtener la ayuda

})();