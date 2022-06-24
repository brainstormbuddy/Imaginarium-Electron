import * as React from "react";

import { DetailIcon } from "../../Svg";

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
              src="assets/img/dashboard/project1.png"
              alt="project1"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              Apple Trees
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Movie
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[12px]">20 / 40 scenes </span>
            <Progressbar width="50%">50%</Progressbar>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
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
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="2">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project2.png"
              alt="project2"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              John Wick 4
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Movie
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[12px]">20 / 40 scenes </span>
            <Progressbar width="50%">50%</Progressbar>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">Today</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
            <span className="text-white text-[#1DAEFF]">Rin Ellei</span>
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
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="3">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project3.png"
              alt="project3"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              Young Katyusha
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/series.png"
              alt="series"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              TV Series
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[14px]">20 / 40 scenes </span>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">Yesterday</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
            <span className="text-white text-[#1DAEFF]">Rin Ellei</span>
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
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="4">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project4.png"
              alt="project4"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              Steep Banks
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/book.png"
              alt="book"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Book
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[14px]">48 chapters</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">2 days ago</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
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
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="5">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project5.png"
              alt="project5"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              Steep Banks
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Books
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[12px]">12/40 scenes</span>
            <Progressbar width="33%">33%</Progressbar>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">3 days ago</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
            <span className="text-white text-[#1DAEFF]">Andrey Mashkov</span>
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
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="6">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project6.png"
              alt="project6"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              Inglorious Bastards
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Movie
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[12px]">12 / 40 scenes </span>
            <Progressbar width="33%">33%</Progressbar>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">5 days ago</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar5.png"
              alt="Avatar5"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar6.png"
              alt="Avatar6"
              width={20}
              height={20}
            />
          </TableCol>
          <TableCol className="flex flex row w-1/10">
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
          </TableCol>
        </TableBodyRow>

        <TableBodyRow no="7">
          <TableCol className="flex flex-row items-center px-4 w-1/4">
            <img
              src="assets/img/dashboard/project7.png"
              alt="project7"
              width={40}
              height={40}
            />
            <span className="ml-4 text-[18px] leading-6 text-white">
              2 Guns
            </span>
          </TableCol>
          <TableCol className="flex flex-row items-center w-1/15">
            <img
              src="assets/img/dashboard/movie.png"
              alt="movie"
              width={20}
              height={20}
            />
            <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
              Movie
            </span>
          </TableCol>
          <TableCol className="flex flex-col w-1/15">
            <span className="text-white text-[14px]">16 chapters</span>
            <Progressbar width="33%">33%</Progressbar>
          </TableCol>
          <TableCol className="flex flex-row w-1/15">
            <span className="text-[14px] leading-5 text-white">
              2 weeks ago
            </span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10 text-[14px] leading-5">
            <span className="text-white">You</span>
          </TableCol>
          <TableCol className="flex flex-row w-1/10">
            <img
              className="rounded-[12px]"
              src="assets/img/dashboard/Avatar7.png"
              alt="Avatar7"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar8.png"
              alt="Avatar8"
              width={20}
              height={20}
            />
            <img
              className="ml-2 rounded-[12px]"
              src="assets/img/dashboard/Avatar9.png"
              alt="Avatar9"
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
            <button className="ml-3 ring-1 ring-gray-500 w-20 h-8 text-white rounded ">
              OPEN
            </button>

            <DetailIcon className="ml-1 hover:cursor-pointer" />
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
          ? "flex items-center px-4 mb-4 w-full h-12 bg-neutral-830 rounded-md"
          : "flex items-center px-4 mb-4 w-ful h-12 rounded-md"
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
