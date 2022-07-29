(() =>{

    //Se pueden asignar valores directos al enum, si no se asigna comienza de 0, 1, 2 ...
    enum Volumen{
        BAJO = 5,
        MEDIO = 10,
        ALTO = 15
    };

    let currentAudio: Volumen = Volumen.BAJO;
    console.log(currentAudio);
})();