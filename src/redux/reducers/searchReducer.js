import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/searcherAction";

const initialState = {
    loading: false,
    pokemon: [],
    error : null
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: null
            }
         case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        
    
        default:
            return state;
    }
}

export default search