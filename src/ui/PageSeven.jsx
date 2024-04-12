import Box from "../components/Box";
import { boxs } from "../ui/utils/data";
const PageSeven = ({ children }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5  h-full mx-auto  flex flex-col items-center justify-center">
      <div className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-7 ">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Learning paths based on your answers
          </h1>
          <p className="text-gray-500 text-sm">
            Choose one to get started. You can switch anytime.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center md:flex-row gap-5 px-3">
          {boxs.map((box, i) => (
            <Box box={box} key={i} />
          ))}
          <div className="absolute -top-4 left-28 w-36 h-6 rounded-full bg-yellow-500">
            Most popular
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageSeven;
