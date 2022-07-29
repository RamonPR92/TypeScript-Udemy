import { getPokemon } from './genericos/http-pokemon';

getPokemon(4)
    .then(result => console.log(`El id del pokemon es ${result.id} y el nombre es ${result.name}`))
    .catch(error => console.error(error))
    .finally(() => console.log('Finaliza el get pokemon'));
