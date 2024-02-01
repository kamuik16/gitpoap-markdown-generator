import React, { useState, useEffect } from "react";
import { generateMarkdownCode } from "./helpers/getMarkdowncode";

function App() {
  const [poaps, setPoaps] = useState([]);
  const [username, setUsername] = useState("kamuik16");
  const [address, setAddress] = useState(
    "0x45bB66ADa6359912918e5D293989dc95B8F96D64"
  );

  const getMarkdownCode = async () => {
    await generateMarkdownCode(username, address);
  };

  useEffect(() => {
    getMarkdownCode();
  }, []);

  return (
    <>
      <h1>GitPOAP Markdown Generator</h1>
      <input type="text" placeholder="Enter GitHub Username or address" />
      <button>Generate Markdown Code</button>
    </>
  );
}

export default App;
