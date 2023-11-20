/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';
// import math from 'mathjs';

function Calculadora() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
    setResult(eval(input) || '');
    } catch (error) {
    setResult('Error');
    }
    };
//   const handleCalculate = () => {
    
//     let inputFormatted = input;

//     inputFormatted = inputFormatted.replace(/pow\(/gi, "**");
//     inputFormatted = inputFormatted.replace(/sin\(/gi, "math.sin("); 
//     inputFormatted = inputFormatted.replace(/cos\(/gi, "math.cos(");
//     inputFormatted = inputFormatted.replace(/tan\(/gi, "math.tan("); 
//     inputFormatted = inputFormatted.replace(/log\(/gi, "math.log(");
//     inputFormatted = inputFormatted.replace(/exp\(/gi, "math.exp("); 

//     try {
      
//       if(inputFormatted.includes("**")) {
    
//         let [base, exponent] = inputFormatted.split("**");
//         setResult(math.pow(base, exponent));
//       } else {
//         setResult(math.eval(inputFormatted));  
//       }

//     } catch (error) {
//       setResult('Error');
//     }

//   };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (/^[0-9+\-*/\n]$/.test(key)) {
      event.preventDefault();
      handleInput(key);
    } else if (key === 'Enter') {
      event.preventDefault();
      handleCalculate();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className="calculator" tabIndex={0}>
      <Display input={input} result={result} />
      <Keypad handleInput={handleInput} handleClear={handleClear} handleCalculate={handleCalculate} />
    </div>
  );
}
export default Calculadora;