import React, { useState } from "react";
import { MenuData } from "./MenuData";
import { RenderTree } from "./RenderTree";
import { values } from "lodash";
// import {Toogle} from ".Toogle"
import { FileMenu, FileText, MsgSquare, ChevronUp } from "../../../Svg";
import SlidingPane from "react-sliding-pane";
import InputText from "../../../core/common/InputText";
import "react-sliding-pane/dist/react-sliding-pane.css";

export const MenuBar = () => {
  const [isPaneOpen, setPaneOpen] = useState(false);

  const [treeItem, setTreeItem] = useState(MenuData);
  const getRootNodes = () => {
    const treeItems = treeItem;
    return values(treeItems).filter((node) => node.depth === 0);
  };
  const getChildNodes = (node) => {
    const treeItems = treeItem;
    if (!node.children) return [];
    return node.children.map((path) => treeItems[path]);
  };

  const onToggle = (node) => {
    const treeItems = treeItem;
    treeItems[node.path].isOpen = !node.isOpen;
    setTreeItem({ ...treeItems });
  };
  return (
    <div className="w-[20rem] bg-[#161616] min-h-[calc(100vh-112px)] relative select-none ">
      <div className="flex flex-col items-start pl-3 pt-3 pr-2 pb-3 border-b border-gray-600">
        <label className="flex flex-row justify-center items-center gap-4 px-1 py-2">
          <FileMenu />
          <p className="text-xs text-white font-normal">PROJECT STRUCTURE</p>
        </label>
      </div>
      <div className="flex flex-col items-start pl-3 pt-3 pr-2 pb-3">
        <label className="flex flex-row items-center gap-3 px-1 py-2">
          <FileText />
          <p className="text-sm text-white">Title Page</p>
        </label>
      </div>
      <div className="flex flex-col pl-2 pr-2 w-full max-h-[calc(100vh-270px)] overflow-y-auto">
        {getRootNodes(treeItem).map((node, index) => (
          <RenderTree
            node={node}
            getChildNodes={getChildNodes}
            onToggle={onToggle}
            key={index}
          />
        ))}
      </div>
      {!isPaneOpen && (
        <div className="absolute bottom-0 w-full select-none">
          <div className="border-[1px] border-[#262626]" />
          <div className="pl-3 pr-2 pb-1 h-8 flex items-center justify-between">
            <MsgSquare />
            <label
              className="flex flex-row items-center gap-3 px-1 py-2"
              onClick={() => {
                setPaneOpen(!isPaneOpen);
              }}
            >
              <p className="text-xs text-white font-normal">
                COLLABORATION CHAT
              </p>
              <div className="badge badge-secondary text-xs">999</div>
            </label>
          </div>
        </div>
      )}
      {isPaneOpen && (
        <div className="absolute bottom-[0px] w-full overflow-scroll">
          <div className="flex flex-col overflow-scroll">
            <div className="pl-3 pr-2 pb-1 h-8 bg-[#161616] flex items-center justify-between">
              <MsgSquare />
              <label
                className="flex flex-row items-center gap-3 px-1 py-2"
                onClick={() => {
                  setPaneOpen(!isPaneOpen);
                }}
              >
                <p className="text-xs text-white font-normal">
                  COLLABORATION CHAT
                </p>
                <div className="badge badge-secondary text-xs">999</div>
              </label>
              {console.log(isPaneOpen)}
            </div>
            <div className=" bg-[#161616] pb-2 h-60 overflow-scroll">
              <div className="message">
                <div className="bg-[#262626] w-full">
                  <p className="mb-2 text-white text-center text-base">
                    11/28/2021
                  </p>
                </div>
                <div className="pl-2 pr-2 pb-4 flex justify-start">
                  <img
                    className="rounded-[32px] w-8 h-8"
                    src="assets/img/mw.png"
                    alt="mw"
                  ></img>
                  <div className="pl-2 w-44">
                    <p className="uppercase text-white font-bold text-xs tracking-widest">
                      marget
                    </p>
                    <div className="bg-[#2B2B2B]">
                      <p className="text-white text-xs">
                        Waht we will do next? Test Message with 2 rows
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-2 mb-2 flex justify-end">
                  <div className="w-40">
                    <p className="uppercase text-white font-bold text-xs tracking-widest">
                      julia
                    </p>
                    <div className="bg-cyan-900">
                      <p className="text-white text-xs">
                        Waht we will do next? Test Message with 2 rows
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message">
                <div className="bg-[#262626] w-full">
                  <p className="mb-2 text-white text-center text-base">
                    11/30/2021
                  </p>
                </div>
                <div className="pl-2 pr-2 pb-4 flex justify-start">
                  <img
                    className="rounded-[32px] w-8 h-8"
                    src="assets/img/dashboard/Avatar16.png"
                    alt="william"
                  ></img>
                  <div className="pl-2 w-44">
                    <p className="uppercase text-white font-bold text-xs tracking-widest">
                      william
                    </p>
                    <div className="bg-[#2B2B2B]">
                      <p className="text-white text-xs">
                        Waht we will do next? Test Message with 2 rows
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-2 flex justify-end">
                  <div className="w-40">
                    <p className="uppercase text-white font-bold text-xs tracking-widest">
                      julia
                    </p>
                    <div className="bg-cyan-900">
                      <p className="text-white text-xs">
                        Waht we will do next? Test Message with 2 rows
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#262626]" />
            <div className="relative bottom-0 flex flex-row h-12 justify-center items-center">
              <input
                className="w-3/4 h-8 bg-transparent ring-offset-0 border-[#161616] focus:border-[#161616] focus:outline-none placeholder-[#5F5F5F] rounded-md text-[12px] text-white"
                name="message"
                placeholder="Write message"
                //   value={initScene}
                //   onChange={(e) => setInitScene(e.target.value)}
                type="text"
              />
              <img
                className="w-8 h-8"
                src="assets/svg/Button.svg"
                alt="sender"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
