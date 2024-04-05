import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorProvider } from "../componentes/CalculatorProvider";
import Calculator from "../componentes/Calculator";
import Result from "../componentes/Result";

const RoutesApp = () => {
    return (
        <> 
        <Router>
                <Routes>
                    <Route exact path="/" element={<Calculator />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
        </Router> 
         
        </>
    )

}
export default RoutesApp;