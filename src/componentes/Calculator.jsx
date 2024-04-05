import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCalculatorContext } from './CalculatorProvider';

function Calculator() {
    const { number, result, resetCalculator, sumNumber, addNumber } = useCalculatorContext();
    const [selected, setSelected] = useState(false);

    const handleNumberClick = (number) => {
        addNumber(number);
        setSelected(!selected);
    }
 
    return (
        <>
        <div>
            <h1>Calculator</h1>
            <input type='text' value={number} readOnly/>
            <div>
                {[...Array(10).keys()].map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                    </button>    
                ))}
            </div>
            <Link to="/result" onClick={sumNumber}>See Result</Link> 
        </div>
        </>
    );
}

export default Calculator;
