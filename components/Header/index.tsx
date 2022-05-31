import Link from "next/link";

const Header = () => {
  return (
    <section className="h-16 bg-surface">
      <header className="w-full h-full max-w-7xl ml-auto mr-auto px-6 flex items-center">
        <Link href="/">
          <a>
            <h2 className="text-2xl font-bold">Articles</h2>
          </a>
        </Link>
      </header>
    </section>
  );
};

export default Header;
