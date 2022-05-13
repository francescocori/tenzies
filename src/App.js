import "./App.css";

function App() {
  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">
        <div className="die">1</div>
        <div className="die">2</div>
        <div className="die">3</div>
        <div className="die">4</div>
        <div className="die">5</div>
        <div className="die">6</div>
        <div className="die">7</div>
        <div className="die">8</div>
        <div className="die">9</div>
        <div className="die">10</div>
      </div>
    </main>
  );
}

export default App;
