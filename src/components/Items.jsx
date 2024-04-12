import React, { useState } from "react";

export function Items({ setPending, item }) {
  const [count, setCount] = useState(-1);
  const handleClick = (i) => {
    if (count <= 6) {
      setCount(i);
      setPending(true);
    } else {
      setCount(-1);
      setPending(false);
    }
  };
  return (
    <>
      {item.map((data, i) => (
        <div key={i}>
          <button
            onClick={() => handleClick(i)}
            className={` w-full h-16 border-[0.97px] hover:border-[1.5px] border-black shadow-sm flex   hover:border-yellow-500 hover:shadow-xl ${
              i == count && "border-yellow-500 border-[2px] shadow-2xl"
            }  items-center rounded-md justify-start px-2 `}
          >
            <img src={data.url} alt={data.para} className="w-10 h-10 mr-3" />
            <p className="text-sm sm:text-base">{data.para}</p>
          </button>
        </div>
      ))}
    </>
  );
}
