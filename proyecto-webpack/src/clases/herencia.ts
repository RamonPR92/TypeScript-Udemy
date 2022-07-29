(() =>{

    /*
        Los modificadores de acceso
        Nada o sin modificador - es como si se usara el public
        Public - es accesible desde dentro y fuera de la clase
        Protected - es accesible dentro de la clase y dentro de las clases que estan heredando
        Private - es accesible solo dentro de la clase 
    */

    class Father {
        
        constructor(
            protected name:string,
            protected realName:string
        ){}
        
        public getFullName(){
            return `${this.name} - ${this.realName}`;
        }
    } 

    class Son extends Father{
        
        constructor(
            //Para pasar las propiedades heredadas por el constructor ya no se utlizara el modificador de acceso
            name:string,
            realName:string,
            private esPlaneado:boolean
        ){
            //Se pasan por el super las propiedades del constructor padre
            super(name, realName);
        }

        public getFullName(): string {
            return `${this.name} - ${this.realName} - ${this.esPlaneado}`
        }
    }

    const hijo = new Son('Ramon', 'Locote', false);
    console.log(hijo.getFullName());

    const padre = new Father('Padre', 'Locote');
})();