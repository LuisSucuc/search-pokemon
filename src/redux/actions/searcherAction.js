import axios from "axios"

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

export const fetchPokemonRequest = () => { 
    return {
        type: FETCH_POKEMON_REQUEST
    }
 }

 export const fetchPokemonSuccess = (pokemonData) => { 
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemonData
    }
 }


 export const fetchPokemonFailure = (error) => { 
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
 }

 const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then( response => {
            dispatch(fetchPokemonSuccess([response.data]))
        })
        .catch(error => {
            dispatch(fetchPokemonFailure("No se encontró el pokemon"))
        })
    }
 }

 export default fetchPokemon