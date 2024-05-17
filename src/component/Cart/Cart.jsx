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
    });
  }, []);

  const handelRemoveCart = async ({ id }) => {
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
        // not possible to doing that in this case
      };
      fn();
    });
  };

  return (
    <>
      {auth.currentUser ? (
        <section className=" overflow-hidden justify-around md:items-start lg:items-start items-center flex lg:flex-row md:flex-col flex-col p-2 my-3">
          <div className="container w-full bg-rd-500">
            {productData.map((product) => {
              return (
                <div
                  key={product.id}
                  className=" md:w-[800px] col-span-12 xl:col-span-8 md:pr-8 pt-14 pb-2 lg:py-2 max-xl:max-w-3xl max-xl:mx-auto"
                >
                  <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                    <div className="w-full md:max-w-[206px]">
                      <img
                        src={product.url}
                        alt="perfume bottle image"
                        className="mx-auto w-33 h-33"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-semibold text-base leading-7 text-black">
                            {product.name}
                          </h6>
                          <h6 className="font-normal text-base leading-7 text-gray-500">
                            {product.brand}
                          </h6>
                          <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            Rs.{product.price}
                          </h6>
                          <h1
                            onClick={handelRemoveCart}
                            className="cursor-pointer text-xl font-bold bg-red-500 text-white w-20 flex items-center px-1 rounded-sm"
                          >
                            remove
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div className="flex items-center h-full">
                          <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                            placeholder="1"
                          />
                          <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container ">
            <div className="col-span-12 z-10 xl:col-span-4 bg-gray-50  max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>
              <div className="mt-8">
                <form>
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      82
                    </p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                      $120.90
                    </p>
                  </div>
                  <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Cart;
