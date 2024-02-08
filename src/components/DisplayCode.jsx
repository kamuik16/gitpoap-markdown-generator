import { useState, useEffect } from 'react';

const DisplayCode = (props) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyCode = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (error) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <>
      <pre>{props.code}</pre>
      <button onClick={() => copyCode(props.code)}>Copy</button>
    </>
  );
};

export default DisplayCode;
