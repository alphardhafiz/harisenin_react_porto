import profilImg from "../assets/profil-img.jpg";
import { Link } from "react-router-dom";
import { porto } from "./MainPortofolio";

function MainHome() {
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
              if (i < 3) {
                return (
                  <div key={i} className="porto-detail-3">
                    <img src={v.img} alt={v.title} />
                    <div className="judul-deskripsi">
                      <h4>{v.title}</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                );
              } else {
                return <></>;
              }
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
