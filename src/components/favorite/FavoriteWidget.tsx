'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const FavoriteWidget = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));

    return (
        <>
            {
                !favoritePokemons.length
                    ? ( <NoFavorites /> )
                    : ( <PokemonGrid pokemons={favoritePokemons} /> )
            }
        </>
    );
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    );
}
