import { CardHome } from "@/components/home/card.home";
import { PaginationHome } from "@/components/home/pagination.home";
import { Header } from "@/layouts/header";
import { getPokeList } from "@/services/home/getPokeList";
import Head from "next/head";
import { useState } from "react";

const limit = 898;

export interface Pokemon {
  name: string;
}

export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  const [offset, setOffset] = useState(1);
  const pagelimit = 20;
  const maxpages = Math.ceil(898 / pagelimit);
  const page = Math.ceil(offset / pagelimit);

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokédex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div
        className="flex flex-col items-center justify-center gap-5 bg-white
      border-2 border-gray-200 rounded-lg shadow-lg p-5"
      >
        <div className="flex flex-wrap justify-center items-center gap-5">
          {pokemons
            .filter((_, k) => k >= offset - 1 && k < offset + pagelimit)
            .map((pokemon, k) => (
              <CardHome key={pokemon.name} pokemon={pokemon} id={k + offset} />
            ))}
        </div>
        <PaginationHome
          offset={offset}
          setOffset={setOffset}
          pagelimit={pagelimit}
          page={page}
          maxpages={maxpages}
        />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const pokemons = await getPokeList(limit);

  return {
    props: {
      pokemons,
    },
  };
};
