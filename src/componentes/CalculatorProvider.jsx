import { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [number, setNumber] = useState([]); 
  const [result, setResult] = useState("");

  const addNumber = (newNumber) => {
    setNumber([...number, newNumber.toString()]); 
  };

  const sumNumber = () => {
    const sum = number.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0); 
    setResult(sum.toString()); 
    return sum;
  };

  const resetCalculator = () => {
    setNumber([]);
    setResult("");
  };

  return (
    <CalculatorContext.Provider value={{ number, result, resetCalculator, sumNumber, addNumber }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => useContext(CalculatorContext);
