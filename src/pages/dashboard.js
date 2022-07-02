import * as React from "react";

// core components
import Table from "../components/core/table/Table";

function Dashboard() {
  const [showModal, setShowModal] = React.useState(true);
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="p-8 bg-[#0A0A0A] w-full h-[calc(100vh-112px)] overflow-auto">
      <Table />

      {showModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto">
              <div className="rounded-[4px] border border-[#161616]">
                {/*body*/}
                <div className="relative flex-auto">
                  <img
                    className="rounded-[4px] border-b border-[#161616]"
                    src="assets/img/modal.png"
                    alt="modal"
                  />
                </div>

                {/*footer*/}
                <div className="flex h-16 justify-between items-center bg-[#2B2B2B] rounded-[4px]">
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setChecked(!checked);
                    }}
                  >
                    <input
                      type="checkbox"
                      className="ml-7 checkbox bg-[0E0E0E] border border-[#404040] w-[14px] h-[14px] rounded-[4px]"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label
                      className="ml-4 text-[10px] leading-5 text-white cursor-pointer"
                      onClick={() => {
                        setChecked(!checked);
                      }}
                    >
                      Show welcome screen on launch
                    </label>
                  </div>
                  <button
                    className="m-6 w-[100px] h-8  tracking-[.21em] leading-5 font-extrabold text-white text-[10px] border border-[#404040] hover:bg-[#404040] rounded-md"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Dashboard;
