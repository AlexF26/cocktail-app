import React from 'react';
import './Home.scss';
import Button from '../../components/Button/Button';
import Cards from '../../components/Cards/Cards';
import ButtonCategories from '../../components/Button/ButtonCategories';
import Drinkofday from '../../components/Drink_of_Day/Drinkofday';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';

function Home() {
  // set states
  const [cardState, handleCardState] = React.useState(null);
  const [buttonState, handleButtonState] = React.useState(ButtonCategories);
  const [buttonValue, setButtonValue] = React.useState(ButtonCategories[0].name);

  // map through data and display card components
  function generateAllCards(data) {
    return data.drinks.map((data) => {
      return <Cards data={data} key={data.idDrink} />;
    });
  }

  // generate button color state and card layout
  function useHandleButtonClick(id, value) {
    // switch button value to true if clicked and display blue background color
    handleButtonState(
      buttonState.map((element) => {
        return element.id === id ? { ...element, on: true } : { ...element, on: false };
      })
    );

    setButtonValue(value); // buttonValue state change to button category name clicked
  }

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buttonValue}`)
      .then((res) => res.json())
      .then((data) => handleCardState(generateAllCards(data)));
  }, [buttonValue]);

  // loop through ButtonCategories file and display button components
  const buttonMap = buttonState.map((element) => {
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

  const skeleLayout = [1, 2, 3, 4, 5, 6, 7, 8].map(() => <CardSkeleton />);

  return (
    <>
      <div className="hero--container">
        <div className="hero--content">
          <h1 className="content--headline">Find Yaself a Drink</h1>
          {/*Category buttons */}
          <div className="search--container">{buttonMap}</div>
        </div>
      </div>

      <div className="content--container">
        {/* Card Layout */}
        <section>
          <h2 className="section--headline">Find a drink with {buttonValue}</h2>
          {cardState && <div className="cards--container">{cardState} </div>}
          {!cardState && <div className="cards--container">{skeleLayout} </div>}
        </section>
        <section>
          <Drinkofday />
        </section>
      </div>
    </>
  );
}

export default Home;
