import React from 'react';
import './Cards.scss';
import { useNavigate } from 'react-router-dom';

function Cards(props) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/Category/${props.data.idDrink}`);
      }}
      className="card"
    >
      <img className="card--image" src={props.data.strDrinkThumb} alt={props.data.strDrink} />
      <div className="card--title--container">
        <h3 className="card--title">{props.data.strDrink}</h3>
      </div>
    </div>
  );
}

export default Cards;
