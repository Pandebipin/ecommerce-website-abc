import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Input.css";
function Input() {
  return (
    <div className="Header-search rounded-md ">
      <input
        className="Header-searchInput px-4 border-1 border-gray-500 "
        type="text"
      />
      <div className="Header-searchIconContainer">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Input;
