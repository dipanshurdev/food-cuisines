import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[4rem]">
      <h1 className="text-red-800 text-[5rem]">404</h1>
      <h5 className="text-slate-700 text-2xl">Something went wrong</h5>
      <h5 className="text-slate-700 text-xl">Page not found</h5>
    </div>
  );
};

export default Error;
