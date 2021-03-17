import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();

  const [result, setResult] = useState();

  function power(a, b) {
    return Math.pow(a, b);
  }

  function areaHexagon(side) {
    let area = (3 * Math.sqrt(3) * Math.pow(side, 2)) / 2;
    return area.toFixed(2);
  }

  function countWords(string) {
    let totalWords = 0;
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
      if (string[i] === " ") {
        totalWords += 1;
      }
    }
    return totalWords + 1;
  }

  function minOfArray(...args) {
    let arrayOfNumbers = args;
    let min = args[0];
    arrayOfNumbers.map((item) => {
      if (item < min) {
        min = item;
      }
    });
    // console.log(min);
  }

  minOfArray(7, 8, 1, 4, 5);

  function checkTriangle(angle1, angle2, angle3) {
    angle1 = parseFloat(angle1);
    angle2 = parseFloat(angle2);
    angle3 = parseFloat(angle3);
    if (angle1 + angle2 + angle3 !== 180) {
      return "That is not a triangle!";
    }
    if (angle1 === angle2 && angle2 === angle3) {
      return "Equilateral Triangle";
    } else if (
      angle1 === angle2 ||
      angle1 === angle3 ||
      angle2 === angle3
    ) {
      return "Isosceles Triangle";
    } else {
      return "Scalene Triangle";
    }
  }

  return (
    <div className="App">
      <h1>Javascript Functions Practice</h1>
      <h2>Functions are cool! Let's get good with them!</h2>
      <div className="container">
        <h3>1. Power function</h3>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number"
        />
        <input
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter power"
        />
        <button
          onClick={() => setResult(power(input, input2))}>
          Check Result
        </button>
        <span>{result}</span>
      </div>
      <div className="container">
        <h3>2. Area of Hexagon</h3>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter side length"
        />
        <button
          onClick={() => setResult(areaHexagon(input))}>
          Find Area
        </button>
        <span>{result}</span>
      </div>
      <div className="container">
        <h3>3. Number of words in a string</h3>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter string"
        />
        <button
          onClick={() => setResult(countWords(input))}>
          Check number of words
        </button>
        <p>{result}</p>
      </div>
      <div className="container">
        <h3>5. Enter the angles of the triangle</h3>
        <input
          placeholder="Enter angle 1"
          onChange={(e) =>
            setInput(e.target.value)
          }></input>
        <input
          placeholder="Enter angle 2"
          onChange={(e) =>
            setInput2(e.target.value)
          }></input>
        <input
          placeholder="Enter angle 3"
          onChange={(e) =>
            setInput3(e.target.value)
          }></input>
        <button
          onClick={() =>
            setResult(checkTriangle(input, input2, input3))
          }>
          Check
        </button>
        <p>{result}</p>
      </div>
    </div>
  );
}
