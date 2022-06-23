import * as React from "react";

import { BrandIcon, RecentIcon, MovieIcon, SeriesIcon, BooksIcon } from "./Svg";

const mainmenu = [
  {
    icon: <BrandIcon />,
  },
];

const menus = [
  {
    label: "Recent",
    icon: <RecentIcon />,
  },
  {
    label: "Movie",
    icon: <MovieIcon />,
  },
  {
    label: "Series",
    icon: <SeriesIcon />,
  },
  {
    label: "Books",
    icon: <BooksIcon />,
  },
];

export default function SubNavbar(props) {
  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <div className="w-14 h-14 bg-neutral-850">
        {mainmenu.map((menu, index) => (
          <MainMenuItem icon={menu.icon} key={index} />
        ))}
      </div>
      <div>
        {menus.map((menu, index) => (
          <MenuItem label={menu.label} icon={menu.icon} key={index} />
        ))}
      </div>
    </div>
  );
}

export const MainMenuItem = (props) => {
  return (
    <div className="!inline-flex flex flex-row p-4 h-full hover:bg-neutral-900 hover:cursor-pointer">
      {props.icon}
    </div>
  );
};

export const MenuItem = (props) => {
  return (
    <div className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-neutral-900 hover:cursor-pointer active:bg-gray-700 focus:outline-none focus:ring focus:ring-violet-300 ">
      {props.icon}
      <span className="text-white">{props.label}</span>
    </div>
  );
};
