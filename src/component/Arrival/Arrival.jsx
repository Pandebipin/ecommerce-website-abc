import React from "react";
import Button from "../../component/Button/Button";
import { Text } from "../../component/Text";

function Arrival() {
  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-6 md:px-12">
      <div className="flex flex-col items-start justify-start w-full gap-8">
        <div className="flex flex-row items-center justify-between w-full">
          <h2>New Arrivals</h2>
          <div className="flex flex-row justify-center">
            <a className="text-gray-800 font-medium" href="#">
              View all
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Individual arrival items */}
          {/* Repeat this block for each arrival */}
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-gray-50">
            <img
              className="w-full object-cover"
              src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
              alt=""
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <Text className="font-medium">Ipad pro mx</Text>
              <Text className="font-medium">$300</Text>
            </div>
            <Button className="font-bold min-w-[200px]">Add to cart</Button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-gray-50">
            <img
              className="w-full object-cover"
              src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
              alt=""
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <Text className="font-medium">Ipad pro mx</Text>
              <Text className="font-medium">$300</Text>
            </div>
            <Button className="font-bold min-w-[200px]">Add to cart</Button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-gray-50">
            <img
              className="w-full object-cover"
              src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
              alt=""
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <Text className="font-medium">Ipad pro mx</Text>
              <Text className="font-medium">$300</Text>
            </div>
            <Button className="font-bold min-w-[200px]">Add to cart</Button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-gray-50">
            <img
              className="w-full object-cover"
              src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
              alt=""
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <Text className="font-medium">Ipad pro mx</Text>
              <Text className="font-medium">$300</Text>
            </div>
            <Button className="font-bold min-w-[200px]">Add to cart</Button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-gray-50">
            <img
              className="w-full object-cover"
              src="https://media.istockphoto.com/id/458316603/photo/apple-ipad-3.jpg?s=612x612&w=0&k=20&c=Hp9WJiAwpoL9mPJ8yH1T6uJD80s8Arlo6I6n8Caurtg="
              alt=""
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <Text className="font-medium">Ipad pro mx</Text>
              <Text className="font-medium">$300</Text>
            </div>
            <Button className="font-bold min-w-[200px]">Add to cart</Button>
          </div>
          {/* End of individual arrival item */}
        </div>
      </div>
    </div>
  );
}

export default Arrival;
