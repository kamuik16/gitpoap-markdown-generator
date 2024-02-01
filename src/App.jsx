import React, { useState } from "react";
import {
  generateMarkdownCodeWithUsername,
  generateMarkdownCodeWithAddress,
} from "./helpers/getMarkdowncode";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [markdownCode, setMarkdownCode] = useState("");

  const getMarkdownCodeWithUsername = async () => {
    try {
      const code = await generateMarkdownCodeWithUsername(inputValue);
      setMarkdownCode(code);
      console.log(code);
    } catch (error) {
      console.log(error);
    }
  };

  const getMarkdownCodeWithAddress = async () => {
    try {
      const code = await generateMarkdownCodeWithAddress(inputValue);
      setMarkdownCode(code);
      console.log(code);
    } catch (error) {
      console.log(error);
    }
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
    </>
  );
}

export default App;
