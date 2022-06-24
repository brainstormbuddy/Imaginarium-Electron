import * as React from "react";
import { BaseIcon, SearchIcon, BellIcon } from "./Svg";

const mainmenu = [
  {
    icon: <BaseIcon />,
  },
];

export default function Navbar(props) {
  return (
    <div className="w-full h-14 bg-neutral-830">
      <div className="flex justify-between">
        <div className="w-14 h-14 bg-neutral-850">
          {mainmenu.map((menu, index) => (
            <MainMenuItem icon={menu.icon} key={index} />
          ))}
        </div>
        <div className="flex flex-end items-center">
          <SearchIcon className="mr-7 hover:cursor-pointer" />
          <BellIcon className="mr-7 hover:cursor-pointer" />
          <img
            className="mr-4 rounded-[32px]"
            src="assets/img/dashboard/Avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export const MainMenuItem = (props) => {
  return (
    <div className="!inline-flex flex flex-row p-4 h-full hover:bg-neutral-800 hover:cursor-pointer">
      {props.icon}
    </div>
  );
};
