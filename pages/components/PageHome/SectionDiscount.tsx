import Image from "next/image";

const discountLeftImg = require("../../../assets/images/discount-left-img.webp");

function SectionDiscount() {
  return (
    <section className="section-discount">
      <div className="discount">
        <div className="discount-wrapper">
          <div className="discount-left">
            <div className="discount-left-img">
              <Image src={discountLeftImg} alt="discount-left-img" />
            </div>
          </div>
          <div className="discount-right">
            <div className="discount-right-wrapper">
              <h2>Give the best Gift ever, every time</h2>
              <p>
                Midst yielding replenish under replenish you one beginning his
                be, tree make them don’t made also fowl.
              </p>
              <div className="discount-right-circle">
                <span>save</span>
                <span>30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionDiscount;
