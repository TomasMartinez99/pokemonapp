import FavoriteWidget from "@/components/favorite/favoriteWidget";

export const metadata = {
    title: 'Favoritos',
    description: 'Lorem ipsum'
}

export default function PokemonsPage() {
    return (
        <div className="flex flex-col items-center">
            <span className="text-5xl my-2"> Pókemons <small className="text-blue-500">Global State</small> </span>  
            <FavoriteWidget />
        </div>  
    );
}
