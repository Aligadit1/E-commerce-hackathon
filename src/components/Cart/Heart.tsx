"use client"
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
const Heart = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`text-[20px] ${isClicked ? "text-red-500" : "text-gray-500"}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <CiHeart />
    </button>
  );
};

export default Heart;