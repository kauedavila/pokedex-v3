import CardPokemon from "@/components/pokemon/card.pokemon";
import Head from "next/head";

export const PokePage = ({ id }: { id: string }) => {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokédex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CardPokemon id={id} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = Array.from(Array(898), (_, i) => i + 1).map((i) => ({
    params: { id: [i.toString()] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const id = params.id;

  return {
    props: {
      id,
    },
  };
};

export default PokePage;
