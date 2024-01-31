import React, { useState, useEffect } from "react";
import { getPOAPsWithUsername, getPOAPsWithAddress } from "./utils/getPOAPs";

function App() {
  const [poaps, setPoaps] = useState([]);
  const [username, setUsername] = useState("kamuik16");
  const [address, setAddress] = useState(
    "0x45bB66ADa6359912918e5D293989dc95B8F96D64"
  );

  const fetchPOAPs = async () => {
    const poapsFromUsername = await getPOAPsWithUsername(username);
    console.log(poapsFromUsername);
    const poapsFromAddress = await getPOAPsWithAddress(address);
    console.log(poapsFromAddress);
  };

  useEffect(() => {
    fetchPOAPs();
  }, []);

  return (
    <>
      <h1>GitPOAP README Generator</h1>
      <input type="text" placeholder="Enter GitHub Username or address" />
      <button>Generate README</button>
    </>
  );
}

export default App;
