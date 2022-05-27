import React from 'react';
import './App.scss';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';
import ButtonCategories from './ButtonCategories';

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
            return <Cards data={data} key={data.idDrink} />;
          })
        )
      );
  }, []);

  // runs on category button click to update button state and render new array of cards
  function useHandleButtonFilter(id, value) {
    // match button object id value to the one clicked to swap "on" value to true or false
    handleButtonState(
      ButtonCategories.map((element) => {
        return element.id === id ? { ...element, on: true } : { ...element, on: false };
      })
    );

    // call to database with the clicked category button value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) =>
        handleCardState(
          data.drinks.map((data) => {
            return <Cards data={data} />;
          })
        )
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
        useHandleButtonFilter={useHandleButtonFilter}
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
