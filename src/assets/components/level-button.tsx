const LevelButton = ({
  level,
  onClick,
}: {
  level: string;
  onClick: (level: string) => void;
}) => {
  return (
    <button
      className="level-button"
      type="button"
      onClick={() => onClick(level)}
    >
      {level}
    </button>
  );
};

export default LevelButton;
