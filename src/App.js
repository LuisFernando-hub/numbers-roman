import React, { useState } from 'react';

const RomanConverter = () => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];


  const toRoman = (number) => {
    if (number < 1 || number > 3999) return "Número fora do intervalo permitido (1-3999)";
    
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
      const { value, numeral } = romanNumerals[i];
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
    return result;
  };

  const [numberInput, setNumberInput] = useState('');
  const [romanResult, setRomanResult] = useState('');

  const handleNumberChange = (e) => {
    setNumberInput(e.target.value);
  };

  const convertToRoman = () => {
    const number = parseInt(numberInput, 10);
    if (isNaN(number)) {
      setRomanResult("Por favor, insira um número válido.");
      return;
    }
    setRomanResult(toRoman(number));
  };

  return (
    <div>
      <h2>Converter Número para Romano</h2>
      <input 
        type="text" 
        value={numberInput} 
        onChange={handleNumberChange} 
        placeholder="Insira um número" 
      />
      <button onClick={convertToRoman}>Converter</button>
      <p id="resultRoman">{romanResult}</p>
    </div>
  );
};

const RomanToNumberConverter = () => {
  const romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  //14 - XIV
  const fromRoman = (roman) => {
    let number = 0;
    let i = 0;

    while (i < roman.length) {
      let twoChar = roman.substring(i, i + 2);
      let oneChar = roman.substring(i, i + 1);

      if (romanNumerals[twoChar]) {
        number += romanNumerals[twoChar];
        i += 2;
      } else if (romanNumerals[oneChar]) {
        number += romanNumerals[oneChar];
        i += 1;
      } else {
        return "Número romano inválido";
      }
    }
    return number;
  };

  const [romanInput, setRomanInput] = useState('');
  const [numberResult, setNumberResult] = useState('');

  const handleRomanChange = (e) => {
    setRomanInput(e.target.value.toUpperCase());
  };

  const convertToNumber = () => {
    if (!romanInput) {
      setNumberResult("Por favor, insira um número romano.");
      return;
    }
    setNumberResult(fromRoman(romanInput));
  };

  return (
    <div>
      <h2>Converter Romano para Número</h2>
      <input 
        type="text" 
        value={romanInput} 
        onChange={handleRomanChange} 
        placeholder="Insira um número romano" 
      />
      <button onClick={convertToNumber}>Converter</button>
      <p id="resultReal">{numberResult}</p>
    </div>
  );
};

const App = () => (
  <div>
    <RomanConverter />
    <RomanToNumberConverter />
  </div>
);

export default App;
