import React from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <Link className="card" to={`/Category/${props.data.idDrink}`}>
      <img className="card--image" src={props.data.strDrinkThumb} alt={props.data.strDrink} />
      <div className="card--title--container">
        <h3 className="card--title">{props.data.strDrink}</h3>
      </div>
    </Link>
  );
}

export default Cards;
