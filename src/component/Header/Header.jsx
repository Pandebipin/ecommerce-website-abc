import React, { useEffect, useState } from "react";
import Input from "../Input/Input.jsx";
import { Text } from "../Text/index.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth, db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { array } from "prop-types";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setopen] = useState();
  const [productData, setProductData] = useState([]);

  const [Account, setaccount] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const fn = async () => {
          const QuerySnapshot = await getDocs(
            collection(db, `cart-${user.uid}`)
          );
          const d = QuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setProductData(d);
        };
        fn();
      } else {
        console.log("no motherfucker logged in ");
      }
    });
  }, [productData]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlesubmit = () => {
    if (user) {
      auth.signOut();
    }
  };
  const sellproduct = () => {
    navigate("/sell");
  };
  const user = useSelector((state) => state.user);

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <header className="bg-white flex-1 h-[100px] gap-3 w-full  mb-4 shadow-md">
        <div className="container  mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              onClick={() => setopen(navigate("/"))}
              className="h-16 w-32 object-contain mr-12 pl-0 ml-0 cursor-pointer"
              src="https://t3.ftcdn.net/jpg/04/88/22/26/360_F_488222622_1VarNlKLKTRmhYzIb8qtOSVS8LC4jGOq.jpg"
              alt=""
            />
          </div>

          <Input />

          <div className="hidden md:flex md:gap-7">
            <Text
              onClick={sellproduct}
              className="text-base pl-1 cursor-pointer font-sans text-gray-900 whitespace-nowrap pr-9"
              size="txtGilroyMedium16"
            >
              sell products
            </Text>
          </div>

          <div className="bucket hidden md:flex md:gap-7 cursor-pointer hover: opacity-[0.8] hover:scale-[1.1] transition-[0.5] pr-7">
            <div className="icon relative" onClick={handleCart}>
              <div
                className={
                  !productData.length
                    ? "none"
                    : "badge text-black rounded-full bg-red-400 absolute top-[-40%] left-[75%] p-1"
                }
              >
                <span className="p-1">{productData.length}</span>
              </div>
              <svg
                className="bucket"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </div>
          </div>
          {user ? (
            <div className="hidden md:flex md:gap-7 relative text-left">
              <button
                className="flex p-1 gap-1"
                onClick={() => setaccount(!Account)}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {/* <p className="pr-3">{auth.currentUser.email}</p> */}
              </button>
              {Account ? (
                <div className="absolute right-[-30px] top-12 flex justify-center mt-2 w-40 rounded-md shadow-lg ring-1 bg-gray-50 z-20 ring-black ring-opacity-5 divide-y">
                  <div className="py-1" role="menu">
                    <Link to={"/Account"}>
                      <a
                        href=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        My Account
                      </a>
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Orders
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handlesubmit}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <Link to={!user && "/login"}>
              <a
                href="#"
                className="border-1 rounded-md bg-blue-600 px-4 outline-none py-2 text-white"
              >
                Login
              </a>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <div className="z-50">
            <button
              onClick={toggleDropdown}
              className="md:hidden pb-2 z-50 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 pl-2 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  color="text-gray-900"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  color="text-white "
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`md:flex md:items-center  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="md:hidden flex flex-col absolute top-9 w-[60%] z-40 right-4 justify-start gap-2 p-2 bg-gray-800 text-white">
              <div className="p-4">
                <h2 className="text-1xl font-bold">
                  Abc company && it solution
                </h2>
                <p className="text-sm mt-3">Welcome to our store!</p>
              </div>
              <nav className="flex-1 hover:text-gray-200">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-700">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-700">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-700">
                      Categories
                    </a>
                    <ul className="flex flex-col gap-1 px-2">
                      <li
                        className="p-1 text-sm font-medium cursor-pointer"
                        onClick={(e) => navigate(`/c/mobile`)}
                      >
                        mobile
                      </li>
                      <li
                        className="p-1 text-sm font-medium cursor-pointer"
                        onClick={(e) => navigate(`/c/Headphone`)}
                      >
                        Headphones
                      </li>
                      <li
                        className="p-1 text-sm font-medium cursor-pointer"
                        onClick={(e) => navigate(`/c/Airpods`)}
                      >
                        Airpods
                      </li>
                      <li
                        className="p-1 text-sm font-medium cursor-pointer"
                        onClick={(e) => navigate(`/c/Cover`)}
                      >
                        Covers
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-700">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700"
                      onClick={() => navigate("/Account")}
                    >
                      Account
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
