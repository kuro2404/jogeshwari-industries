import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-black pt-44 pb-24 text-white ">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2  sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img className="h-15  w-auto mb-6" src='/assets/logo.jpeg' />
          <p className="text-white mb-4">
            <strong className=" font-medium">Jogeshwari Industries</strong>
          </p>
          {/* <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div> */}
          <p className="text-white-300">©{new Date().getFullYear()} - Jogeshwari Industries</p>
          <p className="text-white-300">Address: Chakan Ph 2, MIDC, Pune</p>
          <p className="text-white-300">Mail: jogeshwariindustries77@gmail.com</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-white -300 mb-4 font-medium text-lg">Services</p>
          <ul className="text-black-500 flex gap-4 ">
            <a href='#feature'>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Features{" "}
              </li>
            </a>
            <a href="#vision">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Vision{" "}
              </li>
            </a>
            <a href="#team">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Team{" "}
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
