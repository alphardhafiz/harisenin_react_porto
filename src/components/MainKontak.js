import imgProfile from "./../assets/profil-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faComputer } from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function MainKontak() {
  return (
    <div className="main-kontak">
      <div className="title">
        <h1>Kontak Saya</h1>
      </div>
      <div className="kontak-detail">
        <img src={imgProfile} alt="profile" />
        <div className="kontak-deskripsi">
          <h2>Halo, Saya Alphard</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, totam
            voluptate, ad deleniti veritatis doloribus a autem ducimus
            reprehenderit voluptas officiis incidunt laudantium adipisci minus!
            Nostrum reprehenderit animi maxime possimus.
          </p>
          <p className="skills">Keahlian:</p>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faFigma} /> Web Design
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faComputer} /> Web
              Programming
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faDatabase} /> Database
            </li>
          </ul>
          <div className="icon-sosmed">
            <div className="icon-background">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </div>
            <div className="icon-background">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </div>
            <div className="icon-background">
              <FontAwesomeIcon className="icon" icon={faYoutube} />
            </div>
            <div className="icon-background">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </div>
            <div className="icon-background">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainKontak;
