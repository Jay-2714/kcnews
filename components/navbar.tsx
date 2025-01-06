import React from "react";

const navItems: {name: string, href: string}[] = [
  {name: "HOME", href: "/"},
  {name: "AWARDS", href: "/"},
  {name: "ABOUT", href: "/"},
  {name: "CONTACT", href: "/"},
];

const Navbar = () => {
  return (
    <nav className="flex bg-yellow-300 w-full">
        <div className="flex flex-row items-center justify-center w-full bg-red-800 mt-1 text-white">
            <ul className="flex flex-row ">
              {navItems.map((item,index) => (
                <a className="hover:bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-500 hover:text-black p-2 md:p-3  active:bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-500 active:text-black" key={index} href={item.href}><li key={index} className="p-2">{item.name}</li></a>
              ),)}
            </ul>
        </div>

    </nav>  

);
}
export default Navbar;