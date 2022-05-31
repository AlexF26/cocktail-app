import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <button
      onClick={() => props.useHandleButtonClick(props.id, props.value)}
      className={`search--button ${props.on && 'selected'}`}
    >
      {props.value}
    </button>
  );
}

export default Button;
