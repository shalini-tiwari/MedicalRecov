import React, { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(null);

  return (
    <>
      <nav className="bg-zinc-50 xl:block hidden">
        <div className="mx-auto container px-40 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center xl:hidden">
              <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                <div className="visible xl:hidden">
                  <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-primary focus:text-primary focus:outline-none">
                      <div className="flex items-center">
                        <span className="ml-2 font-bold">Home</span>
                      </div>
                    </li>
                    <li className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary focus:text-primary focus:outline-none justify-center">
                      <div className="flex items-center">
                        <span className="ml-2 font-bold">Products</span>
                      </div>
                    </li>
                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary items-center focus:text-primary focus:outline-none">
                      <span className="ml-2 font-bold">Pricing</span>
                    </li>
                    <li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-primary items-center focus:text-primary focus:outline-none">
                      <span className="ml-2 font-bold">Contact</span>
                    </li>
                  </ul>
                  <svg
                    onclick="MenuHandler(this,true)"
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </div>
                <div
                  className="hidden close-m-menu text-gray-700"
                  onclick="MenuHandler(this,false)"
                >
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
              <div className="flex items-center mr-16">
                <h2 className="hidden sm:block text-3xl text-gray-700 font-bold leading-normal pl-3">
                  MedicalRecov
                </h2>
              </div>

              <div className="hidden xl:flex md:mr-6 xl:mr-16">
                <a
                  href="#!"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#!"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  Products
                </a>
                <a
                  href="#!"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  Pricing
                </a>
                <a
                  href="#!"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <div className="flex items-center relative mr-32 ">
                    <span class="text-primary font-bold py-2 px-4 rounded mr-4 hover:cursor-pointer">
                      Login
                    </span>
                    <button class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                      Join Us →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
          <div className="w-24">
            <p className="text-xl md:text-3xl text-gray-800 ml-3 font-bold">
              MedicalRecov
            </p>
          </div>
          <div className="flex items-center">
            <div
              id="menu"
              className="text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
              : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <p className="text-xl md:text-2xl text-gray-800 ml-3">
                          MedicalRecov
                        </p>
                      </div>
                      <div
                        id="cross"
                        className="text-gray-800"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <a href="#!" className="cursor-pointer">
                      <li className="text-gray-800 pt-10">
                        <div className="flex items-center">
                          <p className="text-primary xl:text-base text-base ml-3">
                            Home
                          </p>
                        </div>
                      </li>
                    </a>
                    <a href="#!" className="cursor-pointer">
                      <li className="text-gray-800 pt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              Products
                            </p>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#!" className="cursor-pointer">
                      <li className="text-gray-800 pt-8">
                        <div className="flex items-center">
                          <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                            Pricing
                          </p>
                        </div>
                      </li>
                    </a>
                    <li className="text-gray-800 pt-8 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                            Contact
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full pt-4">
                  <div className="border-t border-gray-300">
                    <div className="w-fullitems-center justify-between pt-1">
                      <button class="w-full text-center text-primary font-bold py-2 px-4 rounded mb-4 hover:cursor-pointer">
                        Login
                      </button>
                      <br />
                      <button class="w-full text-center bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Join Us →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
