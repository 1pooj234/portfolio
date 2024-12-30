/* eslint-disable react/prop-types */
import "./Cube.css";
const Cube = ({ outlineColor, onlyOne = true, classRotate }) => {
  // style={{borderColor:`${!!outlineColor?outlineColor:''}`}}
  let cubeClass = "cube";
  if (classRotate == "c3") {
    cubeClass = "cube c3";
  } else if (classRotate === "c4") {
    cubeClass = "cube c4";
  } else {
    cubeClass = "cube";
  }
  return (
    <>
      <div className={cubeClass}>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face top"
        ></div>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face bottom"
        ></div>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face right"
        ></div>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face left"
        ></div>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face front"
        ></div>
        <div
          style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
          className="face back"
        ></div>
      </div>
      {onlyOne && (
        <div className="cube c2">
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face top"
          ></div>
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face bottom"
          ></div>
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face right"
          ></div>
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face left"
          ></div>
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face front"
          ></div>
          <div
            style={{ borderColor: `${outlineColor ? outlineColor : ""}` }}
            className="face back"
          ></div>
        </div>
      )}
    </>
  );
};

export default Cube;
