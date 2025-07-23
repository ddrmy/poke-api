import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-6 flex flex-col gap-4 fixed">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <Link href="/dashboard" className="hover:underline">
        🏠 Dashboard
      </Link>
      <Link href="/dashboard/pikachu" className="hover:underline">
        ⚡ Pikachu
      </Link>
      {/* outros links, pode até mapear dinamicamente depois */}
    </aside>
  );
}
