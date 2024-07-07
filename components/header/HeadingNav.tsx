import {
  FaCar,
  FaPlane,
  FaBed,
  FaTaxi,
  FaBasketballBall,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type NavItemsType = {
  name: string;
  href: string;
  icon: IconType;
};
const navItems: NavItemsType[] = [
  {
    name: "Stays",
    href: "#",
    icon: FaBed,
  },
  {
    name: "Flights",
    href: "#",
    icon: FaPlane,
  },
  {
    name: "Car Rentals",
    href: "#",
    icon: FaCar,
  },
  {
    name: "Attractions",
    href: "#",
    icon: FaBasketballBall,
  },
  {
    name: "Airport Taxis",
    href: "#",
    icon: FaTaxi,
  },
];
function HeadingNav() {
  return (
    <div className="flex items-center pb-8 pt-2 ">
      {navItems.map((item) => (
        <div
          key={item.name}
          className=" hover:cursor-pointer relative flex items-center gap-x-2 rounded-full p-3 text-sm  hover:bg-gray-100/10 hover:ring-1 hover:ring-white/90"
        >
          <item.icon className="h-6 w-6 text-white/90" aria-hidden="true" />
          <div className="">
            <a
              href={item.href}
              className="block whitespace-nowrap text-white/80"
            >
              {item.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeadingNav;
