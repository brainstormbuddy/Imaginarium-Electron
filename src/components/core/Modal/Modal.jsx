import * as React from "react";

export default function modal(props) {
  const { title, handleClose, body, footer } = props;
  return (
    <div className="z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
      <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full border-b border-[#161616]">
        <label className="font-extrabold ml-[24px] text-[9px] text-white leading-5 tracking-[.21em] uppercase">
          {title}
        </label>
        <button className="mr-[10px] hover:bg-[#4F4F4F]" onClick={handleClose}>
          <img
            className="w-[20px] h-[20px]"
            src="assets/img/dashboard/close.png"
            alt="close"
          />
        </button>
      </div>

      <div className="edit-modal-content border-b border-[#161616]">{body}</div>

      <div className="edit-modal-footer px-6 py-4 border-b border-[#161616]">
        {footer}
      </div>
    </div>
  );
}
