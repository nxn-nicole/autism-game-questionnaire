import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

const CustomSlider = ({
  index,
  onChange,
  point,
}: {
  index: number;
  onChange: (index: number, newValue: number) => void;
  point: number;
}) => {
  const handleRender: SliderProps["handleRender"] = (node, props) => {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {node}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            color: "#2f4ed9",
            padding: "2px 5px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {props.value}
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: 300 }}>
      <Slider
        min={0}
        max={10}
        value={point}
        id={index.toString()}
        onChange={(newValue) => onChange(index, newValue as number)}
        handleRender={handleRender}
        styles={{
          track: { backgroundColor: "#2f4ed9" },
          handle: { borderColor: "#2f4ed9" },
          rail: { backgroundColor: "#ddd" },
        }}
      />
    </div>
  );
};

export default CustomSlider;
