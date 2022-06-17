import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../store/calculator/index";
import { RootContainer, Container, Screens } from './calculator.style';
import { History, Backspace, Delete } from '@mui/icons-material';
import Button from "../button/button"
import FormulaScreen from "../formula/formula"
import DisplayScreen from "../display/display"
import HistoryScreen from '../history/history'


const Calculator = props => {
    const dispatch = useDispatch();
    const { clearFormula, add, subtract, multiply, divide, pushDigit, cancelDigit, eraseHistory, evaluateFormula, addDecimalPoint } = bindActionCreators(actionCreators, dispatch);
    const history = useSelector((state) => state.operations.history);
    const [showHistory, setShowHistory] = useState(false);

    return (
        <RootContainer id="rootContainer">
        {showHistory && <HistoryScreen />}
        {history.length !== 0 && showHistory && <Delete style={{cursor: 'pointer', color: 'white'}} onClick={() => { setShowHistory(!showHistory); eraseHistory();}}>X</Delete>}
        <Container id="container">
            <Screens id="screens">
                <FormulaScreen/>
                <DisplayScreen/>
            </Screens>
            {history.length !== 0 && <History style={{cursor: 'pointer'}} onClick={() => setShowHistory(!showHistory)}/>}
            <div id="buttons" className="grid grid-col-4" style={{height: '100%'}}>
                <Button id="clear" style={{gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: 'rgb(101, 111, 205)'}} onClick={() => clearFormula()}value="C"/>
                <Button id="cancel"  onClick={() => cancelDigit()} style={{backgroundColor: 'rgb(101, 111, 205)'}} value={<Backspace/>}/>
                <Button id="divide"  onClick={() => divide()} style={{backgroundColor: 'rgb(39, 206, 206)'}} value="÷"/>
                <Button id="multiply"  onClick={() => multiply()} style={{backgroundColor: 'rgb(39, 206, 206)'}} value="x"/>
                <Button id="seven"  onClick={() => pushDigit(7)} value="7"/>
                <Button id="eight"  onClick={() => pushDigit(8)} value="8"/>
                <Button id="nine"  onClick={() => pushDigit(9)} value="9"/>
                <Button id="subtract"  onClick={() => subtract()} style={{backgroundColor: 'rgb(39, 206, 206)'}} value="-"/>
                <Button id="four"  onClick={() => pushDigit(4)} value="4"/>
                <Button id="five"  onClick={() => pushDigit(5)} value="5"/>
                <Button id="six"  onClick={() => pushDigit(6)} value="6"/>
                <Button id="add"  onClick={() => add()} style={{backgroundColor: 'rgb(39, 206, 206)'}} value="+"/>
                <Button id="one"  onClick={() => pushDigit(1)} value="1"/>
                <Button id="two"  onClick={() => pushDigit(2)} value="2"/>
                <Button id="three"  onClick={() => pushDigit(3)} value="3"/>
                <Button id="equals"  onClick={() => evaluateFormula()} value="=" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 4, gridRowEnd: 6, backgroundColor: 'rgb(246, 16, 103)'}}/>
                <Button id="zero"   onClick={()=>{pushDigit(0)}} value="0" style={{gridColumnStart: 1, gridColumnEnd: 3}}/>
                <Button id="decimal"  onClick={() => addDecimalPoint()} value="."/>
            </div>
        </Container>
        </RootContainer>
    );
}

export default Calculator;