// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link-nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/portofolio">
              Portofolio
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/kontak">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
