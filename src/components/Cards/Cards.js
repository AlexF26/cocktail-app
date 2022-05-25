import React from 'react';
import './Cards.scss';

function Cards(props) {
  return (
    <a href="/" className="card">
      <img className="card--image" src={props.data.strDrinkThumb} alt={props.data.strDrink} />
      <div className="card--copy">
        <h3 className="card--title">{props.data.strDrink}</h3>
        <p className="card--instructions">{props.data.strInstructions}</p>
      </div>
    </a>
  );
}

export default Cards;
