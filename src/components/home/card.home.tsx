import { Pokemon } from "@/pages";
import Image from "next/image";

export const CardHome = ({ pokemon, id }: { pokemon: Pokemon; id: number }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-300 rounded-lg shadow-lg
      hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 cursor-pointer hover:bg-slate-200
      bg-opacity-50 border-2 border-gray-200
      aspect-square sm:h-40 sm:w-40 
      h-32 w-32
      truncate overflow-hidden hover:overflow-visible"
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={pokemon.name}
        width={100}
        height={100}
      />

      <div className="flex sm:flex-col justify-center items-center flex-row gap-2">
        <h1
          className="sm:text-2xl text-base
       font-bold text-gray-800 capitalize"
        >
          {pokemon.name}
        </h1>
        <h1 className="text-sm text-gray-500 font-semibold capitalize">
          Nº {id}
        </h1>
      </div>
    </div>
  );
};
