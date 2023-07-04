import React from 'react';
import { Btn } from './Button.Style.js';

const Button = (props) => {
    return (
        <Btn variant={props.variant} type={props.type} onClick={props.onClick} value={props.text}/>
    )
}

export default Button;