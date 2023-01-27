import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function PerPorto({ id, img, title, icon1, icon2, icon3, like }) {
  const [suka, setSuka] = useState(Number(like));
  const tambahSuka = () => {
    setSuka(suka + 1);
  };

  return (
    <div className="porto-detail">
      <Link to={`/porto/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <div className="detail">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eum
          est nemo animi in veritatis debitis exercitationem sed nam nesciunt
          esse modi, dignissimos beatae consequatur facere porro iste! Ipsa,
          nam!
        </p>
        <p>Teknologi yang digunakan:</p>
        <div className="icons">
          <div className="background-icon">
            <FontAwesomeIcon className="icon" icon={icon1} />
          </div>
          <div className="background-icon">
            <FontAwesomeIcon className="icon" icon={icon2} />
          </div>
          <div className="background-icon">
            <FontAwesomeIcon className="icon" icon={icon3} />
          </div>
          <button onClick={tambahSuka} className="like-btn background-icon">
            <FontAwesomeIcon className="icon" icon={faThumbsUp} />
            {suka}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerPorto;
