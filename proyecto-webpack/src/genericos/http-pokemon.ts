
import axios from "axios";
import { Pokemon } from "./pokemon";

const http_pokemon_url = 'https://pokeapi.co/api/v2/pokemon';

//Axios cualquier metodo con async devuelve una promesa y la promesa se puede tipar
export const getPokemon = async(pokemonId: number):Promise<Pokemon> =>{
    
    //La respuesta de axios se debe de tipar
    const resp  = await axios.get<Pokemon>(`${http_pokemon_url}/${pokemonId}`);
    return resp.data;
}

