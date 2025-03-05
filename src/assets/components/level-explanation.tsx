const LevelExplanation = ({ levelResult }: { levelResult: string[] }) => {
  const level1 = [];
  const level2 = [];
  const level3 = [];
  const questionTitle = ["A1", "A2", "A3", "B1", "B2", "B3", "B4"];
  for (let i = 0; i < levelResult.length; i++) {
    if (levelResult[i] === "Level 1") {
      level1.push(questionTitle[i]);
    } else if (levelResult[i] === "Level 2") {
      level2.push(questionTitle[i]);
    } else if (levelResult[i] === "Level 3") {
      level3.push(questionTitle[i]);
    }
  }
  console.log("level1:", level1);
  console.log("levelResult:", levelResult);
  return (
    <div>
      <p className="notation">
        Based on your child's assessment results, we have carefully selected
        games tailored to their needs. These games are designed to support their
        development while ensuring an engaging and enjoyable experience.
      </p>
      {level1.length != 0 && (
        <div>
          <strong>🔹Level 1 - 'Requiring Support'</strong>
          <p>
            Your child gets Level 1 in {level1.join(", ")}. We recommend playing
            the following game to enhance their skills while keeping them
            engaged:
          </p>
        </div>
      )}

      {level2.length != 0 && (
        <div>
          <strong>🔹Level 2 - 'Requiring Substantial Support'</strong>
          <p>
            Your child gets Level 2 in {level2.join(", ")}. To support their
            development, we suggest the following game, which is designed to
            improve specific abilities in a fun and interactive way:
          </p>
        </div>
      )}

      {level3.length != 0 && (
        <div>
          <strong>🔹Level 3 - 'Requiring Very Substantial Support'</strong>
          <p>
            Your child gets Level 3 in {level3.join(", ")}. We have carefully
            chosen the following game to provide gentle and structured support,
            helping them progress at their own pace:
          </p>
        </div>
      )}
    </div>
  );
};

export default LevelExplanation;
