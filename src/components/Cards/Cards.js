import React from 'react';
import './Cards.scss';
import PlaceholderImage from './Assets/placeholder-image.png';

function Cards(props) {
  return (
    <a href="" className="card">
      <img className="card--image" src={props.apiData.strDrinkThumb} alt="placeholder image" />
      <div className="card--copy">
        <h3 className="card--title">{props.apiData.strDrink}</h3>
        <p className="card--instructions">{props.apiData.strInstructions}</p>
      </div>
    </a>
  );
}

export default Cards;
