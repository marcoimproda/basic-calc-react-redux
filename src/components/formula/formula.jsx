import { useSelector } from "react-redux";
import { Formula } from './formula.style';

const FormulaScreen = (props) => {
    const formula = useSelector((state) => state.operations.formula)
    return (
        <Formula id="formula-screen">
            {formula.length > 25 ? 'FORMULA LIMIT EXCEEDED' : formula}
        </Formula>
    );
}

export default FormulaScreen;