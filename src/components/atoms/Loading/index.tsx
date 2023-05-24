import React from "react";

export const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div
        style={{ borderRadius: "50%" }}
        className="mb-48 mx-auto border-4 border-golden-3 w-14 h-14  border-l-golden-1 spinner "
      ></div>
    </div>
  );
};
