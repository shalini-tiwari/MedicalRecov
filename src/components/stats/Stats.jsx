import React from "react";
import StatsCard from "../common/StatsCard";

function Stats() {
  const stats = [
    {
      stat: "15K",
      about: "Happy Customers",
    },
    {
      stat: "150K",
      about: "Monthly Visitors",
    },
    {
      stat: "15",
      about: "Countries Worldwide",
    },
    {
      stat: "100+",
      about: "Top Partners",
    },
  ];
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="flex flex-wrap">
        {stats.map((data) => (
          <StatsCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Stats;
