export default function Choice({ iconName, iconUrl }) {
  return (
    <button className="choice">
      <img src={iconUrl} alt={iconName} className={iconName} />
    </button>
  );
}
