import { useSelector } from "react-redux";
import { History } from './history.style';


const HistoryScreen = (props) => {
    const history = useSelector((state) => state.operations.history);
    return (
        <History id="history-screen">
            {history.length !== 0 && <>
            <h3>HISTORY</h3>
            {history.map(({formula, result}, index) => {
        return <p key={index} style={{fontSize: '18px'}}>{formula} = {result}</p>
    })}</>}
        </History>
    );
}

export default HistoryScreen;