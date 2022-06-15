import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Algorithm = () => {
  const [array, setArray] = useState<string[]>([
    "a",
    "ab",
    "abc",
    "cd",
    "def",
    "gh",
  ]);

  const findStringLengthAppearMostArray = (array: string[]) => {
    const stringLength: number[] = [];
    const stringLengthFilter: number[] = [];
    let arrResult: string[] = [];

    array.forEach((item: any) => {
      stringLength.push(item.split("").length);
    });

    for (let i = 0; i < stringLength.length; i++) {
      if (stringLengthFilter.indexOf(stringLength[i]) === -1) {
        stringLengthFilter.push(stringLength[i]);
      }
    }

    let count: number[] = [];
    for (let i = 0; i < stringLengthFilter.length; i++) {
      count[i] = 0;
      for (let j = 0; j < stringLength.length; j++) {
        if (stringLength[j] === stringLengthFilter[i]) {
          count[i]++;
        }
      }
    }

    const maxArr = Math.max(...count);
    const indexMax = count.indexOf(maxArr);
    array.forEach((element: any) => {
      if (element.split("").length === stringLengthFilter[indexMax]) {
        arrResult.push(element);
      }
    });
    return arrResult;
  };
  let result: string[] = findStringLengthAppearMostArray(array);

  let newArray = "[";
  for (let i = 0; i < result.length; i++) {
    if (i === result.length - 1) {
      newArray = `${newArray} "${result[i]}" ]`;
    } else {
      newArray = `${newArray} "${result[i]}" ,`;
    }
  }
  let newArrayInit = "[";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newArrayInit = `${newArrayInit} "${array[i]}" ]`;
    } else {
      newArrayInit = `${newArrayInit} "${array[i]}" ,`;
    }
  }

  // sum two number top
  const arrNumber = [1, 4, 2, 3, 5];
  let sumTwoNumber = 0
  const arr = arrNumber.sort((a, b) => b - a).slice(0, 2)
  for(let i = 0; i < arr.length; i++) {
    sumTwoNumber += arr[i];
  }
  return (
    <>
      <div className="text-center text-[30px] font-bold py-[30px]">
        Algorithm
      </div>
      <div className="text-center">Array is: {newArrayInit}</div>
      <div className="text-center">Result is: {newArray}</div>
      <hr />
      <div className="text-center">Arry number is: {arrNumber}</div>
      <div className="text-center">Sum two number top: {sumTwoNumber}</div>  
      <div className="text-center">
        <Link to="products"><button className="bg-[#0064b1] px-[20px] py-[10px] text-[#fff]">Next</button></Link>
      </div>
    </>
  );
};

export default Algorithm;
