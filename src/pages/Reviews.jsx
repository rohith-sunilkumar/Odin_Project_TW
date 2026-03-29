import p1 from "../assets/persons/p1.jpg";
import p2 from "../assets/persons/p2.jpg";
import p3 from "../assets/persons/p3.jpg";
import p4 from "../assets/persons/p4.jpg";

const Reviews = () => {
  const reviews = [
    {
      img: p1,
      name: "Rob Pando",
      review:
        "TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me...",
    },
    {
      img: p2,
      name: "Cody Loyd",
      review:
        "Before I started the Odin Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front...",
    },
    {
      img: p3,
      name: "Andrej Dragojević",
      review:
        "An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer.",
    },
    {
      img: p4,
      name: "Skip Gibson",
      review:
        "Before I found The Odin Project I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went.Having this...",
    },
  ];
  return (
    <>
      <div className="mt-20 w-full mx-auto">
        <h1 className="text-center md:text-4xl md:pb-10 font-semibold text-2xl pb-5">
          Success Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-6 mx-auto">
          {reviews.map((reviews, index) => (
            <div key={index} className="md:flex pb-6 md:items-start flex">
              <div className="p-3">
                <img
                  src={reviews.img}
                  alt=""
                  className="h-10 rounded-3xl w-15 md:w-12"
                />
              </div>
              <div className="w-2xl">
                <p className="py-3 underline">{reviews.name}</p>
                <p className="text-gray-500 pr-2">{reviews.review}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 md:text-xl hover:text-gray-500 cursor-pointer underline">
          Read more success stories
        </p>
      </div>

      <div className="md:w-2xl text-center mx-auto mt-10 p-3">
        <h1 className="text-2xl font-semibold">Support us!</h1>
        <h1>
          The Odin Project is funded by the community. Join us in empowering
          learners around the globe by supporting The Odin Project!
        </h1>
        <div className=" md:w-2xl mt-7 flex justify-center gap-5 pb-15">
          <button className="border p-2 bg-gray-300 rounded-xl px-5">
            Learn more
          </button>
          <button className="bg-green-800 border p-2 rounded-xl text-white px-5">
            Donate now
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
