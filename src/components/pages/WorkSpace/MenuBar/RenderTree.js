import { ChevronDown, ChevronRight } from "../../../Svg"

export const RenderTree = (props) => {
    const { node, onToggle, getChildNodes } = props;
    return (
        <>

            {node.depth === 0 ?
                <div className=" cursor-pointer rounded-md text-sm w-full hover:bg-[#404040]  select-none" onClick={() => onToggle(node)} >
                    <div className="flex flex-row text-white items-center gap-3 px-1 py-2 ml-2 ">
                        {
                            node.isOpen ? <ChevronDown /> : <ChevronRight />
                        }
                        {node.name}
                    </div>
                </div>
                :
                <div className="flex flex-row text-sm items-center gap-3 px-1 py-2 ml-7 hover:bg-[#404040] text-white  rounded-md justify-between select-none">
                    {node.name}
                    <div className="flex gap-1">
                        {
                            node.avatar.map((icon, index) => (
                                <div className="avatar placeholder" key={index}>
                                    <div className="bg-[#2b2b2b] text-white rounded-full w-5 ">
                                        <img src={icon} alt="avatar" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {
                node.isOpen && getChildNodes(node).map((children, index) => (
                    <RenderTree {...props} node={children} key={index} />
                ))
            }
        </>
    )
}