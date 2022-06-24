import * as React from "react";

import {
  BrandIcon,
  RecentIcon,
  MovieIcon,
  SeriesIcon,
  BooksIcon,
  DetailIcon,
} from "./Svg";

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

const recentSubMenus = [
  {
    label: "New Project",
    icon: <RecentIcon />,
  },
];

export default function SubNavbar(props) {
  const [currentSubNavMenu, setCurrentSubNavMenu] = React.useState(0);

  const handleSubNavMenuClick = React.useCallback((index) => {
    setCurrentSubNavMenu(index);
  }, []);

  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <div className="w-14 h-14 bg-neutral-850">
        {mainmenu.map((menu, index) => (
          <MainMenuItem
            icon={menu.icon}
            key={index}
            handleClick={handleSubNavMenuClick}
          />
        ))}
      </div>
      <div className="flex items-center w-full justify-between">
        <div className>
          {currentSubNavMenu === 0 &&
            menus.map((menu, index) => (
              <MenuItem
                label={menu.label}
                icon={menu.icon}
                key={index}
                handleClick={handleSubNavMenuClick}
              />
            ))}

          {currentSubNavMenu === 1 &&
            recentSubMenus.map((menu, index) => {
              <MenuItem label={menu.label} icon={menu.icon} key={index} />;
            })}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 roundedborder-neutral-800 bg-neutral-830"
          />
          <label className="mr-5 text-[9px] font-extrabold text-white">
            Show finished projects
          </label>

          <select
            className="mr-7 px w-28 h-8 border border-neutral-800 bg-neutral-830 font-extrabold text-center text-white text-[9px] leading-5 focus:ring-gray-300 rounded-md"
            name="projects"
            id="projects"
          >
            <option
              className="w-28 h-8 font-extrabold text-center text-white text-[9px] hover:bg-neutral-830"
              value="1"
            >
              ALL PROJECTS
            </option>
            <option value="2">YOUR PROJECTS</option>
            <option value="3">SHARED WITH YOU</option>
          </select>

          <button className="mr-7 rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5">
            NEW PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}

export const MainMenuItem = (props) => {
  return (
    <div
      className="!inline-flex flex flex-row p-4 h-full hover:bg-neutral-900 hover:cursor-pointer"
      onClick={() => props.handleClick(0)}
    >
      {props.icon}
    </div>
  );
};

export const MenuItem = (props) => {
  return (
    <div
      className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-neutral-900 hover:cursor-pointer active:bg-gray-700 focus:outline-none focus:ring focus:ring-violet-300 "
      onClick={() => props.handleClick(props.key)}
    >
      {props.icon}
      <span className="text-white">{props.label}</span>
    </div>
  );
};
