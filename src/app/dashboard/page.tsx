import PokemonsTable from "./PokemonsTable";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PokemonsTable />
    </main>
  );
}
