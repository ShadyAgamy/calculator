import React, { useState } from "react";

import "./styles.scss";

export default function Calculator() {
  const [currentVal, setCurrentVal] = useState("0");
  let math = "+-*/";
  let mathWitoutMinus = "+*/";
  let multiAndDivide = "*/";

  const clickToDisplay = (e) => {
    let newCharToAdd;
    if (e) {
      newCharToAdd = e.target.innerText;

      setCurrentVal((prevCount) => {
        var prevString = prevCount.toString();
        var lastChar = prevString.slice(-1);

        // if input and output both equal zero
        if (prevString === "0" && newCharToAdd === "0") {
          return "0";
        }

        // if first input is math operator
        else if (prevString === "0" && math.indexOf(lastChar) >= 0) {
          math.indexOf(lastChar >= 0);
          return prevString + newCharToAdd;
        }

        if (math.indexOf(lastChar) >= 0 && math.indexOf(newCharToAdd) >= 0) {
          return handelMultuiMathAdd(prevString, lastChar, newCharToAdd);
        }

        // if input is "."
        else if (newCharToAdd === ".") {
          return checkForDot(prevString, newCharToAdd);
        }
        // if result is zero and the input not zero
        else if (prevString === "0" && newCharToAdd !== "0") {
          return newCharToAdd;
        } else {
          return prevString + newCharToAdd;
        }
      });
    }
    // return calc += newCharToAdd;
  };

  const handelMultuiMathAdd = (prevString, lastChar, newCharToAdd) => {
    // prev = ' * or / '  toAdd = -
    if (math.indexOf(lastChar) >= 0) {
      if (math.indexOf(prevString[prevString.length - 2]) !== -1) {
        return prevString.substr(0, prevString.length - 2) + newCharToAdd;
      }
    }
    if (multiAndDivide.indexOf(lastChar) >= 0 && newCharToAdd === "-") {
      return prevString + newCharToAdd;
    }
    if (mathWitoutMinus.indexOf(lastChar) >= 0 && newCharToAdd === "-") {
      return prevString.slice(0, -1) + newCharToAdd;
    } else if (math.indexOf(lastChar) >= 0 && math.indexOf(newCharToAdd) >= 0) {
      return prevString.slice(0, -1) + newCharToAdd;
    } else if (math.indexOf(lastChar) >= 0 && math.indexOf(newCharToAdd) === -1) {
      return prevString + newCharToAdd;
    }
  };

  const checkForDot = (prevString, newVal) => {
    for (var i = prevString.length; i > 0; i--) {
      if (math.indexOf(prevString[i]) >= 0) {
        let strToSearch = prevString.substring(i + 1);
        if (strToSearch.indexOf(".") !== -1) {
          return prevString;
        } else {
          return prevString + newVal;
        }
      }
    }

    if (prevString.indexOf(".") !== -1) {
      return prevString;
    }
    return prevString + newVal;
  };

  const showResult = () => {
    setCurrentVal((prevCount) => eval(prevCount));
  };

  return (
    <div className="calculator">
      <div className="displayCalc">
        {" "}
        {/* <span className="calc">{clickToDisplay()}</span> */} <span id="display"> {currentVal} </span>{" "}
      </div>{" "}
      <div className="main">
        <div id="clear" onClick={() => setCurrentVal(0)}>
          AC{" "}
        </div>{" "}
        <div id="divide" onClick={(e) => clickToDisplay(e)}>
          /{" "}
        </div>{" "}
        <div id="multiply" onClick={(e) => clickToDisplay(e)}>
          *
        </div>{" "}
        <div id="seven" onClick={(e) => clickToDisplay(e)}>
          7{" "}
        </div>{" "}
        <div id="eight" onClick={(e) => clickToDisplay(e)}>
          8{" "}
        </div>{" "}
        <div id="nine" onClick={(e) => clickToDisplay(e)}>
          9{" "}
        </div>{" "}
        <div id="subtract" onClick={(e) => clickToDisplay(e)}>
          -
        </div>{" "}
        <div id="four" onClick={(e) => clickToDisplay(e)}>
          4{" "}
        </div>{" "}
        <div id="five" onClick={(e) => clickToDisplay(e)}>
          5{" "}
        </div>{" "}
        <div id="six" onClick={(e) => clickToDisplay(e)}>
          6{" "}
        </div>{" "}
        <div id="add" onClick={(e) => clickToDisplay(e)}>
          +
        </div>{" "}
        <div id="one" onClick={(e) => clickToDisplay(e)}>
          1{" "}
        </div>{" "}
        <div id="two" onClick={(e) => clickToDisplay(e)}>
          2{" "}
        </div>{" "}
        <div id="three" onClick={(e) => clickToDisplay(e)}>
          3{" "}
        </div>{" "}
        <div id="equals" onClick={() => showResult()}>
          {" "}
          ={" "}
        </div>{" "}
        <div id="zero" onClick={(e) => clickToDisplay(e)}>
          0{" "}
        </div>{" "}
        <div id="decimal" onClick={(e) => clickToDisplay(e)}>
          .{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
