import axios from "axios";

export const getPokeList = async (limit: number) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  return data.results;
};
