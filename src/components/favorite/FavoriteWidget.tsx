'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "@/pokemons";

export default function FavoriteWidget() {
    const favoritePokemons = useAppSelector( state => Object.values(state.pokemons) );

    return <PokemonGrid pokemons={ favoritePokemons } />;
}
