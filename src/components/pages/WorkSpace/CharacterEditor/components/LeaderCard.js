import * as React from "react";

export default function LeaderCard(props) {
  const { bg, avatar, name, laurel, direction } = props;
  return (
    <div
      className="relative flex p-4"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "100% 228px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`absolute bottom-[69px] ${
          direction === "left" ? "left-8" : "right-8"
        }`}
      >
        {laurel}
      </div>
      <div
        className={`absolute bottom-8 ${
          direction === "left" ? "left-[72px]" : "right-[65px]"
        }`}
      >
        {avatar}
      </div>
      <div
        className={`absolute uppercase text-[9px] font-bold leading-3 tracking-[.21rem] bottom-4 ${
          direction === "left" ? "left-[90px]" : "right-[80px]"
        }`}
      >
        {name}
      </div>
    </div>
  );
}
