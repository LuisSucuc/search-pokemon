import React from 'react'
import { useDispatch } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

const BuyPokemon = ( ) => {
  
  const dispatch = useDispatch();


  return (
    <div>
        <button className="btn btn-dark btn-sm mb-2"
        onClick={() => dispatch(buy_pokemon_action(1))}>Compra Pokemon</button>
        <br></br>
        <button className="btn btn-dark btn-sm"
        onClick={() => dispatch(return_pokemon_action(1))}>Devolver Pokemon</button>
    </div>
  )
}


export default BuyPokemon

/*
import React from 'react'
import { connect } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

const BuyPokemon = ({ buy_pokemon_action, return_pokemon_action }) => {
  return (
    <div>
      <button className="btn btn-dark btn-sm mb-2"
        onClick={() => buy_pokemon_action(1)}>Compra Pokemon</button>
      <br></br>
      <button className="btn btn-dark btn-sm"
        onClick={() => return_pokemon_action(1)}>Devolver Pokemon</button>
    </div>
  )
}

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action

}

export default connect(null, mapDispatchToProps)(BuyPokemon)*/