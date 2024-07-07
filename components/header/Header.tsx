"use client";

import { Popover, Transition } from "@headlessui/react";
import Heading from "./Heading";
import HeadingNav from "./HeadingNav";
import { useState } from "react";
import HeadingTitle from "./HeadingTitle";
import { trending_data } from "@/data/trending";
import SearchForm from "../SearchForm";

// const callsToAction = [
//   { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
//   { name: "Contact Support", href: "#", icon: PhoneIcon },
// ];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="bg-[#013B94] relative">
      <nav
        className="mx-auto flex-col max-w-[70rem] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Heading />
        <div className="lg:w-2/5">
          <HeadingNav />
          <HeadingTitle />
        </div>
      </nav>
      <section className="-bottom-8 w-full mx-auto absolute z-20 ">
        <SearchForm />
      </section>
    </header>
  );
}

export default Header;
