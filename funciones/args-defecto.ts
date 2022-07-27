(() =>{

    //El parametro con valor por defecto se utiliza en upper, y ya no tendriamos problemas de poner un parametro obligatorio despues de un opcional
    //Tener parametros por defecto no tiene sentido ya que se pierde el dinamismo
    const fullName = (firstName:string, lastName?:string, upper:boolean = true ):string =>{

        if(upper){
            return `${firstName.toUpperCase()} ${lastName?.toUpperCase()}`;
        }else{
            return `${firstName} ${lastName}`;
        }
    }

    console.log(fullName('Ramon'));

})();