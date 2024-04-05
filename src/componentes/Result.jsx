
import { Link } from 'react-router-dom';
import { useCalculatorContext } from './CalculatorProvider';

function Result() {
    const { result, number, resetCalculator } = useCalculatorContext();

    const handleReset = () => {
        resetCalculator();
    }

    return (
        <>
        <div>
            <h1>Results</h1>
            <p>Selected Numbers: {number ? number.join('+') : ''}</p>
            <p>Total sum: {result}</p>
            <button onClick={handleReset}>Reset Calculator</button>
            <Link to="/">Back to Calculator</Link>
        </div>
        </>
    );
}

export default Result;
