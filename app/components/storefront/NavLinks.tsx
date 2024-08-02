import Link from "next/link";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 1, name: "All Products", href: "/producrs/all" },
  { id: 1, name: "Men", href: "/products/men" },
  { id: 1, name: "Women", href: "/products/women" },
];

export function Navlinks() {
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
      {navLinks.map((item) => (
        <Link href={item.href} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
