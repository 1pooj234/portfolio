import "./Cube.css";
const Cube = () => {
  // style={{borderColor:`${!!outlineColor?outlineColor:''}`}}
  return (
    <>
      <div className="cube">
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
      <div className="cube c2">
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
    </>
  );
};

export default Cube;
