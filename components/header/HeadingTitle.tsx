"use client";

import { usePathname } from "next/navigation";

function HeadingTitle() {
  const pathname = usePathname();
  {
    return pathname === "/" ? (
      <div className="text-white pt-1">
        <h1 className="text-5xl font-semibold ">
          Attractions, activities and experiences
        </h1>
        <h3 className="py-6 font-thin">
          Discover new attractions and experiences to match your interests and
          travel style
        </h3>
      </div>
    ) : (
      <></>
    );
  }
}

export default HeadingTitle;
