import { useState, useEffect } from 'react';

const DisplayCode = (props) => {
  const [copyMessage, setcopyMessage] = useState('Copy');

  const copyCode = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setcopyMessage('Copied!');
    } catch (error) {
      setcopyMessage('Failed to copy!');
    }
  };

  useEffect(() => {
    setcopyMessage('Copy');
  }, [props.code]);

  return (
    <div className='flex flex-col items-center border border-gray-300 rounded-lg p-4 mt-4'>
      <code className='whitespace-pre-wrap'>{props.code}</code>
      <button
        onClick={() => copyCode(props.code)}
        className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md mt-4'
      >
        {copyMessage}
      </button>
    </div>
  );
};

export default DisplayCode;
