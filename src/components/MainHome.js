import profilImg from "../assets/profil-img.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function MainHome() {
  const [porto, setPorto] = useState([
    {
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/campos-bakery-website-design.jpg.webp",
      judul: "Coffee Shop Website",
    },
    {
      img: "https://cdn.dribbble.com/users/2947819/screenshots/16318196/media/2c0051d96474bf2721abe8de8ba798c6.png?compress=1&resize=1000x750&vertical=top",
      judul: "Web Healty Food",
    },
    {
      img: "https://cdn.dribbble.com/users/1535380/screenshots/15286447/media/afad399c86a41a6aa30307a4e2ec6c54.jpg?compress=1&resize=1000x750&vertical=top",
      judul: "Website UMKM",
    },
  ]);

  return (
    <>
      <main className="main-home">
        <section className="hero">
          <img src={profilImg} alt="foto profil" />
          <h1>Selamat Datang di Personal Web Saya</h1>
        </section>
        <section className="porto-singkat">
          <h2>Portofolio Saya</h2>
          <div className="list-porto-singkat">
            {porto.map((v, i) => {
              return (
                <div key={i} className="porto-detail-3">
                  <img src={v.img} alt={v.judul} />
                  <div className="judul-deskripsi">
                    <h4>{v.judul}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-lebih-banyak">
            <Link className="btn" to="/portofolio">
              Lebih Banyak
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainHome;
