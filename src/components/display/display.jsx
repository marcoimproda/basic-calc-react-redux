import { useSelector } from "react-redux";
import { Display } from './display.style';

const DisplayScreen = () => {
    const display = useSelector((state) => state.operations.display)
    return (
    <Display id="display">
        {display.length > 15 ? 'DIGI LIMIT EXCEEDED' : display}
    </Display>
    );
}

export default DisplayScreen;