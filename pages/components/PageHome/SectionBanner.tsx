import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const babyImg3 = require("../../../assets/images/baby-img3.webp");

function SectionBanner() {
  return (
    <section className="section-banner">
      <div className="banner-top">
        <Link href="#">
          <a className="banner-top-link banner-top-img1" />
        </Link>
        <div className="banner-top-img">
          <div className="banner-top-info">
            <span>
              Classic <span className="banner-holiday">Holiday</span> styles
              from
            </span>
            <span className="banner-price">$19.99</span>
            <Link href="#">
              <a className="btn btn-info">
                shop now
                <IoIosArrowRoundForward className="info-icon" />
              </a>
            </Link>
          </div>
        </div>
        <Link href="">
          <a className="banner-top-link banner-top-img2" />
        </Link>
      </div>
      <div className="banner-bottom">
        <div className="container">
          <div className="banner-bottom-wrapper row row-no-gutters">
            <div className="col-largest-6 col-medium-6 col-small-12">
              <div className="banner-bottom-left">
                <div className="banner-bottom-info">
                  <h2 className="banner-title">New 2022 Winter collection</h2>
                  <p className="banner-description">
                    Appear, dry there darkness they&lsquo;re seas, dry waters
                    thing fly midst. Beast, above fly brought Very green.
                  </p>
                  <Link href="#">
                    <a className="btn btn-underline">Discover more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-largest-6 col-medium-6 col-small-12">
              <div className="banner-bottom-right">
                <div className="banner-bottom-img">
                  <Image src={babyImg3} alt="Baby Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBanner;
