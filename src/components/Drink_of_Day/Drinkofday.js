import React from 'react';
import './Drinkofday.scss';

function Drinkofday() {
  // get random cocktail
  const [randomDrink, setRandomDrink] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => {
        setRandomDrink(data.drinks[0]);
      });
  }, []);

  return (
    <>
      <h2 className="section--headline">Try out a random drink</h2>
      <div className="drinkofday--container">
        <div className="dod--content">
          <img
            className="dod--image"
            src={randomDrink.strDrinkThumb}
            alt={randomDrink.strDrinkThumb}
          />
          <div className="dod--information--container">
            <h1 className="dod--headline">{randomDrink.strDrink}</h1>
            <div className="dod--info--section">
              <div className="dod--description">Ingredients</div>
              <ul className="dod--ingredient--list">
                {randomDrink.strIngredient1 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient1}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure1}</span>
                  </li>
                )}
                {randomDrink.strIngredient2 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient2}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure2}</span>
                  </li>
                )}
                {randomDrink.strIngredient3 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient3}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure3}</span>
                  </li>
                )}
                {randomDrink.strIngredient4 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient4}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure4}</span>
                  </li>
                )}
                {randomDrink.strIngredient5 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient5}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure5}</span>
                  </li>
                )}
                {randomDrink.strIngredient6 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient6}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure6}</span>
                  </li>
                )}
                {randomDrink.strIngredient7 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient7}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure7}</span>
                  </li>
                )}
                {randomDrink.strIngredient8 && (
                  <li className="dod--Ingredient--item">
                    {randomDrink.strIngredient8}{' '}
                    <span className="dod--ingredient--msm">{randomDrink.strMeasure8}</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="dod--info--section">
              <div className="dod--description">Instructions</div>
              <p className="dod--instrution--paragraph">{randomDrink.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drinkofday;
