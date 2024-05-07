import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import Signup from "../../Pages/Signup/Signup";
const Cart = () => {
  const [productData, setProductData] = useState([]);
  const [uid, setUid] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const fn = async () => {
        if (user) {
          const QuerySnapshot = await getDocs(
            collection(db, `cart-${user.uid}`)
          );
          const d = QuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setProductData(d);
        } else {
          console.log("not signed in");
        }
      };
      fn();
      console.log(productData);
      console.log(productData);
    });
  }, []);

  const handelRemoveCart = async ({ id }) => {
    alert("clicked");
    auth.onAuthStateChanged((user) => {
      const fn = async () => {
        const removeDoc = doc(db, `cart-${user.uid}`, id);
        await deleteDoc(removeDoc)
          .then(() => {
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      };
      fn();
    });
  };

  return (
    <>
      {auth.currentUser ? (
        <div className="cart flex flex-row-reverse">
          <div className="order_summary flex flex-col gap-2 p-4 bg-[#F9FAFB] w-[50%] overflow-hidden min-h-[50%] shadow-lg rounded-sm m-2">
            <h3 className="p-3 text-xl text-gray-800 text-center capitalize">
              Order summary
            </h3>
            <div className="flex justify-between px-4 py-2">
              <p className="text-gray-700 capitalize font-medium">Subtotal</p>
              <p className="price"></p>
            </div>
            <div className="flex justify-between px-4 py-2">
              <p className="text-gray-700 capitalize font-medium">
                Shipping estimate
              </p>
              <p className="price text-gray-700 capitalize font-medium">$99</p>
            </div>
            <div className="flex justify-between px-4 py-2">
              <p className="text-gray-700 capitalize font-medium">
                Tax estimate{" "}
              </p>
              <p className="price text-gray-700 capitalize font-medium">$99</p>
            </div>
            <div className="flex justify-between px-4 py-2">
              <h4 className="text-gray-800 capitalize font-xl text-md">
                {" "}
                ordered total{" "}
              </h4>
              <p className="price text-gray-800 capitalize font-xl text-md">
                $1111
              </p>
            </div>
            <div className="btn w-full">
              <button className="bg-[#4F46E5] w-full px-4 py-3 rounded-md shadow-sm text-white">
                {" "}
                checkout{" "}
              </button>
            </div>
          </div>
          <div className="flex w-[50%] flex-col gap-3 ">
            {productData.map((product) => {
              return (
                <div className=" flex justify-between p-2 max-w-[100%] flex-1 gap-3 shadow-sm rounded-sm">
                  <div className="img flex gap-3 p-3">
                    <img className="w-36 h-36" src={product.url} alt="" />
                    <div className="">
                      <h2 className="text-2xl text-gray800 font-medium p-2">
                        {product.name}
                      </h2>
                      <div className="flex gap-3">
                        <p className="px-1 py-2"> {product.brand} </p>
                        <span className="text-3xl text-gray-400">| </span>
                        <p className="px-1 py-2">${product.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-bold">
                    <span> {product.count}</span>
                  </div>
                  <div className="text-xl">
                    <button
                      className="text-xl"
                      onClick={() => handelRemoveCart({ id: product.id })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Cart;
