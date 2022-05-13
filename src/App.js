import "./App.css";
import Die from "./Components/Die";
import { useState } from "react";

function App() {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      let die = Math.floor(Math.random() * 6) + 1;
      newDice.push(die);
    }
    return newDice;
  };
  const [dice, setDice] = useState(allNewDice());

  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">
        {dice.map((die, index) => (
          <Die value={die} key={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
