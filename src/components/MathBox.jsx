const MathBox = ({ data }) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <button
            className={`flex flex-col w-72 p-3 h-56    border-[1px] hover:border-[1.5px] border-black shadow-sm hover:border-yellow-500 hover:shadow-xl ${
              i == 1 && "border-yellow-500 border-[2px] shadow-xl"
            }    items-center rounded-md justify-start px-2`}
          >
            <img src={item.img} alt={item.text1} className="w-[83%]" />
            <div className="text-center pt-3">
              <p className="text-sm">{item.text1}</p>
              <p className="text-lg text-gray-400">{item.text2}</p>
            </div>
          </button>
        );
      })}
    </>
  );
};
export default MathBox;
