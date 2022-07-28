(() =>{

    class Avenger{

        private name: string;
        private team: string;
        public realName?: string;//Opcional
        public static avgAge:number = 35;//Propiedad estatica

        constructor(name:string, team: string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    class AvengerTwo{

        //private team: string;
        //public realName?: string;//Opcional
        public static avgAge:number = 35;//Propiedad estatica

        //Forma corta y mas usada por los frameworks
        constructor(
            private name:string, 
            private team: string, 
            public realName?:string){}    

        private bio(){
            return `${this.name} - ${this.team}`;
        }

        public static getAvg(){
            return this.name;//Accede al nombre de la clase AvengerTwo
        }
        
    }

    const antMan: Avenger = new Avenger('AntMan', 'Rojo', 'Hormiga');
    console.log(antMan);

    const antManDos: AvengerTwo = new AvengerTwo('AntManDos', 'azul', 'Hormiga');
    console.log(antManDos);
    console.log(AvengerTwo.getAvg());

})();