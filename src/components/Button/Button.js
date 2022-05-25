import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <button onClick={props.handleButton} className="search--button">
      {props.value}
    </button>
  );
}

export default Button;
