import axios from "axios";

export const getPokeInfo = async (id: number) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return data;
};
