import { CardHome } from "@/components/home/card.home";
import { PaginationHome } from "@/components/home/pagination.home";
import { getPokeList } from "@/services/home/getPokeList";
import Head from "next/head";
import Link from "next/link";
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

      <div
        className="page-container flex flex-col items-center justify-center gap-5 bg-white bg-opacity-50
      border-2 border-gray-200 rounded-lg shadow-lg p-5"
      >
        <div className="flex flex-wrap justify-center items-center gap-5">
          {pokemons
            .filter((_, k) => k >= offset - 1 && k < offset + pagelimit)
            .map((pokemon, k) => (
              <Link href={`/pokemon/${k + offset}`} key={k}>
                <CardHome
                  key={pokemon.name}
                  pokemon={pokemon}
                  id={k + offset}
                />
              </Link>
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
