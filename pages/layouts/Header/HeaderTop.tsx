import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top-wrapper">
          <div className="header-top-left">
            <div className="header-freeship">
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
                className="header-freeship-icon"
              >
                <path
                  d="M11.2273 9.66667V1H1V9.66667H11.2273ZM11.2273 9.66667H16V6.33333L13.9545 4.33333H11.2273V9.66667ZM5.77273 11.3333C5.77273 12.2538 5.00958 13 4.06818 13C3.12679 13 2.36364 12.2538 2.36364 11.3333C2.36364 10.4129 3.12679 9.66667 4.06818 9.66667C5.00958 9.66667 5.77273 10.4129 5.77273 11.3333ZM14.6364 11.3333C14.6364 12.2538 13.8732 13 12.9318 13C11.9904 13 11.2273 12.2538 11.2273 11.3333C11.2273 10.4129 11.9904 9.66667 12.9318 9.66667C13.8732 9.66667 14.6364 10.4129 14.6364 11.3333Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              free shipping over $100
            </div>
            <ul className="header-top-list">
              <li className="header-top-item header-currency">
                <Link href="#">
                  <a className="header-top-link">
                    usd
                    <MdOutlineKeyboardArrowDown className="header-top-icon" />
                  </a>
                </Link>
                <ul className="header-top-droplist">
                  <li className="header-top-dropitem">
                    <Link href="">
                      <a>usd</a>
                    </Link>
                  </li>
                  <li className="header-top-dropitem">
                    <Link href="">
                      <a>euro</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header-top-item header-language">
                <Link href="#">
                  <a className="header-top-link">
                    English
                    <MdOutlineKeyboardArrowDown className="header-top-icon" />
                  </a>
                </Link>
                <ul className="header-top-droplist">
                  <li className="header-top-dropitem">
                    <Link href="#">
                      <a>english</a>
                    </Link>
                  </li>
                  <li className="header-top-dropitem">
                    <Link href="#">
                      <a>france</a>
                    </Link>
                  </li>
                  <li className="header-top-dropitem">
                    <Link href="#">
                      <a>germany</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-top-right">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">Shipping</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">FAQ</a>
                </Link>
              </li>
              <li className="header-nav-item">
                <Link href="#">
                  <a className="header-nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <ul className="header-icon-list">
              <li className="header-icon-item">
                <Link href="#">
                  <a className="header-icon-link">
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li className="header-icon-item">
                <Link href="#">
                  <a className="header-icon-link">
                    <FaTwitter />
                  </a>
                </Link>
              </li>
              <li className="header-icon-item">
                <Link href="#">
                  <a className="header-icon-link">
                    <BsInstagram />
                  </a>
                </Link>
              </li>
              <li className="header-icon-item">
                <Link href="#">
                  <a className="header-icon-link">
                    <FaPinterestP />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
