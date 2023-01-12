import React from "react";
import BannerImg from "../assets/img/house-banner.png";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:ml-8 text-center lg:items-start lg:text-left xl:ml-[135px] flex flex-col justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="mb-8 lg:max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis
            ullam temporibus aperiam recusandae impedit praesentium quisquam
            porro quae cupiditate animi possimus sint debitis, aut voluptates
            alias tempora numquam veritatis!
          </p>
        </div>
        {/* Banner image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={BannerImg} alt="banner" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
