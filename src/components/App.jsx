import "./App.scss";
import Header from "./Header.jsx";
import Game from "./Game.jsx";
import Choice from "./Choice.jsx";

import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [gameType, setGameType] = useState(0);

  let level0 = [
    <Choice className="" iconName="rock" iconUrl="/images/icon-rock" />,
    <Choice className="" iconName="paper" iconUrl="/images/icon-paper.svg" />,
    <Choice
      className=""
      iconName="scissors"
      iconUrl="/images/icon-scissors.svg"
    />,
  ];

  let level1 = [
    ...level0,
    <Choice className="" iconName="lizard" iconUrl="/images/icon-lizard.svg" />,
    <Choice className="" iconName="spock" iconUrl="/images/icon-spock.svg" />,
  ];

  var gameName =
    gameType == 0 ? "rock paper scissors" : "rock paper scissors lizard spcok";

  function incScore() {
    setScore((prev) => prev++);
  }

  function changeGame() {
    setGameType((prev) => (prev = (prev + 1) % 2));
  }

  return (
    <div className="app">
      <Header name={gameName} score={score} />
      {/* <Game gameType={gameType}>
        {gameType
          ? level0.map((choice) => choice)
          : level1.map((choice) => choice)}
      </Game> */}
    </div>
  );
}
