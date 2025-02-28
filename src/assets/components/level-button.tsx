const LevelButton = ({
  level,
  onClick,
  isSelected,
}: {
  level: string;
  onClick: (level: string) => void;
  isSelected: boolean;
}) => {
  return (
    <button
      className={`level-button ${isSelected ? "selected" : ""}`}
      type="button"
      onClick={() => onClick(level)}
    >
      {level}
    </button>
  );
};

export default LevelButton;
