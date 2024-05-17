import React, { useEffect, useState } from "react";
import Button from "../../component/Button/Button";
import { Text } from "../../component/Text";
import Popular from "../../component/Popular/Popular";
import Faq from "../../component/Faq/Faq";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Slider from "../../component/Slider/Slider";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Container } from "@mui/material";
const Home = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const viewproduct = () => {
    navigate("/catogroise");
  };
  const goinglogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    const fn = async () => {
      const QuerySnapshot = await getDocs(collection(db, "products"));
      const d = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductData(d);
    };
    fn();
    console.log(productData);
  }, []);

  // First, let's filter out unique product categories
  const uniqueCategories = [
    ...new Set(productData.map((item) => item.productCatogery)),
  ];
  console.log(auth.currentUser);
  return (
    <div className="home w-full">
      <div className="home_container">
        <div className="first-section w-full mt-0 py-0 text-white flex flex-col sm:flex-row justify-between gap-4 bg-[#F9FBFF]">
          <div className="w-full first-2 lg:w-100% xl:w-100% h-auto min-h-[25vh] translate-x-0 pl-1">
            <img
              className="rounded w-full object-cover sm:h-[40vh]"
              src="images/main-banner-1.jpg"
              alt="img"
            />
            <div className="home_text top-0 py-9">
              <h2 className="summer tracking-wide uppercase text-red-500">
                Super Charged For Pros
              </h2>
              <h2 className="sale text-black font-sans">ipads s13+ pros.</h2>
              <p className="text-black pt-3 pl-1">from $999.80 or $140.50</p>
              <div className="p-2 mt-4 flex align-middle items-center text-black w-full sm:w-[150px]">
                <button
                  className="px-4 py-2 rounded bg-blue-500 text-white w-full"
                  onClick={auth.currentUser ? goinglogin : null}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories start */}
      <div className=" flex flex-col items-center justify-start w-full mt-[103px] gap-7 p-2.5 bg-gray-100 max-w-[1603px]">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="font-medium text-gray-900">Categories</h2>
          <div className="flex flex-row justify-center">
            <a className="text-gray-800 font-medium" href="#">
              View all
            </a>
          </div>
        </div>
        <div className="catogery flex  flex-wrap bg-slate-100 justify-center gap-8 w-full p-4 ">
          {uniqueCategories.map((category) => {
            const item = productData.find(
              (item) => item.productCatogery === category
            );
            return (
              <section
                key={item.id}
                className="text-gray-600 body-font flex-grow"
              >
                <div className="container mx-auto">
                  <div className="flex flex-col">
                    <div className="p-4 flex-grow">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="sm:h-48 h-36 w-full object-cover object-center"
                          src={item.url}
                          alt={item.productName}
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {item.productCatogery}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {item.productName}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            ${item.productPrice}
                          </p>
                          <div className="flex items-center flex-wrap">
                            <a
                              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                              onClick={() => navigate(`productView/${item.id}`)}
                            >
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* New arrival section start */}

      <div className="flex flex-row flex-wrap justify-center mt-[98px] w-full max-w-[1632px]">
        <div className="flex flex-col items-start justify-start w-full gap-[33px] p-[5px]">
          <div className="flex flex-row items-center justify-between w-full">
            <h2>New Arrivials</h2>
            <div className="flex flex-row justify-center">
              <a className="text-gray-800 font-medium" href="">
                Vew all
              </a>
            </div>
          </div>

          <div className="faqbg1 flex flex-row justify-start w-full gap-8">
            <div className="flex flex-row justify-between items-start w-[50%] md:h-10 p-7 bg-gray-50">
              <img
                className="w-full  ml-[33px] object-cover grid overflow-x-hidden"
                src="https://www.91-img.com/gallery_images_uploads/4/8/48ae01c9baa142d7ba23df09be9d38fdf57fb6c4.JPG?tr=h-630,c-at_max,q-80"
                alt="img"
              />
              <div className="flex flex-col items-start justify-start w-[33%] mr-[33px] gap-8 px-4">
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[5px]">
                  <p className="font-xl text-gray-700">Samsung s24 ultra</p>
                  <p className="font-medium">$299</p>
                </div>
                <Button
                  className="font-bold md:w-[150px] min-w-[200px]"
                  onClick={viewproduct}
                >
                  View product
                </Button>
              </div>
            </div>

            <div className="faqbg1 flex flex-row justify-start w-[50%]">
              <div className="flex flex-col items-start justify-start w-full ">
                <div className=" justify-center  w-full gap-8 grid-cols-2 grid">
                  <div className="newarrival2ndsection flex flex-col items-start justify-start w-full gap-4 p-8 bg-gray-50">
                    <img
                      className="w-full object-cover"
                      src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start w-[90%] pt-0.5 gap-2">
                      <Text className="font-medium">Ipad pro mx</Text>
                      <Text className="font-medium">$300</Text>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap-3.5 p-[30px] bg-gray-50">
                    <img
                      className="w-full object-cover"
                      src="images/speaker.jpg"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start w-[52%] gap-[9px]">
                      <Text className="font-medium">Ipad pro mx</Text>
                      <Text className="font-medium">$300</Text>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap-[15px] p-[30px] bg-gray-50">
                    <img
                      className="w-full object-cover"
                      src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start w-[48%]  gap-[9px]">
                      <Text className="font-medium">Ipad pro mx</Text>
                      <Text className="font-medium">$300</Text>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap=4 p-8 bg-gray-50">
                    <img
                      className="w-full object-cover"
                      src="images/tab.jpg"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-start w-[90%] pt-0.5 gap-2">
                      <Text className="font-medium">Tab pro mx</Text>
                      <Text className="font-medium">$300</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular section start */}

      <div className="popularbg popular_section py-2">
        <div className="flex flex-row items-center justify-between w-full mb-12">
          <h2 className="font-medium text-3xl pl-1 text-gray-900">
            Sales for u
          </h2>
          <div className="flex flex-row justify-center">
            <a className="text-gray-800 font-medium text-xl pr-1" href="">
              View all
            </a>
          </div>
        </div>
        {/* Render your popular items here */}
        <Popular />
      </div>

      {/* Why choose us section start */}
      <div className="flex flex-col items-start justify-center w-full mt-32 gap-5">
        <h1 className="ml-[35px] text-gray-800 flex justify-center text-center font-medium">
          Why Choose Us
        </h1>
        <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col items-center justify-center md:w-[28%] gap-8 px-4 md:px-14 py-4 md:py-[60px]">
            <div className="flex items-center justify-center h-[124px] w-[128px] md:w-[150px] gap-8 border-gray-500 border-2 border-solid rounded-[60%] p-[20px]">
              <img
                className="h-[65px] w-[65px] md:w-[80px] md:h-[80px]"
                src="https://cdn-icons-png.freepik.com/256/13719/13719838.png?ga=GA1.1.324273052.1709715758&"
                alt=""
              />
            </div>
            <div className="flex flex-col text-center  justify-center w-[78%] gap-4">
              <h1 className="whitespace-nowrap text-gray-800 text-xl font-medium">
                Free delivery
              </h1>
              <Text className="text-center">
                This is free shipping only for selected region got it
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:w-[28%] gap-8 px-4 md:px-14 py-4 md:py-[60px]">
            <div className="flex items-center justify-center h-[124px] w-[128px] md:w-[150px] gap-8 border-gray-500 border-2 border-solid rounded-[60%] p-[20px]">
              <img
                className="h-[65px] w-[65px]"
                src="https://cdn-icons-png.freepik.com/256/12292/12292690.png?ga=GA1.1.324273052.1709715758&"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[78%] gap-4">
              <h1 className="whitespace-nowrap text-gray-800 text-xl font-medium">
                payment method
              </h1>
              <Text className="text-center">
                This is free shipping only for selected region got it
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:w-[28%] gap-8 px-4 md:px-14 py-4 md:py-[60px]">
            <div className="flex items-center justify-center h-[124px] w-[128px] md:w-[150px] gap-8 border-gray-500 border-2 border-solid rounded-[60%] p-[20px]">
              <img
                className="h-[65px] w-[65px]"
                src="https://cdn-icons-png.freepik.com/256/13172/13172607.png?ga=GA1.1.324273052.1709715758&"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[78%] gap-4">
              <h1 className="whitespace-nowrap text-gray-800 text-xl font-medium">
                Warranty
              </h1>
              <Text className="text-center">
                This is free shipping only for selected region got it
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:w-[28%] gap-8 px-4 md:px-14 py-4 md:py-[60px]">
            <div className="flex items-center justify-center h-[124px] w-[128px] md:w-[150px] gap-8 border-gray-500 border-2 border-solid rounded-[60%] p-[20px]">
              <img
                className="h-[65px] w-[65px]"
                src="https://cdn-icons-png.freepik.com/256/8302/8302431.png?ga=GA1.1.324273052.1709715758&"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[78%] gap-4">
              <h1 className="whitespace-nowrap text-gray-800 text-xl font-medium">
                Costumer support
              </h1>
              <Text className="text-center">
                This is free shipping only for selected region got it
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us ends */}
      {/* new generation things start */}
      <Container>
        <div className="faqbg1 w-full grid grid-cols-2 md:grid-cols-1 pl-10 pt-6 py-2 border-2 mt-8">
          <div className="w-full">
            <div className="flex flex-col  pt-10 gap-1 w-[440px]">
              <h1 className="h1 font-semibold text-black text-5xl">
                New generation
              </h1>
              <h1 className="h1 font-semibold text-black text-5xl">
                An easy way to{" "}
                <span className="h1 text-purple-500">Buy products</span>{" "}
              </h1>
            </div>
          </div>
          <div className="flex  flex-col w-full p-4">
            <div className="flex flex-col w-full">
              <div className="flex faqbg1 flex-row  gap-[120px] px-2 py-3 justify-start">
                <div className="flex flex-col p-2 w-[220px]">
                  <img
                    className="w-[100px] h-[90px]"
                    src="https://silicon.createx.studio/assets/img/landing/app-showcase-3/features/payment.svg"
                    alt=""
                  />
                  <h1 className="font-semibold text-black text-2xl pt-2">
                    Easy payments
                  </h1>
                  <span className="tex1 text-gray-700 text-xl pt-6 font-sm w-[300px] ">
                    Users can easily make payments through the mobile app using
                    various payment methods.
                  </span>
                </div>
                <div className="flex flex-col p-2">
                  <img
                    className="w-[100px] h-[90px]"
                    src="https://silicon.createx.studio/assets/img/landing/app-showcase-3/features/security.svg"
                    alt=""
                  />
                  <h1 className="font-semibold text-black text-2xl pt-2">
                    Data security
                  </h1>
                  <span className="tex1 text-gray-700 text-xl pt-6 font-sm w-[300px] ">
                    The app employs various security measures to protect user
                    data from unauthorized access or theft.
                  </span>
                </div>
              </div>
              <div className="flex faqbg1 flex-row gap-[120px] px-2 justify-start">
                <div className="flex flex-col p-2 w-[220px]">
                  <img
                    className="w-[100px] h-[90px]"
                    src="https://silicon.createx.studio/assets/img/landing/app-showcase-3/features/statistics.svg"
                    alt=""
                  />
                  <h1 className="font-semibold text-black text-2xl pt-2">
                    Cost statistics
                  </h1>
                  <span className="tex1 text-gray-700 text-xl pt-6 font-sm w-[300px] ">
                    Users can track their spending and view detailed cost
                    statistics, such as expenses by category
                  </span>
                </div>
                <div className="flex flex-col p-2">
                  <img
                    className="w-[100px] h-[90px]"
                    src="https://silicon.createx.studio/assets/img/landing/app-showcase-3/features/support.svg"
                    alt=""
                  />
                  <h1 className="font-semibold text-black text-2xl pt-2">
                    Support 24/7
                  </h1>
                  <span className="tex1 text-gray-700 text-xl pt-6 md:font-[2vh] font-sm w-[300px] ">
                    Users can get help or support from the app's customer
                    service team at any time of day or night.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* new generation things ends */}
      {/* FAQ section start */}
      <div className="faqbg w-full h-screen grid grid-cols-2 pl-10 pt-6  min-h-[100vh] border-2 mt-8">
        <div className="">
          <div className="flex flex-col pt-10 gap-1">
            <h1 className="font-semibold text-black text-4xl">
              Any questions?
            </h1>
            <h1 className="font-semibold text-black text-4xl">
              Checkout The FAQS
            </h1>
          </div>

          <div className="flex pt-2">
            <span className="text-gray-700 text-xl pt-6 font-medium ">
              Still have unanswered questions and need to get in touch?
            </span>
          </div>
          <div className="mt-6">
            <Link to={"/contact"}>
              <button className="button rounded px-3 py-2 text-white bg-">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
        <div className="faq2nd p-4">
          <Faq />
        </div>
      </div>
      {/* FAQ section ends */}
      <div className="slider w-full h-screen min-h-[100vh] flex-wrap flex flex-col">
        <div>
          <h1 className="font-semibold px-4 py-1 text-gray-800 text-3xl">
            what our client says ?
          </h1>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
