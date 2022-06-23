import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Table(props) {
  return (
    <div className="w-full h-full">
      <TableHeader>
        <TableHeaderRow>
          <TableCol className="w-1/4 ">PROJECT NAME</TableCol>
          <TableCol className="w-1/15 ">PROJECT TYPE</TableCol>
          <TableCol className="w-1/15 ">CONTENT</TableCol>
          <TableCol className="w-1/15 ">LASTOPENED</TableCol>
          <TableCol className="w-1/10 ">AUTHOR</TableCol>
          <TableCol className="w-1/5 ">COLLABORATORS</TableCol>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        <TableBodyRow no="1">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/apple.png"
              alt="apple"
              width={40}
              height={40}
            />
            <span className="ml-4 text-white">Apple Trees</span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="ml-3 text-white">Movie</span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white">20 / 40 scenes </span>
            <span className="text-white">20 / 40 scenes </span>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar1.png"
              alt="Avatar1"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar2.png"
              alt="Avatar2"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar3.png"
              alt="Avatar3"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar4.png"
              alt="Avatar4"
              width={20}
              height={20}
            />
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>
            <img
              className="ml-6"
              src="assets/img/dashboard/more-vertical.svg"
              alt="more-vertical"
              width={20}
              height={20}
            />
          </TableCol>
        </TableBodyRow>
        <TableBodyRow no="2">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/apple.png"
              alt="apple"
              width={40}
              height={40}
            />
            <span className="ml-4 text-white">Apple Trees</span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="ml-3 text-white">Movie</span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white">20 / 40 scenes </span>
            <span className="text-white">20 / 40 scenes </span>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar1.png"
              alt="Avatar1"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar2.png"
              alt="Avatar2"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar3.png"
              alt="Avatar3"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar4.png"
              alt="Avatar4"
              width={20}
              height={20}
            />
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>
            <img
              className="ml-6"
              src="assets/img/dashboard/more-vertical.svg"
              alt="more-vertical"
              width={20}
              height={20}
            />
          </TableCol>
        </TableBodyRow>
        <TableBodyRow no="3">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/apple.png"
              alt="apple"
              width={40}
              height={40}
            />
            <span className="ml-4 text-white">Apple Trees</span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="ml-3 text-white">Movie</span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white">20 / 40 scenes </span>
            <span className="text-white">20 / 40 scenes </span>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar1.png"
              alt="Avatar1"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar2.png"
              alt="Avatar2"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar3.png"
              alt="Avatar3"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar4.png"
              alt="Avatar4"
              width={20}
              height={20}
            />
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>
            <img
              className="ml-6"
              src="assets/img/dashboard/more-vertical.svg"
              alt="more-vertical"
              width={20}
              height={20}
            />
          </TableCol>
        </TableBodyRow>
        <TableBodyRow no="4">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/apple.png"
              alt="apple"
              width={40}
              height={40}
            />
            <span className="ml-4 text-white">Apple Trees</span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="ml-3 text-white">Movie</span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white">20 / 40 scenes </span>
            <ProgressBar
              completed={50}
              bgColor="#1dadff"
              width="auto"
              labelColor="#ffffff"
              maxCompleted={100}
            />
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar1.png"
              alt="Avatar1"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar2.png"
              alt="Avatar2"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar3.png"
              alt="Avatar3"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar4.png"
              alt="Avatar4"
              width={20}
              height={20}
            />
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>
            <button className="hover:cursor-pointer">
              <img
                className="ml-6 hover:cursor-pointer"
                src="assets/img/dashboard/more-vertical.svg"
                alt="more-vertical"
                width={20}
                height={20}
              />
            </button>
          </TableCol>
        </TableBodyRow>
      </TableBody>
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
    <div className={"flex items-center w-full h-5  text-[9px] text-thead-row"}>
      {props.children}
    </div>
  );
};

export const TableBodyRow = (props) => {
  return (
    <div
      className={
        props.no % 2
          ? "flex items-center px-4 mb-4 w-full h-18 bg-neutral-830 rounded-md"
          : "flex items-center px-4 mb-4 w-ful h-18 rounded-md"
      }
    >
      {props.children}
    </div>
  );
};

export const TableCol = (props) => {
  return <div className={props.className}>{props.children}</div>;
};
