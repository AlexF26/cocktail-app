import React from 'react';
import './App.scss';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';

function App() {
  // set state for card layout
  const [buttonState, handleButtonState] = React.useState(true);
  const [cardState, handleCardState] = React.useState();

  // set startup state for card arrangement
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

  function HandleButtonFilter(event) {
    const buttonValue = event.target.innerText;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buttonValue}`)
      .then((res) => res.json())
      .then((data) =>
        handleCardState(
          data.drinks.map((data) => {
            return <Cards data={data} clicked={buttonState} />;
          })
        )
      );
  }

  return (
    <div className="content--container">
      <h1 className="content--headline">Find Yaself a Drink</h1>

      {/* hold search buttons */}
      <div className="search--container">
        <Button value="Tequila" clicked={buttonState} handleButton={HandleButtonFilter} />
        <Button value="Rum" clicked={buttonState} handleButton={HandleButtonFilter} />
        <Button value="Whiskey" clicked={buttonState} handleButton={HandleButtonFilter} />
        <Button value="Vodka" clicked={buttonState} handleButton={HandleButtonFilter} />
        <Button value="Bourbon" clicked={buttonState} handleButton={HandleButtonFilter} />
      </div>

      {/* hold cards */}
      <div className="cards--container">{cardState}</div>
    </div>
  );
}

export default App;
