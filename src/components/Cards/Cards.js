import React from 'react';
import './Cards.scss';

function Cards(props) {
  return (
    <a href="/" className="card">
      <img className="card--image" src={props.data.strDrinkThumb} alt={props.data.strDrink} />
      <div className="card--copy">
        <h3 className="card--title">{props.data.strDrink}</h3>
      </div>
      {/* <div className="list--container"> */}
      {/* <div className="desc--title">Ingredients</div>
          <ul className="ingredients--list">
            {props.data.strIngredient1 && (
              <li className="list-item">
                {props.data.strIngredient1}: {props.data.strMeasure1}
              </li>
            )}
            {props.data.strIngredient2 && (
              <li className="list-item">
                {props.data.strIngredient2}: {props.data.strMeasure2}
              </li>
            )}
            {props.data.strIngredient3 && (
              <li className="list-item">
                {props.data.strIngredient3}: {props.data.strMeasure3}
              </li>
            )}
            {props.data.strIngredient4 && (
              <li className="list-item">
                {props.data.strIngredient4}: {props.data.strMeasure4}
              </li>
            )}
            {props.data.strIngredient5 && (
              <li className="list-item">
                {props.data.strIngredient5}: {props.data.strMeasure5}
              </li>
            )}
            {props.data.strIngredient6 && (
              <li className="list-item">
                {props.data.strIngredient6}: {props.data.strMeasure6}
              </li>
            )}
            {props.data.strIngredient7 && (
              <li className="list-item">
                {props.data.strIngredient7}: {props.data.strMeasure7}
              </li>
            )}
            {props.data.strIngredient8 && (
              <li className="list-item">
                {props.data.strIngredient8}: {props.data.strMeasure8}
              </li>
            )}
          </ul> */}
      {/* </div> */}
    </a>
  );
}

export default Cards;
