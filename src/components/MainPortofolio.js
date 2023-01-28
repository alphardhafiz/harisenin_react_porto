import PerPorto from "./PerPorto";
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
import { useEffect } from "react";

export const porto = [
  {
    id: 1,
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/campos-bakery-website-design.jpg.webp",
    title: "Coffee Shop Website",
    icon1: faAngular,
    icon2: faWordpress,
    icon3: faGit,
    like: 19,
  },
  {
    id: 2,
    img: "https://cdn.dribbble.com/users/2947819/screenshots/16318196/media/2c0051d96474bf2721abe8de8ba798c6.png?compress=1&resize=1000x750&vertical=top",
    title: "Web Healty Food",
    icon1: faJava,
    icon2: faPython,
    icon3: faUnsplash,
    like: 38,
  },
  {
    id: 3,
    img: "https://cdn.dribbble.com/users/1535380/screenshots/15286447/media/afad399c86a41a6aa30307a4e2ec6c54.jpg?compress=1&resize=1000x750&vertical=top",
    title: "Website UMKM",
    icon1: faSass,
    icon2: faVuejs,
    icon3: faFigma,
    like: 13,
  },
  {
    id: 4,
    img: "https://cdn.dribbble.com/users/418188/screenshots/13934932/media/0958ed9761b0a3f95aa5cd0e18c8ce3a.png?compress=1&resize=1000x750&vertical=top",
    title: "Mobile App Apple",
    icon1: faApple,
    icon2: faSwift,
    icon3: faDropbox,
    like: 45,
  },
  {
    id: 5,
    img: "https://cdn.dribbble.com/users/2430856/screenshots/15500407/media/fe72b8dbb33bdd63bf92267f73016e2c.png?compress=1&resize=1000x750&vertical=top",
    title: "Design Mobile App",
    icon1: faFigma,
    icon2: faDribbble,
    icon3: faReact,
    like: 37,
  },
  {
    id: 6,
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/5_coffee-shop-websites.jpg.webp",
    title: "Website Beans Coffee",
    icon1: faSass,
    icon2: faVuejs,
    icon3: faFigma,
    like: 11,
  },
];

function MainPortofolio() {
  useEffect(() => {
    console.log(porto);
  });
  return (
    <>
      <main className="main-porto">
        <h1>Portofolio</h1>
        <div className="portofolios">
          {porto.map((data, i) => {
            return (
              <PerPorto
                id={data.id}
                key={i}
                img={data.img}
                title={data.title}
                icon1={data.icon1}
                icon2={data.icon2}
                icon3={data.icon3}
                like={data.like}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default MainPortofolio;
