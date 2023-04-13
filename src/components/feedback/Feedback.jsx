import React from "react";
import FeedbackCard from "../common/FeedbackCard";

function Feedback() {
  const feedbackData = [
    {
      id: 1,
      ratings: 4,
      user: {
        image: "assets/feedbacks/1.png",
        name: "Regina Miles",
        designation: "Designer",
      },
      feedback:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      id: 2,
      ratings: 4,
      user: {
        image: "assets/feedbacks/2.png",
        name: "Regina Miles",
        designation: "Designer",
      },
      feedback:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      id: 2,
      ratings: 4,
      user: {
        image: "assets/feedbacks/3.png",
        name: "Regina Miles",
        designation: "Designer",
      },
      feedback:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
  ];
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="py-40">
        <h4 className="pt-8 text-xl font-bold text-primary">Pratice Advice</h4>
        <h2 className="pt-6 text-7xl font-bold">Leading Medicine</h2>
        <p className="py-8 text-lg text-gray-400 font-light w-7/12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-between pb-40">
        {feedbackData.map((data) => (
          <FeedbackCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Feedback;
