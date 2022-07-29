namespace Validations{

    //un namespace puede agrupar clases y funciones
    export const validateText = (text: string):boolean => {
        return text.length > 3;
    }

    export const validateDate = (fecha: Date): boolean => {
        return fecha.getMonth() == 8;
    }
}

console.log(Validations.validateText('Ramon'));
console.log(Validations.validateDate(new Date(2022, 7, 28)));
