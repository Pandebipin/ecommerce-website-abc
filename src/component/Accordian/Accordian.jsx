import React, { useState } from "react";

function Accordion({ title, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={handleButtonClick}
        className="flex justify-between w-full px-4 py-2 text-base font-medium text-gray-800  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="mr-2">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto py-4 opacity-100" : "h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-4 text-sm text-gray-600">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
