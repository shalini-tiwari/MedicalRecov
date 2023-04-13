import React from "react";
import Swiper from "swiper";
import "swiper/css";

function TeamCard({ data }) {
  React.useEffect(() => {
    if (window.innerWidth < 1280) {
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        // navigation:
        //   data.length > 1
        //     ? {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        //       }
        //     : false,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, []);

  const isMobile = window.innerWidth < 1280;

  const handlePrevClick = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  return isMobile ? (
    <div className="w-full xl:w-1/4 my-4 xl:my-0 bg-white rounded-xl shadow-xl">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data.map((user, index) => (
            <div className="swiper-slide" key={index}>
              <img
                src={user.image}
                alt="user-profile"
                className="w-full h-auto rounded-t-xl"
              />
              <span className="text-center">
                <h4 className="pt-4 text-lg font-semibold">{user.name}</h4>
                <h5 className="pt-3 text-base text-gray-400">
                  {user.designation}
                </h5>
              </span>
              <div className="flex items-center justify-center py-5">
                <a className="mr-4" href={user.social.facebook}>
                  <img src="assets/icons/facebook.png" alt="facebook" />
                </a>
                <a className="mr-4" href={user.social.instagram}>
                  <img src="assets/icons/instagram.png" alt="instagram" />
                </a>
                <a href={user.social.twitter}>
                  <img src="assets/icons/twitter.png" alt="twitter" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev" onClick={handlePrevClick}></div>
        <div className="swiper-button-next" onClick={handleNextClick}></div>
      </div>
    </div>
  ) : (
    data.map((user) => (
      <div className="w-full xl:w-72 my-4 xl:my-0 bg-white rounded-xl shadow-xl mr-4">
        <img
          src={user.image}
          alt="user-profile"
          className="w-full h-auto rounded-t-xl"
        />
        <span className="text-center">
          <h4 className="pt-4 text-lg font-semibold">{user.name}</h4>
          <h5 className="pt-3 text-base text-gray-400">{user.designation}</h5>
        </span>
        <div className="flex items-center justify-center py-5">
          <a className="mr-4" href={user.social.facebook}>
            <img src="assets/icons/facebook.png" alt="facebook" />
          </a>
          <a className="mr-4" href={user.social.instagram}>
            <img src="assets/icons/instagram.png" alt="instagram" />
          </a>
          <a href={user.social.twitter}>
            <img src="assets/icons/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    ))
  );
}

export default TeamCard;
