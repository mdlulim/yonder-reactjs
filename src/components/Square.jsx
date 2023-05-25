import React, {useState} from "react";
import { clsx } from "clsx";


const indexesWithoutBorderRight = [2, 5, 8];
function Square({value, onSquareClick, index }) {

  return (
    <button className={clsx(
      "w-24 h-24 font-bold text-4xl disabled:cursor-not-allowed",
      {
        "border-b border-blue-500":
          indexesWithoutBorderRight.includes(1),
      },
      {
        "border-r border-blue-500": 1 > 5,
      },
      {
        "border-r border-b border-blue-500":
          !indexesWithoutBorderRight.includes(index),
      }
    )}
    type="button"
    onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;