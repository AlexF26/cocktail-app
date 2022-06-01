import React from 'react';
import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import ButtonCategories from '../../App/ButtonCategories';
import './Home.scss';
import Drinkofday from '../../components/Drink_of_Day/Drinkofday';

function Home() {
  // set initial state for card layout/button values/headline name
  const [cardState, handleCardState] = React.useState([]);
  const [buttonState, handleButtonState] = React.useState(ButtonCategories);
  const [h2Name, seth2Name] = React.useState(ButtonCategories[0].name);

  // card layout state init
  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ButtonCategories[0].name}`)
      .then((res) => res.json())
      .then((data) => handleCardState(generateAllCards(data)));
  }, []);

  // card generating callback
  function generateAllCards(data) {
    return data.drinks.map((data) => {
      return <Cards data={data} key={data.idDrink} />;
    });
  }

  // gereate button color state and card layout
  function useHandleButtonClick(id, value) {
    seth2Name(value);
    handleButtonState(
      buttonState.map((element) => {
        return element.id === id ? { ...element, on: true } : { ...element, on: false };
      })
    );

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => handleCardState(generateAllCards(data)));
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
        <section>
          <h2 className="section--headline">Find a drink with {h2Name}</h2>
          <div className="cards--container">{cardState} </div>
        </section>
        <section>
          <Drinkofday />
        </section>
      </div>
    </>
  );
}

export default Home;
