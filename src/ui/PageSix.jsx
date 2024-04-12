import { Circle } from "lucide-react";
const PageSix = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-full flex flex-col items-center justify-center gap-5  w-3/4 mx-auto">
      <Circle className="w-32 h-32 sm:w-44 sm:h-44 text-yellow-500 animate-bounce" />
      <p className=" text-2xl sm:text-3xl font-semibold text-center">
        Find the learning path recommendation for you based on your responses
      </p>
    </div>
  );
};
export default PageSix;
