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
    <>
      <Navbar />
      <form>
        <input
          type='text'
          placeholder='Enter GitHub Username or Address'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type='submit' onClick={getMarkdownCodeWithUsername}>
          GitHub Username
        </button>
        <button type='submit' onClick={getMarkdownCodeWithAddress}>
          Address
        </button>
      </form>

      {markdownCode && <DisplayCode code={markdownCode} />}
      {errors && <DisplayError errorValue={errors} />}
    </>
  );
}

export default App;
