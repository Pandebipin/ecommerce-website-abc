import React from "react";
import Accordian from "../Accordian/Accordian";

function Faq() {
  return (
    <div className="bg-gray-200 rounded p-4 ">
      <Accordian
        title="Can I Collect Products Securely"
        answer="yes u will able to collect securely"
      />
      <Accordian
        title="How Can I Payment For Product"
        answer="u can payment through ur card and esewa too"
      />
      <Accordian
        title="In Which Places It Works(area)"
        answer="u are able to buy our products in buddhabhumi wherever u want"
      />
    </div>
  );
}

export default Faq;
