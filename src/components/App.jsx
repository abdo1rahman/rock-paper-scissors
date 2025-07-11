import "./App.scss";
import Header from "./Header.jsx";
import Game from "./Game.jsx";

import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [gameType, setGameType] = useState(0);

  var gameName =
    gameType == 0 ? "rock paper scissors" : "rock paper scissors lizard spcok";

  return (
    <div className="app">
      <Header name={gameName} score={score} />
      <Game gameType={gameType} />
    </div>
  );
}

export default App;
