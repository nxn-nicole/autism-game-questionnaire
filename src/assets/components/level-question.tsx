import { useEffect, useState } from "react";
import LevelButton from "./level-button";

const levels = ["Level 0", "Level 1", "Level 2", "Level 3"];

const LevelQuestion = ({
  submitState,
  sectionIndex,
  onLevelSelect,
}: {
  submitState: boolean;
  sectionIndex: number;
  onLevelSelect: (level: string, sectionIndex: number) => void;
}) => {
  const [levelAnswer, setLevelAnswer] = useState<string | null>(null);

  const handleLevelChange = (level: string) => {
    setLevelAnswer(level);
    onLevelSelect(level, sectionIndex);
  };

  useEffect(() => {
    setLevelAnswer(null);
  }, [submitState]);

  return (
    <>
      <p className="notation">
        If your child has already received a professional autism diagnosis with
        an assigned support level, you may directly select the corresponding
        level here. If not, you may answer the provided questions.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {levels.map((level) => (
          <LevelButton
            level={level}
            onClick={handleLevelChange}
            isSelected={levelAnswer === level}
          />
        ))}
      </div>
    </>
  );
};

export default LevelQuestion;
