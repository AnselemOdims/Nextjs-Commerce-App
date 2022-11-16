import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 px-10 shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Shopper
        </Link>
        <div className="flex gap-3">
          <Link href="/cart">Cart</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
