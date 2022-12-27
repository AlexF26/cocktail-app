import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.scss';

function Category() {
  let { id } = useParams();
  const [drink, setDrink] = React.useState('');

  React.useEffect(() => {
    async function getCategoryData() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setDrink(data.drinks[0]);
    }
    getCategoryData();
  }, [id]);

  return (
    <>
      <div className='hero--container hero__category'>
        <div className='hero--content'>
          <h1 className='content--headline'>{drink.strDrink}</h1>
        </div>
      </div>
      {/* drink content */}
      <div className='category--container'>
        <div className='category--drink--container'>
          <img
            className='drink--image'
            src={drink.strDrinkThumb}
            alt={drink.strDrinkThumb}
          />
          <div className='information--container'>
            <div className='info--section'>
              <div class='description'>Ingredients</div>
              <ul class='ingredient--list'>
                {drink.strIngredient1 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient1}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure1}</span>
                  </li>
                )}
                {drink.strIngredient2 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient2}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure2}</span>
                  </li>
                )}
                {drink.strIngredient3 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient3}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure3}</span>
                  </li>
                )}
                {drink.strIngredient4 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient4}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure4}</span>
                  </li>
                )}
                {drink.strIngredient5 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient5}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure5}</span>
                  </li>
                )}
                {drink.strIngredient6 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient6}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure6}</span>
                  </li>
                )}
                {drink.strIngredient7 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient7}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure7}</span>
                  </li>
                )}
                {drink.strIngredient8 && (
                  <li className='Ingredient--item'>
                    {drink.strIngredient8}{' '}
                    <span className='ingredient--msm'>{drink.strMeasure8}</span>
                  </li>
                )}
              </ul>
            </div>
            <div className='info--section'>
              <div class='description'>Instructions</div>
              <p class='instruction--paragraph'>{drink.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
