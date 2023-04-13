import React from "react";

function StatsCard({ data }) {
  return (
    <div className="w-full xl:w-1/4 px-20 my-4">
      <p className="text-center text-6xl text-primary font-semibold pt-24">
        {data.stat}
      </p>
      <p className="text-center text-lg font-semibold">{data.about}</p>
    </div>
  );
}

export default StatsCard;
