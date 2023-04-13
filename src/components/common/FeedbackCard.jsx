import React from "react";

function FeedbackCard({ data }) {
  return (
    <div className="w-full xl:w-96 my-4 xl:my-0 bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center py-8">
          {[1, 2, 3, 4, 5].map((rating) => (
            <svg
              key={rating}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 text-yellow-400 ${
                rating <= data.ratings ? "fill-current" : "fill-none"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-400 font-light text-center w-7/12">
            {data.feedback}
          </p>
        </div>
        <div className="flex items-center justify-between py-5">
          <img
            src={data.user.image}
            alt="user"
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <h4 className="text-base font-bold text-primary">
              {data.user.name}
            </h4>
            <h4 className="text-sm font-bold text-gray-400">
              {data.user.designation}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
