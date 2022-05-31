import React from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';
import ButtonCategories from './ButtonCategories';
import './App.scss';

function App() {
  // set initial state for card layout from cocktail api
  const [cardState, handleCardState] = React.useState([]);
  const [buttonState, handleButtonState] = React.useState(ButtonCategories);

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ButtonCategories[0].name}`)
      .then((res) => res.json())
      .then((data) =>
        handleCardState(
          data.drinks.map((data) => {
            return <Cards data={data} key={data.idDrink} drinkNum={data.idDrink} />;
          })
        )
      );
  }, []);

  // runs on category button click to update button state and render new array of cards
  function useHandleButtonClick(id, value) {
    // match button object id value to the one clicked to swap "on" value to true or false
    handleButtonState(
      buttonState.map((element) => {
        return element.id === id ? { ...element, on: true } : { ...element, on: false };
      })
    );

    // call to database with the clicked category button value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) =>
        handleCardState(
          data.drinks.map((data) => {
            return <Cards data={data} handleNewLayout={generateLayout} />;
          })
        )
      );
  }

  function generateLayout(data) {
    handleCardState(
      <div>
        <h1>{data.strDrink}</h1>
        <img src={data.strDrinkThumb} alt={data.strDrink} />
      </div>
    );
  }

  // loop and display all buttons
  const buttonsDisplay = buttonState.map((element) => {
    return (
      <Button
        key={element.id}
        value={element.name}
        id={element.id}
        on={element.on}
        useHandleButtonClick={useHandleButtonClick}
      />
    );
  });

  return (
    <>
      <div className="hero--container">
        <div className="hero--content">
          <h1 className="content--headline">Find Yaself a Drink</h1>
          {/*Category buttons */}
          <div className="search--container">{buttonsDisplay}</div>
        </div>
      </div>
      <div className="content--container">
        {/* Card Layout */}
        <div className="cards--container">{cardState}</div>
      </div>
    </>
  );
}

export default App;
