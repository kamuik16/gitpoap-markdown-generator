import React, { useState } from 'react';
import {
  generateMarkdownCodeWithUsername,
  generateMarkdownCodeWithAddress,
} from './helpers/getMarkdowncode';
import Navbar from './components/Navbar';
import DisplayCode from './components/DisplayCode';
import DisplayError from './components/DisplayError';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [markdownCode, setMarkdownCode] = useState('');
  const [errors, setErrors] = useState('');

  const getMarkdownCodeWithUsername = async (e) => {
    e.preventDefault();

    if (inputValue === '') {
      setErrors('Invalid input!');
      setMarkdownCode('');
      return;
    }

    const output = await generateMarkdownCodeWithUsername(inputValue);
    if (output.result) {
      setMarkdownCode(output.result);
      setErrors('');
    } else {
      setErrors(output.error);
      setMarkdownCode('');
    }
  };

  const getMarkdownCodeWithAddress = async (e) => {
    e.preventDefault();

    if (inputValue === '') {
      setErrors('Invalid input!');
      setMarkdownCode('');
      return;
    }

    const output = await generateMarkdownCodeWithAddress(inputValue);
    if (output.result) {
      setMarkdownCode(output.result);
      setErrors('');
    } else {
      setErrors(output.error);
      setMarkdownCode('');
    }
  };

  return (
    <div style={{ backgroundColor: '#10111E' }} className='text-white min-h-screen'>
      <Navbar />
      <div className='container mx-auto mt-6'>
        <form className='flex flex-col items-center'>
          <input
            type='text'
            placeholder='Enter GitHub Username or Address'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className='w-96 p-2 mb-4 rounded-md border border-gray-300 text-center text-black bg-white'
          />
          <div className='flex space-x-4'>
            <button
              type='submit'
              onClick={getMarkdownCodeWithUsername}
              className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md'
            >
              GitHub Username
            </button>
            <button
              type='submit'
              onClick={getMarkdownCodeWithAddress}
              className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md'
            >
              Address
            </button>
          </div>
        </form>

        {markdownCode && <DisplayCode code={markdownCode} />}
        {errors && <DisplayError errorValue={errors} />}
      </div>
    </div>
  );
}

export default App;
