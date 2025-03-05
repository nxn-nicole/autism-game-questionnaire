import { forwardRef, useImperativeHandle, useRef } from "react";
import LevelExplanation from "./level-explanation";

const ResultPopup = forwardRef(
  ({ levelResult }: { levelResult: string[] }, ref) => {
    const questionTitle = ["A1", "A2", "A3", "B1", "B2", "B3", "B4"];
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
    }));

    return (
      <dialog
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        className="result-dialog"
      >
        <p
          style={{
            padding: "6px",
            fontWeight: "bold",
            color: "#2f4ed9",
            textAlign: "center",
          }}
        >
          Final Result
        </p>
        <button autoFocus className="close-button">
          X
        </button>

        <table className="level-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Severity Level for ASD</th>
            </tr>
          </thead>
          <tbody>
            {levelResult.map((level, index) => (
              <tr key={index}>
                <td>{questionTitle[index]}</td>
                <td>{level}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <LevelExplanation levelResult={levelResult} />
      </dialog>
    );
  }
);

export default ResultPopup;
