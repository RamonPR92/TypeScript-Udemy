(() => {

    //Las interfaces pueden componerse de mas interfaces
    interface Cliente {
        name: string,
        age: number,
        address: Address, 
        getFullAddress(id: string):string 
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const cliente: Cliente = {
        name: 'Ramon',
        age: 30,
        address: {
            id: 2,
            zip: '45234',
            city: 'Zapopan'
        },
        getFullAddress(id) {
            return `Es el id: ${id}`;
        },
    }

    const funcion = (cliente: Cliente) =>{
        cliente.getFullAddress('09d');
    }

})();