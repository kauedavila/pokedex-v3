const TypesPokemon = ({
  types,
}: {
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}) => {
  return (
    <div>
      {types && (
        <div className="flex flex-row gap-2">
          {types.map((_, k: number) => (
            <div
              key={k}
              className={`
                        flex items-center justify-center
                        text-xs font-bold text-white capitalize
                        rounded-full
                        w-16 h-6
                        ${
                          types[k].type.name === "grass"
                            ? "bg-green-500"
                            : types[k].type.name === "fire"
                            ? "bg-red-500"
                            : types[k].type.name === "water"
                            ? "bg-blue-500"
                            : types[k].type.name === "bug"
                            ? "bg-green-700"
                            : types[k].type.name === "normal"
                            ? "bg-gray-500"
                            : types[k].type.name === "poison"
                            ? "bg-purple-500"
                            : types[k].type.name === "electric"
                            ? "bg-yellow-500"
                            : types[k].type.name === "ground"
                            ? "bg-yellow-700"
                            : types[k].type.name === "fairy"
                            ? "bg-pink-500"
                            : types[k].type.name === "fighting"
                            ? "bg-red-700"
                            : types[k].type.name === "psychic"
                            ? "bg-pink-700"
                            : types[k].type.name === "rock"
                            ? "bg-yellow-800"
                            : types[k].type.name === "ghost"
                            ? "bg-purple-700"
                            : types[k].type.name === "ice"
                            ? "bg-blue-200"
                            : types[k].type.name === "dragon"
                            ? "bg-red-200"
                            : types[k].type.name === "dark"
                            ? "bg-gray-700"
                            : types[k].type.name === "steel"
                            ? "bg-gray-300"
                            : "bg-gray-500"
                        }
                  
                        
                  `}
            >
              <h1 className="text-sm font-bold text-slate-800 capitalize">
                {types[k].type.name}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypesPokemon;
