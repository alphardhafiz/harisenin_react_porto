import profilImg from "../assets/profil-img.jpg";
// import PortoDetail3 from "./PortoDetail3";
import porto1Img from "../assets/porto1.png";
import porto2Img from "../assets/porto2.png";
import porto3Img from "../assets/porto3.png";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

function MainHome() {
  const portoData = [
    {
      img: porto1Img,
      judul: "Coffee Shop Website",
    },
    {
      img: porto2Img,
      judul: "Web Healty Food",
    },
    {
      img: porto3Img,
      judul: "Website UMKM",
    },
  ];

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
            {portoData.map((v, i) => {
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
