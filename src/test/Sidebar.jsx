import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { setState } = props;
  return (
    <>
      <div className="sidebar_container w-[150px] flex-col h-[100vh] flex  gap-7 rounded-md shadow-md">
        <h2 className="catogery text-gray-800 text-center pl-0 pt-2 text-xl">
          {" "}
          Catogery{" "}
        </h2>
        <div className="sidebar flex flex-col gap-4 pl-4 text-gray-900 font-semi-bold cursor-pointer text-md list-none font-sans ">
          <li
            onClick={() => {
              navigate("/allProducts");
              setState(false);
            }}
            className=" hover:text-gray-600 "
          >
            {" "}
            All{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/c/Airpods");
              setState(true);
            }}
          >
            Airpods{" "}
          </li>
          <li
            onClick={() => {
              navigate("/c/mobile");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            mobile{" "}
          </li>
          <li
            onClick={() => {
              navigate("/c/Headphone");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            Headphones{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/c/Cover");
              setState(true);
            }}
          >
            {" "}
            covers{" "}
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
