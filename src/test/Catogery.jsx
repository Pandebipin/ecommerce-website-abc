import { collection, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import Sidebar from "./Sidebar";

const Catogery = () => {
  const { name } = useParams();
  const [productData, setProductData] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductData(data);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex gap-7 min-h[100vh]">
      <Sidebar state={state} setState={setState} />
      <div className="container lg:mt-[-300px] cursor-pointer sm:mt-0 md:mt-0 pb-2 grid sm:grid-cols-1  sm:top-[100px] lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-1 ">
        {productData.map((p) => {
          if (p.productCatogery === name) {
            return (
              <div
                key={p.id}
                onClick={() => navigate(`/productView/${p.id}`)}
                className="card bg-gray-100 border-x-slate-100 flex flex-col w-[18rem] h-[18rem] mix-blend-multiply border-none gap-2 p-4 py-3"
              >
                <img
                  className="w-33 h-[11rem] mix-blend-multiply"
                  src={p.url}
                  alt="..."
                />
                <div className="card-body flex flex-col justify-end pr-6 pt-0">
                  <h5 className="card-title text-lg text-black">
                    {p.productName}
                  </h5>
                  <p className="card-text font-sans font-medium">
                    ${p.productPrice}
                  </p>
                  {/* <p>⭐⭐⭐</p> */}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Catogery;
