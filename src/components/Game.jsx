export default function Game({ gameType, children }) {
  return <div className={gameType ? "pentagon" : "triangle"}>{children}</div>;
}
