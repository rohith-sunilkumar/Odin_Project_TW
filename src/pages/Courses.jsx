import one from "../assets/courses/1.svg";
import two from "../assets/courses/2.svg";
import three from "../assets/courses/3.svg";
import four from "../assets/courses/4.svg";
import five from "../assets/courses/5.svg";
import six from "../assets/courses/6.svg";
import seven from "../assets/courses/7.svg";
import eight from "../assets/courses/8.svg";
import nine from "../assets/courses/9.svg";

const Courses = () => {
  const courses = [
    { img: one, title: "Intermediate HTML and CSS" },
    { img: two, title: "Advanced HTML and CSS" },
    { img: three, title: "Javascript" },
    { img: four, title: "Databases" },
    { img: five, title: "React Js" },
    { img: six, title: "Node JS" },
    { img: seven, title: "Ruby on Rails" },
    { img: eight, title: "Ruby" },
    { img: nine, title: "Getiting Hired" },
  ];

  return (
    <>
     <div className="w-full bg-gray-200">
         <p className="text-center pb-20 font-bold text-3xl py-10">Learn everything you need to know</p>
      <div className="max-w-5xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-10 ">
        {courses.map((courses, index) => (
          <div key={index}className="flex flex-col text-center items-center gap-5 flex-wrap bg-white w-60 mx-auto p-5 rounded-2xl cursor-pointer">
            <img src={courses.img} alt="" className="h-40" />
            <p className="font-semibold">{courses.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-15"><button className="p-3 border bg-white hover:bg-gray-300 rounded-xl mb-10">Explore curriculum</button></div>
     </div>
    </>
  );
};
export default Courses;
