import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
        flex items-center justify-start
        bg-slate-300 bg-opacity-50 border-b-8 border-gray-300 mb-5 p-2"
    >
      <Link href="/">
        <h1 className="text-3xl font-bold text-slate-700">Pokedex</h1>
      </Link>
    </header>
  );
};

export default Header;
