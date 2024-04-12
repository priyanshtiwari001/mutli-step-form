const Box = ({ box }) => {
  return (
    <>
      <div className="w-96 h-52 border-2 border-gray-600 shadow-sm p-1 rounded-lg">
        <div className="flex items-center justify-start px-1">
          <p className="w-full text-left leading-6">{box.desc}</p>
          <img src={box.img} alt={box.desc} className="w-36 h-36" />
        </div>
      </div>
    </>
  );
};
export default Box;
