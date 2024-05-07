import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../firebase";

function ProductView() {
  const navigate = useNavigate();
  const { id } = useParams(null);
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count <= 0 ? 0 : count - 1);
  }
  const addToCart = async ({ id, name, brand, price, url }) => {
    console.log(count);
    if (!auth.currentUser) {
      alert("you need to login first...");
      navigate("/login");
      return;
    } else {
      await addDoc(collection(db, `cart-${auth.currentUser.uid}`), {
        name,
        brand,
        price,
        id,
        count,
        url,
      })
        .then(() => {
          alert("success");
        })
        .catch((e) => {
          console.log(e);
          alert("you need to login first");
        });
    }
  };

  useEffect(() => {
    const getData = async () => {
      const QuerySnapshot = await getDocs(
        collection(db, `cart-${auth.currentUser.uid}`)
      );
    };
    getData();

    const fn = async () => {
      const QuerySnapshot = await getDocs(collection(db, "products"));
      const d = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductData(d);
      console.log(d);
    };
    fn();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {productData.map((val) => {
        if (val.id === id) {
          return (
            <>
              <div className="container w-full justify-center min-h-[70vh] p-4 bg-slate-50 text-black ">
                <div className="flex gap-8 p-2 justify-center ">
                  <div className="w-64 h-64 ">
                    <img
                      className="w-64 h-64 object-cover rounded-md"
                      src={val.url}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-orange-400 text-md">Abc company</span>
                    <h1 className="text-black capitalize font-[600] text-xl pt-2 ">
                      FAll Limited Edition {val.productName}
                    </h1>
                    <p className="py-2 font-sans">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi, possimus!
                    </p>
                    <div className="price flex gap-4">
                      <b className="font=[800] text-md">$ {val.productPrice}</b>
                      <b className="text-red-500">50%</b>
                    </div>
                    <strike className="text-gray-500">$200</strike>
                    <div className="flex gap-6 w-full">
                      <div className="count flex gap-4 pt-2 py-1 mt-2 bg-gray-200 px-2">
                        <button
                          className="text-orange-700 text-2xl"
                          onClick={decrement}
                        >
                          -
                        </button>
                        <h1 className="text-center text-xl">{count}</h1>
                        <button
                          className="text-orange-700 text-xl"
                          onClick={increment}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          addToCart({
                            id: val.id,
                            name: val.productName,
                            brand: val.productBrand,
                            price: val.productPrice,
                            url: val.url,
                          })
                        }
                        className="bg-orange-600 w-[50%] px-4 py-3 rounded-md shadow-sm text-white"
                      >
                        {" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default ProductView;
