import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPorto = () => {
  const porto = [
    {
      id: 1,
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/campos-bakery-website-design.jpg.webp",
      title: "Coffee Shop Website",
    },
    {
      id: 2,
      img: "https://cdn.dribbble.com/users/2947819/screenshots/16318196/media/2c0051d96474bf2721abe8de8ba798c6.png?compress=1&resize=1000x750&vertical=top",
      title: "Web Healty Food",
    },
    {
      id: 3,
      img: "https://cdn.dribbble.com/users/1535380/screenshots/15286447/media/afad399c86a41a6aa30307a4e2ec6c54.jpg?compress=1&resize=1000x750&vertical=top",
      title: "Website UMKM",
    },
    {
      id: 4,
      img: "https://cdn.dribbble.com/users/418188/screenshots/13934932/media/0958ed9761b0a3f95aa5cd0e18c8ce3a.png?compress=1&resize=1000x750&vertical=top",
      title: "Mobile App Apple",
    },
    {
      id: 5,
      img: "https://cdn.dribbble.com/users/2430856/screenshots/15500407/media/fe72b8dbb33bdd63bf92267f73016e2c.png?compress=1&resize=1000x750&vertical=top",
      title: "Design Mobile App",
    },
    {
      id: 6,
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/5_coffee-shop-websites.jpg.webp",
      title: "Website Beans Coffee",
    },
  ];
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
