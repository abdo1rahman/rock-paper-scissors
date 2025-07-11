import Choice from "./Choice.jsx";

export default function Game({ gameType }) {
  return <div className={gameType ? "pentagon" : "triangle"}></div>;
}
