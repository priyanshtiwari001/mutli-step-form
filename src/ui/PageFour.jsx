import { Button } from "../components/Button";
import MathBox from "../components/MathBox";

const mathData = [
  {
    title: " What is the your math comfort level",
    desc: "Choose the highest level you feel confident - you can always adjust later",
    mathItem: [
      { img: "/mathImg/math-1.png", text1: "Basic", text2: "Introductory" },
      {
        img: "/mathImg/math-2.png",
        text1: "Moderate Math",
        text2: "Foundational",
      },
      {
        img: "/mathImg/math-3.png",
        text1: "Moderate Algerba",
        text2: "Intermediate",
      },
      { img: "/mathImg/math-4.png", text1: "Calclus", text2: "Advanced" },
    ],
  },
];

const PageFour = () => {
  return (
    <>
      {mathData.map((item, i) => {
        return (
          <div key={i}>
            <div className="w-full   mx-auto text-center p-3">
              <h1 className="  text-3xl   font-semibold tracking-wide">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm leading-5 mt-2">
                {item.desc}
              </p>
            </div>
            <div className=" flex flex-col md:flex-row mt-28 mb-10 gap-8 justify-center items-center ">
              <MathBox data={item.mathItem} />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default PageFour;
