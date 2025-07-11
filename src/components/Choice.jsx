export default function Choice({ iconUrl, iconName, borderColor }) {
  return (
    <button className="choice">
      <img
        src={iconUrl}
        alt={iconName}
        className={`${iconName} ${borderColor}`}
      />
    </button>
  );
}
