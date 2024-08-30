import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="rings-container h-screen bg-black">
      <div className="rings flex justify-center items-center"></div>
    </div>
  );
};

export default Loader;
