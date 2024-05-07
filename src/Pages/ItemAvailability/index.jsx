import React from "react";
import Header from "../../component/Header/Header";
import Button from "../../component/Button/Button";
import { Text } from "../../component/Text";

const ItemAvailabilityPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto mt-8 md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-12 items-center justify-start p-4 rounded-lg shadow-bs1 w-[68%]  md:w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start w-[97%] md:w-full bg-white px-4 py-2">
              <input
                name="FrameSeventySeven"
                placeholder="Order Summary"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_02 sm:pr-5 sm:text-xl text-2xl border-b-2 text-left w-[50%]"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="sm"
                variant="underline"
              ></input>

              <div className="flex md:flex-col flex-row gap-4 items-center justify-start pt-1.5 w-[77%] md:w-full">
                <img
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  src="https://www.91-img.com/gallery_images_uploads/4/8/48ae01c9baa142d7ba23df09be9d38fdf57fb6c4.JPG?tr=h-630,c-at_max,q-80"
                  alt="pngwingOne"
                />
                <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-black-900_02 text-xl"
                    size="txtGilroyMedium20"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="mt-[19px] text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[23px] w-[23%] md:w-full">
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtGilroyMedium18Black90002"
                    >
                      Color:
                    </Text>
                    <Text
                      className="ml-1 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Blue
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[39%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtOpenSansMedium24"
                    >
                      <span className="text-colors font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors1 font-gilroy text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text
                      className="line-through mt-[11px] text-base text-blue_gray-400"
                      size="txtOpenSansMedium16"
                    >
                      <span className="text-colors2 font-gilroy text-left font-semibold">
                        $6
                      </span>
                      <span className="text-colors2 font-gilroy text-left font-semibold">
                        55.99
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-gilroy items-start justify-end mt-3 pr-[3px] py-[3px] w-full">
                    <Text
                      className="mt-[7px] text-lg text-red-700"
                      size="txtGilroyMedium18Red700"
                    >
                      Currently Unavailable
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[38px] w-[97%] md:w-full bg-white p-8 px-10 ">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Delivery Address
                </Text>
                <text className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-4 rounded w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-2 w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-between w-[67%] sm:w-full">
                    <input type="radio" name="radio" className="h-9 w-9" />
                    <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5">
                      <div className="flex flex-row gap-4 items-start justify-start w-[43%] md:w-full px-4">
                        <Text
                          className="mt-[3px] text-black-900_02 text-xl"
                          size="txtGilroyMedium20"
                        >
                          Jone Cooper
                        </Text>
                        <button className="cursor-pointer font-medium leading-[normal] min-w-[50px] rounded text-center text-sm">
                          Work
                        </button>
                      </div>
                      <Text
                        className="text-blue_gray-400 text-xl"
                        size="txtGilroyMedium20Bluegray400"
                      >
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="sm:mt-0 mt-1 text-blue-A700 text-xl"
                    size="txtGilroyMedium20BlueA700"
                  >
                    Edit
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[70%] md:w-full">
                  <input type="radio" name="radio" className="h-7 w-7" />
                  <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5 w-[89%] sm:w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-[42%] md:w-full">
                      <Text
                        className="mt-[3px] text-black-900_02 text-xl"
                        size="txtGilroyMedium20"
                      >
                        Jone Cooper
                      </Text>
                      <button
                        className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[54px] rounded text-center text-sm"
                        shape="round"
                        color="blue_gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Home
                      </button>
                    </div>
                    <Text
                      className="text-black-900_02 text-xl"
                      size="txtGilroyMedium20"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[62%] md:w-full">
                  <input type="radio" name="radio" className="h-7 w-7" />
                  <div className="flex flex-col gap-[21px] items-start justify-end pt-[5px] w-[88%] sm:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900_02 text-xl"
                        size="txtGilroyMedium20"
                      >
                        Jone Cooper
                      </Text>
                    </div>
                    <Text
                      className="text-black-900_02 text-xl"
                      size="txtGilroyMedium20"
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[623px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full bg-white p-6">
              <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full ">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="text-black-900_02 text-lg"
                    size="txtGilroyMedium18Black90002"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Discount
                  </Text>
                  <Text
                    className="text-green-600 text-lg"
                    size="txtGilroyMedium18Green600"
                  >
                    -$111.98
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    className="text-black-900_02 text-lg"
                    size="txtGilroyMedium18Black90002"
                  >
                    $10
                  </Text>
                </div>
              </div>
              <text className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Total Amount
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  $1120.58
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold rounded Ttext-base text-center align-top h-[40px] w-[200px]"
                shape="round"
                color="blue_A700"
                size="xl"
                variant="fill"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemAvailabilityPage;
