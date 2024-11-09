import "./Sec1.css";
const Sec1 = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: 2724,
      behavior: "smooth",
    });
  };
  return (
    <div className="sec1">
      <div className="container_spec">
        <div className="spec">
          <div>
            <h1 className="hero_text">Hello!</h1>
            <h1 className="hero_text">I'm Poojesh</h1>
          </div>
          <div className="analytics">
            <div className="cov">
              <div className="ver1"></div>
            </div>
            <div className="cov">
              <div className="ver2"></div>
            </div>
            <div className="cov">
              <div className="ver3"></div>
            </div>
            <div className="base"></div>
          </div>
        </div>
        <div>
          <h2 className="hero_para">
            I am a web developer specializing in creating high-quality websites.
          </h2>
          <div className="btn_work_cov">
            {/* <button onClick={scrollToContact} className="work_button">
              About me
            </button>
            <button onClick={scrollToProjects} className="work_button">
              See my work
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sec1;
