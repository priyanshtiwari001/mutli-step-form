import { Button } from "../components/Button";
import { pageThree_Five_Data } from "./utils/data";

export const PageThree = () => {
  return (
    <>
      {pageThree_Five_Data[1].map((item, i) => {
        return (
          <div key={i} className="flex flex-col gap-4 items-center mt-14">
            <div className=" w-full h-full flex lg:flex-row flex-col md:flex-row items-center justify-center gap-5 ">
              <div className=" flex w-2/3 items-center justify-center">
                <img src={item.img} alt="" className=" w-[90%] lg:w-3/4  " />
              </div>
              <div className="w-2/3 px-2 tracking-wide flex flex-col gap-4 items-center">
                <h2 className="text-2xl w-full lg:text-4xl font-bold ">
                  {item.title}
                </h2>
                <p className="text-base leading-6 lg:leading-7 ">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
