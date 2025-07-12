import "./Header.scss";

export default function Header({ name, score }) {
  return (
    <header>
      <div className="header">
        <div className="name">
          <p>{name.toUpperCase()}</p>
        </div>

        <div className="score">
          <p>SCORE</p>
          <p className="score-no">{score}</p>
        </div>
      </div>
    </header>
  );
}
