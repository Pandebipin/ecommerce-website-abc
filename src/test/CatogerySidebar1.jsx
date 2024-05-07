import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Catogery from "./Catogery";
import Allproducts from "./Allproducts";

const CatogerySidebar1 = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex gap-2 min-h-[100vh]">
        {state ? <Catogery /> : <Allproducts />}
      </div>
    </>
  );
};

export default CatogerySidebar1;
