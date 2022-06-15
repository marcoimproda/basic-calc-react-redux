import { useState } from "react";

const Button = (props) => {
    const [hover, setHover] = useState(false);

    let style = {
        border: hover ? '1px solid darkGrey' : '1px solid black',
        color: 'white',
        opacity: hover ? '0.5' : '',
        backgroundColor: 'rgb(11, 21, 50)',
        fontSize: 'large',
        transition: '0.2s ease'
    }

    Object.assign(style, style, props.style);

    return (
        <button id={props.id} style={style} onClick={props.onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{props.value}</button>
    );
}

export default Button;