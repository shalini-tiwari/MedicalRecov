import React from "react";

function InfoCard({ data }) {
  return (
    <div>
      <div className="bg-white w-full xl:w-80 p-4 shadow-xl my-2 xl:my-0">
        <img className="px-6 py-4" src={data.icon} alt="icon" />
        <h3 className="px-6 font-semibold">{data.title}</h3>
        <hr className="ml-6 text-black bg-primary border-1 border-primary h-px my-3 w-3/12" />
        <p className="px-6 py-3 text-gray-400 text-sm">{data.description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
