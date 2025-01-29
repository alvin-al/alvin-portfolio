import React from "react";

const RoundedItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`font-medium border border-gray-600 text-xs w-fit px-4 py-1 rounded-full hover:bg-gray-200 hover:border-black  cursor-pointer transition delay-75`}
    >
      <p>{children}</p>
    </div>
  );
};

export default RoundedItem;
