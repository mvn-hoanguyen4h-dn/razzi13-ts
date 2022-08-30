import Link from "next/link";
import { BiSearch } from "react-icons/bi";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-bottom-wrapper">
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">home</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">shop</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">pages</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">blog</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">features</a>
                </Link>
              </li>
            </ul>
          </nav>
          <form className="form-search">
            <input className="search-input" placeholder="Search for items" />
            <button className="btn btn-search">
              <BiSearch className="search-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
