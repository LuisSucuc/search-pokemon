import React from 'react'
import { useSelector } from 'react-redux'

const QuantityPokemon = () => {
  const game_shop = useSelector((state) => state.game_shop)
  return (
    <>
      Unidades {game_shop.pokemon}
    </>
  )
}


export default QuantityPokemon

/* Usando Clases se utiliza el mapSatateToProps 
const mapStateToProps = ( state ) => {
  return {
    game_shop: state.game_shop,
  }
}

export default connect(mapStateToProps)(QuantityPokemon)

// Recibiendo en la función

const QuantityPokemon = ({ game_shop }) => {


*/