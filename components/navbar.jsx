import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row-reverse space-x-8 space-x-reverse items-center h-20 m-5">
      <Link href="/">Home</Link>
      <Link href="#gallery">Photography</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
