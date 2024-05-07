import React from "react";
import Accordian from "../Accordian/Accordian";

function Faq() {
  return (
    <div className="bg-gray-200 rounded p-4 ">
      <Accordian
        title="Can i collect products securely"
        answer="yes u will able to collect securely"
      />
      <Accordian
        title="how can i payment for product"
        answer="u can payment through ur card and esewa too"
      />
      <Accordian
        title="in which places it works(area)"
        answer="u are able to buy our products in buddhabhumi wherever u want"
      />
    </div>
  );
}

export default Faq;
