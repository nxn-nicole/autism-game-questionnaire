import { useEffect, useState } from "react";
import dropdownImage from "../pictures/dropdown-48.png";
import { questionSections } from "../../questionSections";
import CustomSlider from "./custom-slider";

const DetailedQuestions = ({
  submitState,
  sectionIndex,
  onSlider,
}: {
  submitState: boolean;
  sectionIndex: number;
  onSlider: (level: string, index: number) => void;
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [responses, setResponses] = useState(Array(10).fill(0));

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleChange = (index: number, value: number) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
    const totalSum = newResponses.reduce((acc, num) => acc + num, 0);
    let level = "Level 0";
    if (totalSum > 17 && totalSum < 36) {
      level = "Level 1";
    } else if (totalSum >= 36 && totalSum < 54) {
      level = "Level 2";
    } else if (totalSum >= 54 && totalSum < 71) {
      level = "Level 3";
    }

    onSlider(level, sectionIndex);
    console.log(level);
  };

  useEffect(() => {
    setOpenDropDown(false);
    setResponses(Array(10).fill(0));
  }, [submitState]);

  return (
    <>
      <button type="button" className="dropdown" onClick={handleDropDown}>
        <img
          src={dropdownImage}
          alt="Dropdown Icon"
          width="40"
          height="40"
        ></img>
      </button>
      {openDropDown &&
        questionSections[sectionIndex].questions.map((question, index) => {
          let questionOffset = questionSections
            .slice(0, sectionIndex)
            .reduce((sum, sec) => sum + sec.questions.length, 0);
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
                  point={responses[index]}
                  index={index}
                  onChange={handleChange}
                ></CustomSlider>
                <span style={{ paddingLeft: "10px" }}>Always</span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DetailedQuestions;
