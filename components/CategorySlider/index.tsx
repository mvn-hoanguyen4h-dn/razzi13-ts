import Link from "next/link";
import { Component } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider, { CustomArrowProps } from "react-slick";
import { CategoryProps } from "../../modules/types";

export const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return (
    <div {...props}>
      <button className="btn btn-right">
        <RiArrowRightSLine className="category-slide-icon" />
      </button>
    </div>
  );
};

export const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return (
    <div {...props}>
      <button className="btn btn-left">
        <RiArrowLeftSLine className="category-slide-icon" />
      </button>
    </div>
  );
};

export default class CategorySlider extends Component<CategoryProps> {
  constructor(props: CategoryProps) {
    super(props);
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      prevArrow: { PrevArrow },
      nextArrow: { NextArrow },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className={"category-slide" + " " + this.props.className}>
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {this.props.category.map((item) => (
            <div key={item.name} className="category-slide-item">
              <div className="category-slide-wrapper">
                <Link href="#">
                  <a className="category-slide-link">
                    <span className="category-slide-img">{item.img}</span>
                    <p>{item.name}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
