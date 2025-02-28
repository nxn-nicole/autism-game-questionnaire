import { useState } from "react";
import "./index.css";
import { questionSections } from "./questionSections";
import "rc-slider/assets/index.css";
import LevelQuestion from "./assets/components/level-question";
import DetailedQuestions from "./assets/components/detailed-questions";

function App() {
  const [levels, setLevels] = useState<string[]>(Array(7).fill("Level *"));
  const questionTitle = ["A1", "A2", "A3", "B1", "B2", "B3", "B4"];
  const [submitState, setSubmitState] = useState<boolean>(false);

  const handleLevel = (level: string, index: number) => {
    setLevels((prev) => {
      const newLevels = [...prev];
      newLevels[index] = level;
      return newLevels;
    });
  };

  const handleSubmit = () => {
    levels.map((answer, index) => {
      console.log(`${questionTitle[index]}: ${answer}`);
    });
    setLevels((prev) => [...prev.map(() => "Level *")]);
    setSubmitState(true);
  };

  return (
    <div className="container">
      <h1 className="first-title">Autism Questionnaire</h1>
      <p>
        Please answer the following questions to receive a personalised result
        for your child.
      </p>
      <p className="notation">
        The scores presented here will be evaluated according to the criteria
        established in the Diagnostic and Statistical Manual of Mental isorders
        (DSM-5) and supported by research from leading studies in autism
        spectrum disorder (American Psychiatric Association, 2013).
      </p>
      <form>
        {questionSections.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex} className="section">
              <h2 className="second-title">{section.title}</h2>
              <LevelQuestion
                onLevelSelect={(level, sectionIndex) =>
                  handleLevel(level, sectionIndex)
                }
                sectionIndex={sectionIndex}
              ></LevelQuestion>
              <DetailedQuestions
                submitState={submitState}
                sectionIndex={sectionIndex}
                onSlider={(level, sectionIndex) =>
                  handleLevel(level, sectionIndex)
                }
              ></DetailedQuestions>
            </div>
          );
        })}
      </form>
      <p className="notation">
        *All results related to your child's assessment will remain confidential
        and will only be used for the purposes of improving their experience
        with the game and for providing personalized recommendations.*
      </p>
      <p className="notation">
        *Please note that these scores are not a clinical diagnosis. We strongly
        recommend that you consult with a healthcare professional to obtain a
        comprehensive assessment and diagnosis*
      </p>
      <div style={{ textAlign: "center" }}>
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
