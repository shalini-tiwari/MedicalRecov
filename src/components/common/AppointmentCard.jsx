import React from "react";

function AppointmentCard({ data }) {
  return (
    <div className="w-full xl:w-96 my-4 xl:my-0 bg-white">
      <div class="relative">
        <img
          className="w-full xl:w-96 h-96 object-cover"
          src={data.image}
          alt="appointment"
        />
        <div class="absolute left-0 top-0 m-2 px-4 py-1 text-white rounded font-semibold bg-red-500">
          Sale
        </div>
        <div class="absolute inset-x-0 bottom-4">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-3 mr-2 hover:shadow-lg hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3 mr-2 hover:shadow-lg hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div className="bg-white rounded-full p-3 hover:shadow-lg hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="pt-2 flex justify-between">
          <h4 className="my-4 text-xl text-primary font-bold">{data.title}</h4>
          <div className="mt-4 bg-[#26335D] text-white font-light flex rounded-full h-6 px-2 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pt-0.5 w-5 h-5 text-yellow-400 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {data.ratings}
          </div>
        </div>
        <h4 className="text-lg font-bold">{data.type}</h4>
        <p className="py-5 text-lg text-gray-400 font-light">
          {data.description}
        </p>

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <div className="flex flex-col ml-4">
            <p className="text-lg text-gray-400 font-light">
              {data.noOfSales} Sales
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <p className="text-lg text-gray-400 font-bold mr-2">$ {data.mrp}</p>
          <h4 className="text-lg font-bold text-green-500">$ {data.price}</h4>
        </div>
        <button class="my-4 rounded-full border-2 border-primary text-primary font-bold py-3 px-10">
          Learn More &gt;
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
