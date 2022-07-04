import * as React from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../../pages/context/ProjectContext";

import { DetailIcon, DropDownIcon } from "../../Svg";

import Checkbox from "../common/Checkbox";
import { projects } from "../data/projects";

export default function Table(props) {
  const { selected, setSelected } = React.useContext(ProjectContext);
  const [showExportModal, setshowExportModal] = React.useState(false);
  const [projectType, setProjectType] = React.useState(
    "Microsoft Word (*.docx)"
  );
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showLeaveModal, setShowLeaveModal] = React.useState(false);
  const [showExport, setShowExport] = React.useState(false);
  const [checkedDelete, setCheckedDelete] = React.useState(false);
  const [checkedLeave, setCheckedLeave] = React.useState(false);
  const [id, setId] = React.useState();

  React.useEffect(() => setSelected("Recent"), [setSelected]);

  return (
    <div className="w-full h-full scrollbar-hide md:scrollbar-default">
      <TableHeader>
        <TableHeaderRow>
          <TableCol className="w-1/4 ">PROJECT NAME</TableCol>
          <TableCol className="w-1/15">PROJECT TYPE</TableCol>
          <TableCol className="w-1/15">CONTENT</TableCol>
          <TableCol className="w-[13%]">LASTOPENED</TableCol>
          <TableCol className="w-[11%]">AUTHOR</TableCol>
          <TableCol className="w-1/10">COLLABORATORS</TableCol>
        </TableHeaderRow>
      </TableHeader>
      {selected === "Recent" ? (
        <>
          {projects.map((project, index) => (
            <div className="collapse !overflow-visible" key={index}>
              <input type="checkbox" className="!w-[88%] !p-0" />
              <div className="collapse-title text-xl font-medium p-0">
                <TableBodyRow no={project.project_id}>
                  <TableCol className="flex flex-row items-center px-4 w-1/4">
                    <img
                      src={project.project_image}
                      alt={project.project_id}
                      width={40}
                      height={40}
                    />
                    <span className="ml-4 text-[18px] leading-6 text-white">
                      {project.project_name}
                    </span>
                  </TableCol>
                  <TableCol className="flex flex-row items-center w-1/15">
                    {project.project_type_icon}
                    <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
                      {project.project_type}
                    </span>
                  </TableCol>
                  <TableCol className="flex flex-col w-1/15">
                    <span className="text-white text-[12px]">
                      {project.project_content}
                    </span>
                    {`${project.project_type}` === "Movie" ? (
                      <Progressbar width={project.project_progress}>
                        {project.project_progress}
                      </Progressbar>
                    ) : null}
                  </TableCol>
                  <TableCol className="flex flex-row w-[13%]">
                    <span className="text-[14px] leading-5 text-white">
                      {project.project_opened}
                    </span>
                  </TableCol>
                  <TableCol className="flex flex-row w-[10%] text-[14px] leading-5">
                    <span
                      className={
                        `${project.project_author}` === "You"
                          ? "text-white"
                          : "text-[#1DAEFF]"
                      }
                    >
                      {project.project_author}
                    </span>
                  </TableCol>
                  <TableCol className="flex flex-row flex-wrap w-[10%]">
                    {project.project_collaborators.map(
                      (project_collaborator, index) => (
                        <img
                          key={index}
                          className="rounded-[12px] mr-2"
                          src={project_collaborator.src}
                          alt={project_collaborator.alt}
                          width={20}
                          height={20}
                        />
                      )
                    )}
                  </TableCol>
                  <TableCol className="flex flex-row justify-evenly w-[12%]">
                    <button className="ring-1 ring-gray-500 w-20 h-8 text-[10px] text-white rounded leading-5 tracking-[.21em] hover:bg-[#404040] outline-none">
                      OPEN
                    </button>

                    <div className="dropdown dropdown-end h-[32px]">
                      <button tabIndex="0">
                        <DetailIcon className="hover:bg-[#404040] cursor-pointer" />
                      </button>
                      {`${project.project_own}` === "true" ? (
                        <ul
                          tabIndex="0"
                          className="z-20 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-32 mt-0 rounded-[4px] cursor-pointer"
                        >
                          <Link
                            className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer"
                            to="/edit-project"
                          >
                            <img
                              className="p-0 w-5 h-5 cursor-pointer"
                              src="assets/img/dashboard/edit.png"
                              alt="edit"
                            />
                            <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                              EDIT
                            </label>
                          </Link>
                          <button
                            className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer"
                            onClick={() => {
                              setshowExportModal(true);
                            }}
                          >
                            <img
                              className="p-0 w-5 h-5 cursor-pointer"
                              src="assets/img/dashboard/export.png"
                              alt="export"
                            />
                            <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                              EXPORT
                            </label>
                          </button>
                          <button className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer">
                            <img
                              className="p-0 w-5 h-5 !active:bg-[#5D5D5D] cursor-pointer"
                              src="assets/img/dashboard/share.png"
                              alt="share"
                            />
                            <label className="!active:bg-[#5D5D5D] p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                              SHARE OPTIONS
                            </label>
                          </button>
                          <button
                            className="flex flex-row px-2 py-1.5 h-8 hover:bg-[#5D5D5D] cursor-pointer"
                            onClick={() => {
                              setShowDeleteModal(true);
                              setId(`${project.project_id}`);
                            }}
                          >
                            <img
                              className="p-0 w-5 h-5 cursor-pointer"
                              src="assets/img/dashboard/trash-2.png"
                              alt="trash"
                            />
                            <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                              DELETE
                            </label>
                          </button>
                        </ul>
                      ) : (
                        <ul
                          tabIndex="0"
                          className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-8 mt-0 rounded-[4px]"
                        >
                          <button
                            className="flex flex-row px-2 py-1.5 h-8 hover:bg-[#5D5D5D]"
                            onClick={() => {
                              setShowLeaveModal(true);
                            }}
                          >
                            <img
                              className="p-0 w-5 h-5"
                              src="assets/img/dashboard/log-out.png"
                              alt="leave"
                            />
                            <label className="p-0 ml-2 text-[9px] font-extrabold text-[#DD5E5E] leading-5 tracking-[.21em]">
                              LEAVE PROJECT
                            </label>
                          </button>
                        </ul>
                      )}
                    </div>
                  </TableCol>
                </TableBodyRow>
              </div>
              <div className="collapse-content">
                <ProjectDetail />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {projects
            .filter((project, index) => project.project_type === selected)
            .map((project, index) => (
              <div className="collapse !overflow-visible" key={index}>
                <input type="checkbox" className="!w-[88%] !p-0" />
                <div className="collapse-title text-xl font-medium p-0">
                  <TableBodyRow no={project.project_id}>
                    <TableCol className="flex flex-row items-center px-4 w-1/4">
                      <img
                        src={project.project_image}
                        alt={project.project_id}
                        width={40}
                        height={40}
                      />
                      <span className="ml-4 text-[18px] leading-6 text-white">
                        {project.project_name}
                      </span>
                    </TableCol>
                    <TableCol className="flex flex-row items-center w-1/15">
                      {project.project_type_icon}
                      <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
                        {project.project_type}
                      </span>
                    </TableCol>
                    <TableCol className="flex flex-col w-1/15">
                      <span className="text-white text-[12px]">
                        {project.project_content}
                      </span>
                      {`${project.project_type}` === "Movie" ? (
                        <Progressbar width={project.project_progress}>
                          {project.project_progress}
                        </Progressbar>
                      ) : null}
                    </TableCol>
                    <TableCol className="flex flex-row w-[13%]">
                      <span className="text-[14px] leading-5 text-white">
                        {project.project_opened}
                      </span>
                    </TableCol>
                    <TableCol className="flex flex-row w-[10%] text-[14px] leading-5">
                      <span
                        className={
                          `${project.project_author}` === "You"
                            ? "text-white"
                            : "text-[#1DAEFF]"
                        }
                      >
                        {project.project_author}
                      </span>
                    </TableCol>
                    <TableCol className="flex flex-row flex-wrap w-[10%]">
                      {project.project_collaborators.map(
                        (project_collaborator, index) => (
                          <img
                            key={index}
                            className="rounded-[12px] mr-2"
                            src={project_collaborator.src}
                            alt={project_collaborator.alt}
                            width={20}
                            height={20}
                          />
                        )
                      )}
                    </TableCol>
                    <TableCol className="flex flex-row justify-evenly w-[12%]">
                      <button className="ring-1 ring-gray-500 w-20 h-8 text-[10px] text-white rounded leading-5 tracking-[.21em] hover:bg-[#404040] outline-none">
                        OPEN
                      </button>

                      <div className="dropdown dropdown-end h-[32px]">
                        <button tabIndex="0">
                          <DetailIcon className="hover:bg-[#404040] cursor-pointer" />
                        </button>
                        {`${project.project_own}` === "true" ? (
                          <ul
                            tabIndex="0"
                            className="z-20 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-32 mt-0 rounded-[4px] cursor-pointer"
                          >
                            <Link
                              className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer"
                              to="/edit-project"
                            >
                              <img
                                className="p-0 w-5 h-5 cursor-pointer"
                                src="assets/img/dashboard/edit.png"
                                alt="edit"
                              />
                              <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                                EDIT
                              </label>
                            </Link>
                            <button
                              className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer"
                              onClick={() => {
                                setshowExportModal(true);
                              }}
                            >
                              <img
                                className="p-0 w-5 h-5 cursor-pointer"
                                src="assets/img/dashboard/export.png"
                                alt="export"
                              />
                              <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                                EXPORT
                              </label>
                            </button>
                            <button className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer">
                              <img
                                className="p-0 w-5 h-5 !active:bg-[#5D5D5D] cursor-pointer"
                                src="assets/img/dashboard/share.png"
                                alt="share"
                              />
                              <label className="!active:bg-[#5D5D5D] p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                                SHARE OPTIONS
                              </label>
                            </button>
                            <button
                              className="flex flex-row px-2 py-1.5 h-8 hover:bg-[#5D5D5D] cursor-pointer"
                              onClick={() => {
                                setShowDeleteModal(true);
                                setId(`${project.project_id}`);
                              }}
                            >
                              <img
                                className="p-0 w-5 h-5 cursor-pointer"
                                src="assets/img/dashboard/trash-2.png"
                                alt="trash"
                              />
                              <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em] cursor-pointer">
                                DELETE
                              </label>
                            </button>
                          </ul>
                        ) : (
                          <ul
                            tabIndex="0"
                            className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-8 mt-0 rounded-[4px]"
                          >
                            <button
                              className="flex flex-row px-2 py-1.5 h-8 hover:bg-[#5D5D5D]"
                              onClick={() => {
                                setShowLeaveModal(true);
                              }}
                            >
                              <img
                                className="p-0 w-5 h-5"
                                src="assets/img/dashboard/log-out.png"
                                alt="leave"
                              />
                              <label className="p-0 ml-2 text-[9px] font-extrabold text-[#DD5E5E] leading-5 tracking-[.21em]">
                                LEAVE PROJECT
                              </label>
                            </button>
                          </ul>
                        )}
                      </div>
                    </TableCol>
                  </TableBodyRow>
                </div>
                <div className="collapse-content">
                  <ProjectDetail />
                </div>
              </div>
            ))}
        </>
      )}
      ;
      {showExportModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                EXPORT PROJECT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setshowExportModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <div className="flex flex-col">
                <div className="save">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    WHERE TO SAVE
                  </label>
                  <div className="mt-1 flex justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 rounded-[4px]">
                    <label className="ml-2 text-[12px] leading-5 text-white">
                      Documents
                    </label>
                    <input type="file" id="upload-file" className="" hidden />
                    <label className="cursor-pointer" htmlFor="upload-file">
                      <img
                        className="mr-1.5"
                        src="assets/img/dashboard/folder.png"
                        alt="folder"
                      />
                    </label>
                  </div>
                  <label className="flex mt-3 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    PROJECT FORMAT
                  </label>

                  <div className="flex w-full dropdown">
                    <div
                      tabIndex="0"
                      className="w-full h-8 bg-[#161616] border border-[#404040] rounded-[4px] flex items-center justify-between"
                      onClick={() => {
                        setShowExport(true);
                      }}
                      name="projects"
                      id="projects"
                    >
                      <label className="ml-2 text-center text-white text-[12px] leading-5">
                        {projectType}
                      </label>

                      <button className="mr-1.5">
                        <DropDownIcon />
                      </button>
                    </div>

                    {showExport ? (
                      <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-[40px] bg-[#161616] w-full h-[56px] rounded-[4px]"
                      >
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Microsoft Word Document (*.docx)");
                            setShowExport(false);
                          }}
                        >
                          Microsoft Word Document (*.docx)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("HTML Document (*.html)");
                            setShowExport(false);
                          }}
                        >
                          HTML Document (*.html)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Rich Text Format (*.rtf)");
                            setShowExport(false);
                          }}
                        >
                          Rich Text Format (*.rtf)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Plain Text (*.txt)");
                            setShowExport(false);
                          }}
                        >
                          Plain Text (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Text with Layout (*.txt)");
                            setShowExport(false);
                          }}
                        >
                          Text with Layout (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Avid Script-Based Editing (*.txt)");
                            setShowExport(false);
                          }}
                        >
                          Avid Script-Based Editing (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Tab Delimited Dialogue (*.txt)");
                            setShowExport(false);
                          }}
                        >
                          Tab Delimited Dialogue (*.txt)
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setshowExportModal(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </>
      ) : null}
      {showDeleteModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                DELETE PROJECT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowDeleteModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <label className="text-white text-[12px] leading-5">
                This action can not be undone.
              </label>
              <div className="mt-3">
                <Checkbox
                  checked={checkedDelete}
                  onChange={() => {
                    setCheckedDelete(!checkedDelete);
                  }}
                >
                  Confirm deletion
                </Checkbox>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                onClick={() => {
                  setShowDeleteModal(false);
                }}
              >
                CANCEL
              </button>
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80 "
                onClick={() => {
                  setShowDeleteModal(false);
                  delete projects[id - 1];
                  console.log(id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </>
      ) : null}
      {showLeaveModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                LEAVE PROJECT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowLeaveModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <label className="text-white text-[12px] leading-5">
                Once refused, you will be removed from collaborators and will
                not be able to interact with the project until you are invited
                again.
              </label>
              <div className="mt-3">
                <Checkbox
                  checked={checkedLeave}
                  onChange={() => {
                    setCheckedLeave(!checkedLeave);
                  }}
                >
                  Confirm deletion
                </Checkbox>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                onClick={() => {
                  setShowLeaveModal(false);
                }}
              >
                CANCEL
              </button>
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setShowLeaveModal(false);
                }}
              >
                LEAVE
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export const TableHeader = (props) => {
  return <div className="px-8 mb-4">{props.children}</div>;
};

export const TableBody = (props) => {
  return <div className="w-full">{props.children}</div>;
};

export const TableHeaderRow = (props) => {
  return (
    <div className={"flex items-center w-full h-5 text-[9px] text-thead-row"}>
      {props.children}
    </div>
  );
};

export const TableBodyRow = (props) => {
  return (
    <div
      className={
        props.no % 2
          ? "flex items-center px-4 py-4 mb-4 w-full bg-neutral-830 rounded-md"
          : "flex items-center px-4 py-4 mb-4 w-full rounded-md"
      }
    >
      {props.children}
    </div>
  );
};

export const TableCol = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const Progressbar = (props) => {
  return (
    <div className="w-11/12 h-3 bg-gray-200 rounded-full">
      <div
        className="bg-[#1dadff] h-3 text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: props.width }}
      >
        {props.children}
      </div>
    </div>
  );
};

export const ProjectDetail = (props) => {
  const [chapter, setChapter] = React.useState("Select Chapter");
  const [openChapter, setOpenChapter] = React.useState(false);

  return (
    <div className="flex ">
      <div className="page-detail-left pl-6 w-1/2">
        <label className="w-full h-15 font-normal text-[14px] text-white leading-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure tracking-widedolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </label>

        <div className="flex flex-row pt-4">
          <div className="dropdown">
            <div
              tabIndex="0"
              className="p-1.5 w-40 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
              onClick={() => {
                setOpenChapter(true);
              }}
              name="projects"
              id="projects"
            >
              <div className="flex justify-between">
                <label className="ml-1.5 text-[#CDCDCD] text-[12px] leading-5">
                  {chapter}
                </label>

                <button>
                  <DropDownIcon />
                </button>
              </div>
            </div>

            {openChapter ? (
              <ul
                tabIndex="0"
                className="z-100 !relative menu menu-compact dropdown-content mt-2 shadow bg-[#161616] border border-[#2B2B2B] w-full h-24 rounded-[4px]"
              >
                <li
                  className="flex flex-row px-2 py-1.5 h-8 text-center text-[#CDCDCD] text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                  onClick={() => {
                    setChapter("Act 1 Chapter 1");
                    setOpenChapter(false);
                  }}
                >
                  Act 1 Chapter 1
                </li>
                <li
                  className="flex flex-row px-2 py-1.5 h-8 text-center text-[#CDCDCD] text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                  onClick={() => {
                    setChapter("Act 1 Chapter 2");
                    setOpenChapter(false);
                  }}
                >
                  Act 1 Chapter 2
                </li>
                <li
                  className="flex flex-row px-2 py-1.5 h-8 text-center text-[#CDCDCD] text-[12px] leading-5 hover:bg-[#5D5D5D]"
                  onClick={() => {
                    setChapter("Act 1 Chapter 3");
                    setOpenChapter(false);
                  }}
                >
                  Act 1 Chapter 3
                </li>
              </ul>
            ) : null}
          </div>

          <button className="ml-4 flex justify-center items-center rounded-md px-[6px] text-center w-1/15 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80">
            GO TO
          </button>
        </div>
      </div>

      <div className="page-detail-righ pl-6 w-1/2 flex flex-col">
        <label className="h-15 font-normal text-[10px] text-white leading-5 tracking-[.21em]">
          GENRES
        </label>

        <div className="flex flex-row">
          <img
            className="mt-2"
            src="assets/img/dashboard/Tag1.png"
            alt="Tag1"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag2.png"
            alt="Tag2"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag3.png"
            alt="Tag3"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag4.png"
            alt="Tag4"
          />
        </div>

        <label className="mt-8 h-15 font-normal text-[10px] text-white leading-5 tracking-[.21em]">
          CHARACTERS
        </label>

        <div className="flex flex-row items-center flex-wrap mt-2">
          <img
            className="rounded-[32px]"
            src="assets/img/dashboard/Character1.png"
            alt="Character1"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character2.png"
            alt="Character2"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character3.png"
            alt="Character3"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character4.png"
            alt="Character4"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character5.png"
            alt="Character5"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character6.png"
            alt="Character6"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character7.png"
            alt="Character7"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character8.png"
            alt="Character8"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character9.png"
            alt="Character9"
          />
          <img
            className="ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character10.png"
            alt="Character10"
          />
          <div className="ml-3 w-8 h-8 rounded-[24px] bg-[#161616] border border-[#2B2B2B] flex items-center justify-center">
            <label className="text-[9px] text-[#CDCDCD] leading-5 font-extrabold tracking-[.1em]">
              +15
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
