import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Allproducts = () => {
  const [productData, setProductData] = useState([]);
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
    window.scroll(0, 0);
  }, []);
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  return (
    <div className="flex gap-7 min-h[100vh]">
      <Sidebar state={state} setState={setState} />
      <div className=" grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-1 ">
        {productData.map((p) => {
          return (
            <div
              key={p.id}
              onClick={() => navigate(`/productView/${p.id}`)}
              className="card flex flex-col w-[18rem] h-[20rem] mix-blend-multiply border-none bg-gray-100 cursor-pointer gap-2 p-4 py-2"
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
                  Rs.{p.productPrice}
                </p>
                <p>⭐⭐⭐</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
