import "./App.css";
import Die from "./Components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      let die = {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      };

      newDice.push(die);
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  const rollDice = () => {
    setDice(allNewDice());
  };

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">
        {dice.map((die, index) => (
          <Die
            value={die.value}
            key={die.id}
            isHeld={die.isHeld}
            holdDice={holdDice}
            id={die.id}
          />
        ))}
      </div>
      <button className="roll-btn" onClick={rollDice}>
        roll
      </button>
    </main>
  );
}

export default App;
