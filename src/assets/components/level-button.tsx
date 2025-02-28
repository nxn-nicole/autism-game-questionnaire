import { useEffect } from "react";

const LevelButton = ({
  level,
  onClick,
  isSelected,
}: {
  level: string;
  onClick: (level: string) => void;
  isSelected: boolean;
}) => {
  useEffect(() => {}, [isSelected]);

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
