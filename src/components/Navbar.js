import * as React from "react";
import { BaseIcon } from "./Svg";

const mainmenu = [
  {
    icon: <BaseIcon />,
  },
];

export default function Navbar(props) {
  return (
    <div className="w-full h-14 bg-neutral-830">
      <div className="w-14 h-14 bg-neutral-850">
        {mainmenu.map((menu, index) => (
          <MainMenuItem icon={menu.icon} key={index} />
        ))}
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
