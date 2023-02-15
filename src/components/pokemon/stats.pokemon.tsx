const StatsPokemon = (props: any) => {
  const { pokemon } = props;

  return (
    <section
      className="
        flex flex-col gap-y-5 w-full
        bg-slate-300 bg-opacity-50 border-2 border-gray-200 rounded-lg shadow-lg p-5"
    >
      <h1 className="text-slate-700 font-bold text-3xl self-center">
        Base Stats
      </h1>
      <div className="flex flex-col w-full gap-y-5 ">
        {pokemon?.stats?.map((_: any, k: any) => (
          <div
            key={k}
            className="grid grid-cols-[100px,1fr] w-full justify-start gap-x-5 items-center text-slate-800 font-bold capitalize"
          >
            <div> {pokemon.stats[k].stat.name}</div>
            <div className="flex justify-start">
              <div className="flex w-full items-center h-5 rounded bg-white ">
                <div
                  style={{
                    width: (pokemon.stats[k].base_stat / 200) * 100 + "%",
                  }}
                  className="flex h-full rounded bg-green-300 text-white justify-center items-center"
                >
                  {pokemon.stats[k].base_stat + "/300"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsPokemon;
