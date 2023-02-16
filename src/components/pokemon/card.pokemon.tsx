import { getPokeInfo } from "@/services/home/getPokeInfo";
import { useEffect, useState } from "react";
import InfoPokemon from "./info.pokemon";
import StatsPokemon from "./stats.pokemon";

const CardPokemon = ({ id }: { id: string }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokeInfo(parseInt(id));
      setPokemon(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 page-container bg-white bg-opacity-50 border-2 border-gray-200 rounded-lg shadow-lg p-5">
      <InfoPokemon pokemon={pokemon} />
      <StatsPokemon pokemon={pokemon} />
    </div>
  );
};

export default CardPokemon;
