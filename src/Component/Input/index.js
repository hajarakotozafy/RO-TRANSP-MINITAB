import React from 'react';
import { Input } from './Input.Style';

const handleChange = event => {
//   const result = event.target.value.replace(/[^0-9]/gi, '');
    event.target.value.replace(/[^0-9]/gi, '');
};

const InputNumber = (props) => {
  return (
      <Input
        name={props.name}
        disabled={props.disabled}
        type="number" 
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === '-' || event.key === '+' || event.key === '.' || event.key === ',' || event.key === 'e') {
            event.preventDefault();
          }
        }} 
        required
      />
  )
}

export default InputNumber;
