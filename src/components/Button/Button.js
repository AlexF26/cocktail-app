import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <button onClick={props.handleApi} className="search--button">
      {props.cta}
    </button>
  );
}

export default Button;
