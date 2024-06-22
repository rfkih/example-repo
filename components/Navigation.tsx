import Link from "next/link";
import { useState, useEffect  } from 'react';

type NavigationProps = {
    href: string;
    key: string;
    label: string;
}

interface NavigationItems {
    items: NavigationProps[];
    setGeneration: any;
  }

const Navigation = ({items, setGeneration}: NavigationItems) => {
  const [selected, setSelected] = useState('');

    const handleItemClick = (href: string) => {

        setGeneration(href);
        setSelected(href);
      };


      const getLinkClassName = (linkId: string) => {
        if (selected === linkId) {
          return "font-bold  px-3 py-3 text-gray-50 flexCenter cursor-pointer  ";
        } else {
          console.log("bold bukan disini")
          return "px-3 py-3 regular-16 text-gray-50 flex justify-start rounded-sm cursor-pointer  hover:font-bold";
        }
      };

      useEffect(() => {
        setSelected('3')
       
      }, []);

  return (
    <nav className=" z-20  xl:w-1/2">
      <ul className="hidden h-full gap-12 lg:flex">
          {items.map((item) => (
            <h4 onClick={() => handleItemClick(item.href)} key={item.key} className={getLinkClassName(item.key)}>
              {item.label}
            </h4>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation
