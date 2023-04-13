import React from "react";

function ContactUs() {
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="pt-24 text-center">
        <h4 className=" pt-8 text-xl font-bold text-primary">Newsletter</h4>
        <h2 className="pt-6 text-7xl font-bold">JOIN US</h2>
        <p className="mx-auto my-0 py-8 text-lg text-gray-400 font-light w-8/12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="mt-24 mb-32">
        <div class="flex">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div class="relative w-8/12 mx-auto my-0">
            <input
              type="text"
              id="email"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-gray-200 border"
              placeholder="Your Email"
              required
            />
            <button
              type="button"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary hover:bg-blue-800 px-6"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
