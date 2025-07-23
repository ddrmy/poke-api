import { notFound } from "next/navigation";
import { PokemonsDetails } from "@/types/pokemon";
import Image from "next/image";

type Props = {
  params: {
    pokemon: string;
  };
};

export default async function PokemonPage({ params }: Props) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );

  if (!res.ok) return notFound();

  const pokemon = (await res.json()) as PokemonsDetails;

  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={150}
        height={150}
        className="border rounded-xl shadow-xl mb-4 hover:shadow-2xl transition-shadow duration-300"
      />
      <div className="text-lg border p-4 rounded-lg ">
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
      </div>
    </div>
  );
}
