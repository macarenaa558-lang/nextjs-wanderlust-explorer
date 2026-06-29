import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Wanderlust
      </Link>

      <div className="flex gap-4">
        <Link href="/experiences">Experiencias</Link>
        <Link href="/favorites">Favoritos</Link>
        <Link href="/profile">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;