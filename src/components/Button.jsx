import clsx from "clsx";
import React from "react";
export function Button({
  className,
  setPage,
  pending,

  title = "Continue",
}) {
  const onClickPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <button
        onClick={() => onClickPage()}
        type="button"
        className={clsx(
          "border-2 rounded-lg text-white bg-black hover:text-black hover:bg-white hover:transition-colors border-black px-10 py-3 mb-2 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white disabled:cursor-not-allowed font-semibold",
          className
        )}
        disabled={!pending}
      >
        {title}
      </button>
    </div>
  );
}
