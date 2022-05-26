import React from 'react';
import './App.scss';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';

function App() {
  // set initial state for card layout from cocktail api
  const [cardState, handleCardState] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      .then((res) => res.json())
      .then((data) =>
        handleCardState(
          data.drinks.map((data) => {
            return <Cards data={data} />;
          })
        )
      );
  }, []);

  // reusable api call on category button click
  function useHandleButtonFilter(event) {
    const buttonValue = event.target.innerText;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buttonValue}`)
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
  const buttonStuff = ['Tequila', 'Rum', 'Whiskey', 'Vodka', 'Bourbon', 'Beer', 'Wine', 'Gin'];
  const buttonsDisplay = buttonStuff.map((element) => {
    return <Button value={element} handleButton={useHandleButtonFilter} />;
  });

  return (
    <div className="content--container">
      <h1 className="content--headline">Find Yaself a Drink</h1>

      {/* hold search buttons */}
      <div className="search--container">{buttonsDisplay}</div>

      {/* hold cards */}
      <div className="cards--container">{cardState}</div>
    </div>
  );
}

export default App;
