import React from "react";
import { RatingBar } from "../../component/RatingBr/RatingBar";
import { Text } from "../../component/Text";
import "./Popular.css";

function Popular() {
  return (
    <>
      <div className=" pl-4 ml-2 flex flex-col items-center justify-center w-full mt-10 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col w-full gap-8">
          <div className="flex popular flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">iphone 15 promax</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/headphone.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">headphone 15 promax</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/tab3.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">Tab on boom</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/tab2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">tab promax</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/tab.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">tab 15 promax</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/headphone.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">headphone rj</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">watch p2</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/speaker.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">speaker rk77</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="popular flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="flex justify-center md:w-1/2">
                <img
                  className="w-full object-cover"
                  src="images/laptop.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:w-1/2 gap-2">
                <Text className="text-gray-800">laptop(lenovo)</Text>
                <Text className="font-md">$299</Text>
                <RatingBar
                  value={4}
                  isEditable={true}
                  color="#f6f7fb"
                  activeColor="#fae952"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for other items */}
      </div>
    </>
  );
}

export default Popular;
