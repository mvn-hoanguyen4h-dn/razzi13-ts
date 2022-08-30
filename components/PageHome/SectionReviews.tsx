import ReviewSlider from "../ReviewSlider";

const SectionReviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h6 className="section-subtitle">what buyers say</h6>
        <h3 className="section-title">latest buyers reviews</h3>
        <ReviewSlider />
      </div>
    </section>
  );
};

export default SectionReviews;
