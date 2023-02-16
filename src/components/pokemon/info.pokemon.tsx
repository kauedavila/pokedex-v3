import Image from "next/image";
import PokeBallCss from "./pokeball.pokemon";
import TypesPokemon from "./types.pokemon";

const InfoPokemon = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <PokeBallCss />
        {pokemon.sprites &&
          (pokemon?.sprites?.other?.["official-artwork"]?.front_default ? (
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="absolute"
            />
          ) : (
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="absolute"
            />
          ))}
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-800 capitalize">
          {pokemon.name}
        </h1>
        <h1 className="text-sm text-gray-500 capitalize">Nº {pokemon.id}</h1>
      </div>

      <TypesPokemon types={pokemon.types} />
    </div>
  );
};

export default InfoPokemon;
