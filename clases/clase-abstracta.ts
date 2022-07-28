(() =>{


    //Es una clase que no se puede instanciar y que solo sirve para que hereden de ella
    //Ademas puede funcionar para tener tipos mas generales
    abstract class Device{
        constructor(
            private name:string,
            private port:string
        ){}

        get getNombre(){
            return this.name;
        }
    }

    class Lector extends Device{

        constructor(
            name:string,
            port:string, 
            private version:string){
                super(name, port);
            }

        public leer(){
            console.log(`Leyendo ... ${this.version}`);
        }
    }

    class Monedero extends Device{
    
        public aceptarMoneda(){
            console.log('AceptarMoneda');
        }
    }

    const lectorVenta = new Lector('Lector', 'ttyS01', '0002');
    lectorVenta.leer();
    const monedero = new Monedero('Monedero', 'ttyS01');
    monedero.aceptarMoneda();

    //Acepta como parametro cualquier objeto que sea un Device o que herede de Device
    const funcion = (dispositivo:Device)=>{
        console.log(dispositivo.getNombre);
    };

    funcion(lectorVenta);
    funcion(monedero);

})();