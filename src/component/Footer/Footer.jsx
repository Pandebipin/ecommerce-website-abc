import React from "react";

function Footer() {
  return (
    <div className="footer grid w-full grid-cols-1 md:grid-cols-2 bg-gray-300">
      {/* Logo Section */}
      <div className="logo flex justify-center py-8">
        <img
          onClick={() => setopen(navigate("/"))}
          className="h-22 w-36 object-contain mr-12 pl-0 ml-0 cursor-pointer mix-blend-multiply text-white"
          src="https://t3.ftcdn.net/jpg/04/88/22/26/360_F_488222622_1VarNlKLKTRmhYzIb8qtOSVS8LC4jGOq.jpg"
          alt=""
        />
      </div>

      {/* Contact Section */}
      <div className="contact flex flex-col justify-center px-8 py-4 md:py-8">
        <h1 className="text-black font-bold text-xl uppercase">Find us at</h1>
        <div className="contact_details text-gray-800 pt-4">
          <h2 className="pb-1">CORPORATE / REGISTERED OFFICE</h2>
          <p>
            Suite # 308, 1st Floor, Plot No. 5, Kapilvatu District, CharNumber
          </p>
          <p>kapilvastu, Nepal - 110 025.</p>
          <p className="font-medium">📲 011-48593300-10</p>
          <p className="font-medium">
            ✉️ bp9777643@gmail.com, dummy123@gmail.com
          </p>
        </div>
      </div>

      {/* Message Form Section */}
      <form className="form flex flex-col justify-center px-8 py-4 md:py-8">
        <h1 className="text-black font-bold text-xl uppercase">
          Send us a message
        </h1>
        <div className="inputs flex flex-col pt-4 text-black">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-200 rounded-sm px-2 py-1 mb-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-200 rounded-sm px-2 py-1 mb-4"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="bg-gray-200 rounded-sm px-2 py-1 h-32 mb-4 text-white"
        ></textarea>
        <button className="text-black bg-blue-700 px-4 py-2">Submit</button>
      </form>
    </div>
  );
}

export default Footer;
