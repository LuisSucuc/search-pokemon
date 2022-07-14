import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import QuantityPokemon from './components/QuantityPokemon';
import BuyPokemon from './components/BuyPokemon';
import store from './redux/store';
import { Provider } from 'react-redux'
import SearcherPokemon from './components/buscador/SearcherPokemon';
import ResultsPokemon from './components/buscador/ResultsPokemon';

function App() {
  return (
    <Provider store={store}>
      <div className="App containter">
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{maxWidth: '90%'}}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={require("./images/Charizard2.png")} alt="pokemon" className='card-img'/>
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className="card-title h3 text-center">
                      <QuantityPokemon/>
                      <BuyPokemon/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <SearcherPokemon/>
          </div>
          <div className="col-12">
            <ResultsPokemon/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
