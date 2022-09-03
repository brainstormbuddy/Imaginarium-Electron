import * as React from "react";

export default function SecondaryAvatar(props) {
  const { start, end, middle, url, name, brand } = props;
  return (
    <div className="relative flex flex-col gap-2 items-center justify-center">
      <div className="w-full">
        <div className="w-full grid grid-cols-2">
          {start && (
            <>
              <div className="w-full h-4 border-gray-500"></div>
              <div className="w-full h-4 border-gray-500 border-t-2 border-l-2 rounded-tl"></div>
            </>
          )}
          {end && (
            <>
              <div className="w-full h-4 border-gray-500 border-t-2 border-r-2 rounded-tr"></div>
              <div className="w-full h-4 border-gray-500"></div>
            </>
          )}
          {middle && (
            <>
              <div className="w-full h-4 border-gray-500 border-t-2"></div>
              <div className="w-full h-4 border-gray-500 border-t-2 border-l-2"></div>
            </>
          )}
          {start || end || middle ? (
            ""
          ) : (
            <>
              <div className="w-full h-4"></div>
              <div className="w-full h-4"></div>
            </>
          )}
        </div>
        <div className="relative w-full flex justify-center">
          <div
            className={`w-10 h-10 2xl:w-20 2xl:h-20 self-center flex items-center justify-center bg-[#2B2B2B] ${
              url === "" && "ring-[1px] ring-gray-600"
            } rounded-full overflow-hidden ${
              brand ? "ring ring-purple-500" : ""
            }`}
          >
            {url ? (
              <>
                <img
                  src={url}
                  alt="avatar"
                  className="hidden 2xl:block"
                  width={80}
                  height={80}
                />
                <img
                  src={url}
                  alt="avatar"
                  className="block 2xl:hidden"
                  width={40}
                  height={40}
                />
              </>
            ) : (
              <span className=" uppercase text-center text-[10px] font-bold tracking-[.15rem]">
                {name.split(" ")[0][0] + name.split(" ")[1][0]}
              </span>
            )}
          </div>

          {brand && (
            <div className="absolute -top-1 p-[1px] bg-purple-500 uppercase text-white text-center text-[8px] font-bold tracking-[.1em] rounded">
              {brand}
            </div>
          )}
        </div>
      </div>

      <span className="absolute top-full pt-2 uppercase text-white text-center text-[9px] font-bold leading-3 tracking-[.21rem]">
        {name}
      </span>
    </div>
  );
}
