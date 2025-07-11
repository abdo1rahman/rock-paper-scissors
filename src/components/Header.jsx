export default function Header({ name, score }) {
  const type = name.split(" ");
  return (
    <div className="header">
      <div className="name">
        {type.map((choice) => (
          <p> {choice.toUpper()} </p>
        ))}
      </div>
      <div className="score">
        <p>SCORE</p>
        <p className="score">{score}</p>
      </div>
    </div>
  );
}
