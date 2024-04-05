import RoutesApp from './Routes/RoutesApp.jsx'
import './App.css';
import {CalculatorProvider} from'./componentes/CalculatorProvider.jsx'



function App() {
  return (
    <>
    <CalculatorProvider>
      <RoutesApp />
    </CalculatorProvider>
    </>
  );
}

export default App;