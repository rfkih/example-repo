import Link from "next/link";


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

    const handleItemClick = (href: string) => {

        setGeneration(href);
      };

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <ul className="hidden h-full gap-12 lg:flex">
          {items.map((item) => (
            <h4 onClick={() => handleItemClick(item.href)} key={item.key} className=" px-5 py-3 regular-16 text-gray-50 flex justify-start rounded-sm cursor-pointer transition-all  hover:font-bold">
              {item.label}
            </h4>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation
