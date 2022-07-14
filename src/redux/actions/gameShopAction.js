export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMON';



export const buy_pokemon_action = (quantity) => {
    return {
        type: BUY_POKEMON,
        payload: quantity
    }
}


export const return_pokemon_action = (quantity) => {
    return {
        type: RETURN_POKEMON,
        payload: quantity
    }
}
