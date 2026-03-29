import React from "react";
import learn from "../assets/learn.svg";
import build from "../assets/build.svg";
import connect from "../assets/connect.svg";
const HowitsWork = () => {
  return (
    <>
      <div className="max-w-5xl text-center m-auto mt-10 py-5">
        <h1 className="text-3xl font-semibold sm:text-4xl">How it works</h1>
        <p className="p-5 sm:py-10">
          This is the website we wish we had when we were learning on our own.
          We scour the internet looking for only the best resources to
          supplement your learning and present them in a logical order.
        </p>

        <div className="flex flex-col md:flex-row items-center mx-auto mt-10 text-gray-500 gap-5 text-center">
          <div className="w-80 h-96 flex flex-col gap-3">
            <img src={learn} alt="" className="mx-auto h-44" />
            <p className="text-2xl font-semibold">Learn</p>
            <p className="px-5 py-5">
              Learn from a curriculum with the best curated online tutorials,
              blogs, and courses.
            </p>
          </div>
          <div className="w-80 h-96 flex flex-col gap-3">
            <img src={build} alt="" className="mx-auto h-44" />
            <p className="text-2xl font-semibold">Build</p>
            <p className="px-5 py-5">
              Build dozens of portfolio-worthy projects along the way, from
              simple scripts to full programs and deployed websites.
            </p>
          </div>
          <div className="w-80 h-96 flex flex-col gap-3">
            <img src={connect} alt="" className="mx-auto h-44" />
            <p className="font-semibold text-2xl">Connect</p>
            <p className="px-5 py-5">
              You're not alone. Learn and get help from our friendly community
              of beginner and experienced developers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitsWork;
