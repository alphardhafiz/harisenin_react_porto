import porto1 from "../assets/porto1.png";
import porto2 from "../assets/porto2.png";
import porto3 from "../assets/porto3.png";
import porto4 from "../assets/porto4.jpg";
import porto5 from "../assets/porto5.jpg";
import porto6 from "../assets/porto6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAngular,
  faVuejs,
  faWordpress,
  faApple,
  faDropbox,
  faFigma,
  faGit,
  faDribbble,
  faJava,
  faPython,
  faUnsplash,
  faSwift,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
// import { useEffect, useState } from "react";

function MainPortofolio() {
  const portoData = [
    {
      img: porto1,
      title: "Coffee Shop Website",
      icon1: faAngular,
      icon2: faWordpress,
      icon3: faGit,
      like: 24,
    },
    {
      img: porto2,
      title: "Web Healty Food",
      icon1: faJava,
      icon2: faPython,
      icon3: faUnsplash,
      like: 38,
    },
    {
      img: porto3,
      title: "Website UMKM",
      icon1: faSass,
      icon2: faVuejs,
      icon3: faFigma,
      like: 13,
    },
    {
      img: porto4,
      title: "Mobile App Apple",
      icon1: faApple,
      icon2: faSwift,
      icon3: faDropbox,
      like: 45,
    },
    {
      img: porto5,
      title: "Design Mobile App",
      icon1: faFigma,
      icon2: faDribbble,
      icon3: faReact,
      like: 37,
    },
    {
      img: porto6,
      title: "Website Beans Coffee",
      icon1: faSass,
      icon2: faVuejs,
      icon3: faFigma,
      like: 11,
    },
  ];

  return (
    <>
      <main className="main-porto">
        <h1>Portofolio</h1>
        <div className="portofolios">
          {portoData.map((data, i) => {
            return (
              <div key={i} className="porto-detail">
                <img src={data.img} alt={data.title} />
                <div className="detail">
                  <h2>{data.title}</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque eum est nemo animi in veritatis debitis exercitationem
                    sed nam nesciunt esse modi, dignissimos beatae consequatur
                    facere porro iste! Ipsa, nam!
                  </p>
                  <p>Teknologi yang digunakan:</p>
                  <div className="icons">
                    <div className="background-icon">
                      <FontAwesomeIcon className="icon" icon={data.icon1} />
                    </div>
                    <div className="background-icon">
                      <FontAwesomeIcon className="icon" icon={data.icon2} />
                    </div>
                    <div className="background-icon">
                      <FontAwesomeIcon className="icon" icon={data.icon3} />
                    </div>
                    <div
                      // onClick={tambahLike}
                      className="like-btn background-icon"
                    >
                      <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                      <p id="likes">{data.like}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default MainPortofolio;
