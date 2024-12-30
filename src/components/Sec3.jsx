import { useEffect, useState } from "react";
import "./Sec3.css";
import Cube from "../ui/Cube";
let firstTime = true;
const Sec3 = () => {
  const [yoffset, setYoffset] = useState(0);
  const scrollDownEvent = () => {
    setYoffset(window.scrollY);
    if (firstTime) {
      if (window.scrollY > 2000) {
        firstTime = false;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, []);
  let skillClass1 = yoffset > 2000 ? "skills1 movin-out" : "skills1";
  let skillClass2 = "skills2";
  if (yoffset > 2000) {
    skillClass2 = "skills2 movin-in";
  }
  let sb1Class = firstTime
    ? yoffset > 1700
      ? "b1 slide1"
      : "b1"
    : "b1 slide1";
  let sb2Class = firstTime
    ? yoffset > 1700
      ? "b1 slide2"
      : "b1"
    : "b1 slide2";

  let drop1Class = firstTime
    ? yoffset > 2002
      ? "b2 drop drop-type2"
      : "b2"
    : "b2 drop drop-type2";
  let drop2Class = firstTime
    ? yoffset > 2002
      ? "b2 drop drop-type1"
      : "b2"
    : "b2 drop drop-type1";
  return (
    <div className="sec3">
      <div className="skill-heading">
        <h2>Skills</h2>
        <div className="levels-hor">
          <p>Beginner</p>
          <p>Intermediate</p>
          <p>Advance</p>
        </div>
        <div
          className={skillClass1}
          style={{
            transform: `scaleX(${yoffset / 2000}) translateY(${
              yoffset / 225
            }px)`,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <div className="main-box1">
            <div className="hori">
              <div className={sb1Class}>
                <Cube
                  outlineColor="rgba(102, 255, 0, 0.98)"
                  onlyOne={false}
                  classRotate="c3"
                />
                <h3>JavaScript</h3>
              </div>
            </div>
            {/* <div className="slant-block type1 sbl"></div>
            <div className="slant-block type1 sbr"></div> */}
            <div className="hori">
              <div className={sb1Class}>
                <Cube
                  outlineColor="rgba(251, 255, 0, 0.98)"
                  onlyOne={false}
                  classRotate="c4"
                />
                <div>
                  <h3 className="speh">Wire</h3>
                  <h3 className="speh">Framing</h3>
                </div>
              </div>
            </div>
            {/* <div className="slant-block type2 sbl"></div>
            <div className="slant-block type2 sbr"></div> */}
            <div className="hori">
              <div className={sb1Class}>
                <Cube
                  outlineColor="rgba(102, 255, 0, 0.98)"
                  onlyOne={false}
                  classRotate="c3"
                />

                <h3>HTML</h3>
              </div>
            </div>
            <div className="hori">
              <div className={sb2Class}>
                <Cube
                  outlineColor="rgba(251, 255, 0, 0.98)"
                  onlyOne={false}
                  classRotate="c4"
                />

                <h3 className="speh">Git-version</h3>
                <h3 className="speh">Control</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className={skillClass2}
          style={{
            transform: `translateY(${-yoffset / 5}px)`,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <div className="levels-ver">
            <p>Beginner </p>
            <p>Intermediate</p>
            <p>Advance</p>
          </div>
          <div className="ver">
            <div className={drop1Class}>
              <Cube onlyOne={false} />
              React
            </div>
          </div>
          <div className="ver">
            <div className={drop1Class}>
              <Cube onlyOne={false} classRotate="c4" />
              Redux
            </div>
          </div>
          <div className="ver">
            <div className={drop1Class}>
              <Cube onlyOne={false} />
              CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
