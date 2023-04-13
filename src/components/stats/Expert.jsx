import React from "react";

function Expert() {
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="flex flex-wrap py-40">
        <div className="w-1/2">
          <hr className="bg-primary border-4 border-primary h-px my-3 w-2/12" />
          <h2 className="pt-10 text-7xl font-bold">Meet Our Experts</h2>
          <p className="py-10 text-lg text-gray-400 font-light w-8/12">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <a className="text-primary" href="https://github.com/">
            Learn More &gt;
          </a>
        </div>

        <div className="w-1/2">
          <img
            className="float-right"
            src="/assets/bg/expert.png"
            alt="expert"
          />
        </div>
      </div>
    </div>
  );
}

export default Expert;
