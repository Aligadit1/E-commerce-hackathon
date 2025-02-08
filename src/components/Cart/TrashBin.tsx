"use client";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";

interface TrashBinProps {
  onClick: () => void;
}

const TrashBin: React.FC<TrashBinProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      aria-label="Remove item"
      className={`text-[20px] ${isClicked ? "text-red-500" : "text-gray-500"}`}
      onClick={() => {
        onClick();
        setIsClicked(true);
      }}
    >
      <BsTrash />
    </button>
  );
};

export default TrashBin;
