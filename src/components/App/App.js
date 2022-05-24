import React from 'react';
import './App.scss';
import Button from '../Button/Button';
import CardData from '../Cards/Assets/carddata.json';
import Cards from '../Cards/Cards';

function App() {
  // set state for card layout
  const [cardState, handleCardState] = React.useState(
    CardData.drinks.map((apiData) => {
      return <Cards key={apiData.idDrink} apiData={apiData} />;
    })
  );
  console.log(cardState);

  return (
    <div className="content--container">
      <h1 className="content--headline">Find Yaself a Drink</h1>

      {/* hold search buttons */}
      <div className="search--container">
        <Button cta="Margarita" />
        <Button cta="Rum" />
        <Button cta="Whiskey" />
        <Button cta="Vodka" />
      </div>

      {/* hold cards */}
      <div className="cards--container">{cardState}</div>
    </div>
  );
}

export default App;
