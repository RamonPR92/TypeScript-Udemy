"use strict";
(() => {
    //Se pueden asignar valores directos al enum, si no se asigna comienza de 0, 1, 2 ...
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
