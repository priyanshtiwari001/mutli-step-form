import { ChevronLeft } from "lucide-react";
const ProgressBar = ({ page, setPage }) => {
  const onClickPrevious = () => {
    if (page == 0) {
      setPage(0);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <header className="w-full    h-10   ">
      <div className=" flex items-center justify-center">
        <button onClick={onClickPrevious}>
          <ChevronLeft className="w-6 h-6 " />
        </button>
        <div className="w-full mx-auto bg-gray-300 rounded-lg">
          <div
            style={{ width: page * 20 + "%" }}
            className="h-2 bg-purple-800 rounded-xl   "
          />
        </div>
      </div>
    </header>
  );
};
export default ProgressBar;
