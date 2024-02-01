import React, { useState, useEffect } from "react";
import {
  generateMarkdownCodeWithUsername,
  generateMarkdownCodeWithAddress,
} from "./helpers/getMarkdowncode";
import Navbar from "./components/Navbar";

function App() {
  const [username, setUsername] = useState("kamuik16");
  const [address, setAddress] = useState("");
  const [markdownCode, setMarkdownCode] = useState("");

  const getMarkdownCodeWithUsername = async () => {
    const markdownCode = await generateMarkdownCodeWithUsername(username);
    console.log(markdownCode);
  };

  useEffect(() => {
    getMarkdownCodeWithUsername();
  }, []);

  return (
    <>
      <Navbar />
      <input type="text" placeholder="Enter GitHub Username or address" />
      <button>Username</button>
      <button>Address</button>
    </>
  );
}

export default App;
