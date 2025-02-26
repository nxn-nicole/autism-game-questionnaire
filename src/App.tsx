import { useEffect, useState } from "react";
import "./index.css";
import { questionSections } from "./questionSections";
import "rc-slider/assets/index.css";
import CustomSlider from "./assets/components/custom-slider";

function App() {
  const [responses, setResponses] = useState(Array(70).fill(0));

  const handleChange = (index: number, value: number) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    const totalSum = responses.reduce((acc, num) => acc + num, 0);
    console.log("Total Sum:", totalSum);
    setResponses((prev) => [...prev.map(() => 0)]);
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
          let questionOffset = questionSections
            .slice(0, sectionIndex)
            .reduce((sum, sec) => sum + sec.questions.length, 0);
          return (
            <div key={sectionIndex} className="section">
              <h2 className="second-title">{section.title}</h2>
              {section.questions.map((question, index) => {
                const globalIndex = questionOffset + index;
                return (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="question">
                      <label>
                        {index + 1}. {question}
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontWeight: "bold",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ paddingRight: "10px" }}>Never</span>
                      <CustomSlider
                        point={responses[globalIndex]}
                        index={globalIndex}
                        onChange={handleChange}
                      ></CustomSlider>
                      <span style={{ paddingLeft: "10px" }}>Always</span>
                    </div>
                  </div>
                );
              })}
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
