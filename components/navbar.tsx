import React from "react";
import Link from "next/link";

const navItems: {name: string, href: string}[] = [
  {name: "HOME", href: "/"},
  {name: "AWARDS", href: "/awards"},
  {name: "ABOUT", href: "/about"},
  {name: "CONTACT", href: "/contact"},
];

const Navbar = () => {
  return (
    <nav className="flex bg-yellow-300 w-full">
        <div className="flex flex-row items-center justify-center w-full bg-red-800 mt-1 text-white">
            <ul className="flex flex-row">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="hover:bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-500 hover:text-black p-2 md:p-3 active:bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-500 active:text-black transition-colors"
                >
                  <li className="p-2">{item.name}</li>
                </Link>
              ))}
            </ul>
        </div>
    </nav>  
  );
}

export default Navbar;