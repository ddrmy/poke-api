import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

export default async function PokemonsTable() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const pokemons = (await data.json()) as { results: Pokemon[] };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold mb-8">Pokemons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {pokemons.results.map((pokemons, index) => (
          <Link
            href={`/dashboard/${pokemons.name}`}
            key={index}
            className="border border-gray-300 shadow-md rounded-lg p-4 text-center"
          >
            <p className="text-lg font-semibold capitalize">{pokemons.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
