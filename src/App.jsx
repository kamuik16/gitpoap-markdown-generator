import React, { useState } from "react";
import {
  generateMarkdownCodeWithUsername,
  generateMarkdownCodeWithAddress,
} from "./helpers/getMarkdowncode";
import Navbar from "./components/Navbar";
import DisplayCode from "./components/DisplayCode";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [markdownCode, setMarkdownCode] = useState("");

  const getMarkdownCodeWithUsername = async () => {
    const code = await generateMarkdownCodeWithUsername(inputValue);
    setMarkdownCode(code);
  };

  const getMarkdownCodeWithAddress = async () => {
    const code = await generateMarkdownCodeWithAddress(inputValue);
    setMarkdownCode(code);
  };

  return (
    <>
      <Navbar />
      <input
        type="text"
        placeholder="Enter GitHub Username or Address"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={getMarkdownCodeWithUsername}>Username</button>
      <button onClick={getMarkdownCodeWithAddress}>Address</button>

      {markdownCode && <DisplayCode code={markdownCode} />}
    </>
  );
}

export default App;
