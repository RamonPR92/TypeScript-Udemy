"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (fecha) => {
        return fecha.getMonth() == 8;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Ramon'));
console.log(Validations.validateDate(new Date(2022, 7, 28)));
//# sourceMappingURL=main.js.map