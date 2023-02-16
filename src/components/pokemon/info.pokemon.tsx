import Image from "next/image";
import PokeBallCss from "./pokeball.pokemon";

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

      {pokemon.types && (
        <div className="flex flex-row gap-2">
          {pokemon.types.map((_: any, k: any) => (
            <div
              key={k}
              className={`
                        flex items-center justify-center
                        text-xs font-bold text-white capitalize
                        rounded-full
                        w-16 h-6
                        ${
                          pokemon.types[k].type.name === "grass"
                            ? "bg-green-500"
                            : pokemon.types[k].type.name === "fire"
                            ? "bg-red-500"
                            : pokemon.types[k].type.name === "water"
                            ? "bg-blue-500"
                            : pokemon.types[k].type.name === "bug"
                            ? "bg-green-700"
                            : pokemon.types[k].type.name === "normal"
                            ? "bg-gray-500"
                            : pokemon.types[k].type.name === "poison"
                            ? "bg-purple-500"
                            : pokemon.types[k].type.name === "electric"
                            ? "bg-yellow-500"
                            : pokemon.types[k].type.name === "ground"
                            ? "bg-yellow-700"
                            : pokemon.types[k].type.name === "fairy"
                            ? "bg-pink-500"
                            : pokemon.types[k].type.name === "fighting"
                            ? "bg-red-700"
                            : pokemon.types[k].type.name === "psychic"
                            ? "bg-pink-700"
                            : pokemon.types[k].type.name === "rock"
                            ? "bg-yellow-800"
                            : pokemon.types[k].type.name === "ghost"
                            ? "bg-purple-700"
                            : pokemon.types[k].type.name === "ice"
                            ? "bg-blue-200"
                            : pokemon.types[k].type.name === "dragon"
                            ? "bg-red-200"
                            : pokemon.types[k].type.name === "dark"
                            ? "bg-gray-700"
                            : pokemon.types[k].type.name === "steel"
                            ? "bg-gray-300"
                            : "bg-gray-500"
                        }
                  
                        
                  `}
            >
              <h1 className="text-sm font-bold text-slate-800 capitalize">
                {pokemon.types[k].type.name}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoPokemon;
