import banner from "../assets/banner.svg";

const Hero = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="font-serif font-bold leading-tight text-4xl sm:text-5xl md:text-6xl sm:font-medium">Your <span className="text-yellow-500">Career in Web Development</span> Starts Here</h1>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 mt-3">Our full stack curriculum is free and supported by a <br />passionate open source community.</p>
        <button className="border border-gray-500 p-4 rounded-xl hover:bg-gray-400 cursor-pointer">View Full Curriculum</button>
      </div>
      <div className="w-full">
        <img src={banner} alt="" />
      </div>
    </>
  );
};

export default Hero;
