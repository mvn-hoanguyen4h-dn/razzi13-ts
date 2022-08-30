import Image from "next/image";
import { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import { reviews } from "../../data";

export default class ReviewSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="review-slider">
        <Slider {...settings}>
          {reviews.map((review) => {
            const starTotal = 5;
            const starPercent = (review.rate / starTotal) * 100;
            const starPercentRounded = `${Math.round(starPercent / 10) * 10}%`;

            return (
              <div className="review-item" key={review.id}>
                <div className="review-content">
                  <div className="review-top">
                    <div className="review-img">
                      <Image src={review.image} alt={review.name} />
                    </div>
                    <div className="review-info">
                      <span className="review-category">{review.category}</span>
                      <h6 className="review-name">{review.name}</h6>
                      <div className="review-rating">
                        <div className="stars-outer">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <div
                            className="stars-inner"
                            style={{ width: `${starPercentRounded}` }}
                          >
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="review-desc">{review.description}</p>
                  <div className="review-bottom">
                    <span>{review.author}</span>
                    {", "}
                    <span>{review.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
