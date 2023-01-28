import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { porto } from "./MainPortofolio";

const DetailPorto = () => {
  let { id } = useParams();
  const detail = porto.filter((x) => x.id === Number(id));
  const imgDetail = detail.map((data) => data.img);
  const titleDetail = detail.map((data) => data.title);
  return (
    <div className="detail-perPorto">
      <h1>{titleDetail}</h1>
      <div className="detail">
        <img src={imgDetail} alt="" />
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, fugiat saepe. Provident temporibus modi placeat dolor
            dicta! Repudiandae minus architecto earum nesciunt voluptates totam
            quas dolor enim, error officia ut?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            soluta sapiente non et blanditiis saepe, veniam nesciunt sit, odio
            ex recusandae eaque itaque pariatur distinctio ad laboriosam impedit
            aut. Tempore voluptas, odio repellendus hic sunt tenetur quae autem.
            Doloremque, ipsam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            optio minus minima aliquid unde ipsum dolores sint tenetur velit
            eaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, fugiat saepe. Provident temporibus modi placeat dolor
            dicta! Repudiandae minus architecto earum nesciunt voluptates totam
            quas dolor enim, error officia ut?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            soluta sapiente non et blanditiis saepe, veniam nesciunt sit, odio
            ex recusandae eaque itaque pariatur distinctio ad laboriosam impedit
            aut. Tempore voluptas, odio repellendus hic sunt tenetur quae autem.
            Doloremque, ipsam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            optio minus minima aliquid unde ipsum dolores sint tenetur velit
            eaque.
          </p>
        </div>
      </div>
      <Link className="btn-kembali" to="/portofolio">
        <button className="btn">Kembali</button>
      </Link>
    </div>
  );
};

export default DetailPorto;
