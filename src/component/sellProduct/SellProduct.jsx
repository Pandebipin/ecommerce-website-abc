import React, { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const SellProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImg, setproductImg] = useState();
  const [productDesc, setProductDesc] = useState("");
  const [productCatogery, setProductCatogery] = useState();

  const handleAddForSell = async (e) => {
    e.preventDefault();

    const storage = getStorage();
    const imagesRef = ref(storage, `imgs/${productImg.name + Math.random()}`);
    await uploadBytes(imagesRef, productImg)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .then(() => {
        getDownloadURL(imagesRef)
          .then((url) => {
            const docRef = addDoc(collection(db, "products"), {
              productBrand,
              productName,
              productPrice,
              productDesc,
              url,
              productCatogery,
            })
              .then(() => {
                alert("succes");
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            alert("error while getting image url");
          });
      })
      .catch((e) => {
        alert("something went wrong while uploading imgae");
      });
  };

  return (
    <>
      <section class="bg-gray-50 w-full h-[100vh] max-h-[100vh] text-black">
        <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-200">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-700 md:text-2xl ">
                Fill for sales
              </h1>
              <form class="space-y-1 md:space-y-4" action="#">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="product name"
                    onChange={(e) => setProductName(e.target.value)}
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Brand name"
                    onChange={(e) => setProductBrand(e.target.value)}
                    class="bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="$Price"
                    onChange={(e) => setProductPrice(e.target.value)}
                    class=" border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Write something about your product..."
                    value={productDesc}
                    onChange={(e) => setProductDesc(e.target.value)}
                    class=" borde text-black border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="password"
                    id="password"
                    placeholder="image"
                    onChange={(e) => setproductImg(e.target.files[0])}
                    class=" border font-sans border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="relative">
                  <select
                    className="block cursor-pointer  w-full bg-white border border-gray-300 p-4 py-2 pr-8 rounded shadow "
                    onChange={(e) => setProductCatogery(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="mobile">Mobile</option>
                    <option value="Airpods">Airpods</option>
                    <option value="laptop">Headphone</option>
                    <option value="laptop">Covers</option>
                  </select>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>

                  <br />

                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-black dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-black"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={handleAddForSell}
                  class="w-[100%] border-1 border-gray-900 text-xl flex justify-center text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add for sell
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellProduct;
