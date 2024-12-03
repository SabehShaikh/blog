// components/Navbar.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-background/50 sticky backdrop:blur border-b">
      <div className="text-xl font-bold">
        <Link href="/">SabehBlog</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Button variant="outline">Button</Button>

    </nav>
  );
};

export default Navbar;
