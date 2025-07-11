export default function Choice({ iconUrl, iconName, borderColor }) {
  return (
    <div className="choice">
      <img
        src={iconUrl}
        alt={iconName}
        className={`${iconName} ${borderColor}`}
      />
    </div>
  );
}
