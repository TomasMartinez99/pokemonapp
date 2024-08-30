
import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const initialState : PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
    '2': { id: '2', name: 'venusar' },
    '3': { id: '3', name: 'pikachu' },
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    
    toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state[id] ) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
    
  }
});

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer