import React, { useState } from "react";
import { MenuData } from "./MenuData";
import { RenderTree } from "./RenderTree"
import { values } from "lodash";
import { FileMenu, FileText, MsgSquare, ChevronUp } from "../../../Svg"


export const MenuBar = () => {
    const [treeItem, setTreeItem] = useState(
        MenuData
    );
    const getRootNodes = () => {
        const treeItems = treeItem;
        return values(treeItems).filter(node => node.depth === 0);
    }
    const getChildNodes = (node) => {
        const treeItems = treeItem;
        if (!node.children) return [];
        return node.children.map(path => treeItems[path]);
    }

    const onToggle = (node) => {
        const treeItems = treeItem;
        treeItems[node.path].isOpen = !node.isOpen;
        setTreeItem({ ...treeItems });
    }
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
            <div className="flex flex-col pl-2 pr-2 w-full max-h-[calc(100vh-270px)] overflow-y-auto" >
                {
                    getRootNodes(treeItem).map((node, index) => (
                        <RenderTree node={node} getChildNodes={getChildNodes} onToggle={onToggle} key={index} />
                    ))
                }
            </div>
            <div className="absolute bottom-0 w-full select-none">
                <div className="border-[1px] border-[#262626]" />
                <div className="pl-3 pr-2 pb-1 flex items-center justify-between">
                    <label className="flex flex-row items-center gap-3 px-1 py-2">
                        <MsgSquare />
                        <p className="text-xs text-white font-normal">COLLABORATION CHAT</p>
                        <div className="badge badge-secondary text-xs">999</div>
                    </label>
                    <ChevronUp />
                </div>
            </div>
        </div>
    )
}