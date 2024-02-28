import React, { useState } from "react";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

const App = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    checkboxData[i].state = !checkboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="container ">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="button copyBtn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      )}
      <div className="charLength">
        <span className="text-white">
          <label>Character Length: </label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkboxData, length)}
      >
        Generate Password
      </button>
    </div>
  );
};

export default App;
