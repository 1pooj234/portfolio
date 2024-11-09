import "./Sec4.css";
/*
https://i.ibb.co/c3mb8sY/Smart-Select-20230910-221002-Chrome.webp
https://i.ibb.co/Y2rXbx8/Smart-Select-20230910-220902-Chrome.webp
https://i.ibb.co/q16Dv2R/Smart-Select-20230910-220837-Chrome.webp
*/
const classNames = [
  {
    projectName: "Shopping website",
    imageLink: "https://i.ibb.co/wChqj1B/ecommerce.png",
    sideClass1: "first-one side1",
    sideClass2: "first-one  side2",
    img1Class: "first-one type1",
    img2Class: "first-one type2",
    img3Class: "first-one  type3",
    img4Class: "first-one  type4",
    imageBoxClass: "image-box1",
    link: "https://poomsecommerce.netlify.app",
  },

  // {
  //   projectName: "Travel Plan Website",
  //   imageLink: "https://i.ibb.co/5r5GG5g/travel.webp",
  //   sideClass1: "third-one side5",
  //   sideClass2: "third-one side6",
  //   img1Class: "third-one type9",
  //   img2Class: "third-one type10",
  //   img3Class: "third-one type11",
  //   img4Class: "third-one type12",
  //   imageBoxClass: "image-box3",
  //   link: "https://64fc1023a6f3c42cb30768d8--stately-vacherin-0f53d9.netlify.app/",
  // },
  // {
  //   projectName: "Ecommerce Website",
  //   imageLink: "https://i.ibb.co/7b9z8YG/shop2.webp",
  //   sideClass1: "second-one side3",
  //   sideClass2: "second-one side4",
  //   img1Class: "second-one type5",
  //   img2Class: "second-one type6",
  //   img3Class: "second-one type7",
  //   img4Class: "second-one type8",
  //   imageBoxClass: "image-box2",
  //   link: "https://64fc73ac5e5dc3632c7bbe31--imaginative-gingersnap-05a6fb.netlify.app/",
  // },
  // {
  //   projectName: "Blogs Website",
  //   imageLink: "https://i.ibb.co/QMtgw9y/blogs.webp",
  //   sideClass1: "fourth-one side7",
  //   sideClass2: "fourth-one side8",
  //   img1Class: "fourth-one type13",
  //   img2Class: "fourth-one type14",
  //   img3Class: "fourth-one type15",
  //   img4Class: "fourth-one type16",
  //   imageBoxClass: "image-box3",
  //   link: "https://64fc156b07d1232fd9244d54--snazzy-crepe-ff6ac5.netlify.app/",
  // },
];

const Sec4 = () => {
  const display = classNames.map((classNameObj, index) => (
    <div className="project_cover" key={index}>
      <div>
        <h2 className="project-name">{classNameObj.projectName}</h2>
        <div className="image_holder">
          <a className="app-link" href={classNameObj.link} target="__blank">
            <div className={classNameObj.imageBoxClass}>
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img1Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img2Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img3Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img4Class}`}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="sec4">
      <div className="clp1"></div>
      <div className="clp2"></div>
      <div className="clp3"></div>
      <h1 className="project-text">Projects</h1>
      <div className="images_sec">{display}</div>
    </div>
  );
};

export default Sec4;
