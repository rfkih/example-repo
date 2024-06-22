"use client"; // This marks the component as a client component
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState, useEffect  } from 'react';


const Navbar = () => {
  const [selected, setSelected] = useState('');



  const handleLinkClick = (id: string) => {
  
    setSelected(id); // Update selected state to the clicked i
  };

  const getLinkClassName = (linkId: string) => {
    if (selected === linkId) {
      return "font-bold text-gray-50 flexCenter cursor-pointer pb-1.5 ";
    } else {
      console.log("bold bukan disini")
      return "regular-16 hover:font-bold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ";
    }
  };


  useEffect(() => {
    setSelected('home')
   
  }, []);


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/bmwlogo.png" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link id={link.key}  onClick={() => handleLinkClick(link.key)} href={link.href}  key={link.key} className={getLinkClassName(link.key)}>
              {link.label}
            </Link>
          ))}
      </ul>
      <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
      </div>
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar
