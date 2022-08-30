import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCheckLine } from "react-icons/ri";
import { ProductItemProps } from "../../modules/types";
import formatCurrency from "../../utilities/formatCurrency";

const SectionProducts: React.FC<{ products: ProductItemProps[] }> = ({
  products,
}) => {
  return (
    <section className="products">
      <h6 className="section-subtitle">top selling</h6>
      <h3 className="section-title">Top Wekeend Sellers</h3>
      <div className="container">
        <ul className="row product-list">
          {products.map((product) => (
            <li
              key={product.id}
              className="col-6 col-small-4 col-medium-4 col-wide-3 col-large-3 col-largest-3 product-item"
            >
              <div className="product-wrapper">
                <div className="product-feature">
                  {product.status && (
                    <span
                      className={
                        "product-status" +
                        (product.status === "sold out" ? " soldout" : " hot")
                      }
                    >
                      {product.status}
                    </span>
                  )}
                  {product.discount && (
                    <span className="product-discount">{product.discount}</span>
                  )}
                </div>
                <Link href="#">
                  <a>
                    <Image
                      src={product.images[0]}
                      className="product-img"
                      alt="image 1"
                      width={570}
                      height={684}
                    />
                    {product.images[1] && (
                      <Image
                        src={product.images[1]}
                        className="product-img-2"
                        alt="image-2"
                        width={570}
                        height={684}
                      />
                    )}
                  </a>
                </Link>
                <div className="product-content">
                  <div className="product-top">
                    <div className="product-info">
                      <h2 className="product-name">
                        <Link href="#">
                          <a>{product.name}</a>
                        </Link>
                      </h2>
                      <p className="product-category">
                        <Link href="#">
                          <a>{product.category}</a>
                        </Link>
                      </p>
                    </div>
                    {product.salePrice ? (
                      <span className="product-sale-price">
                        <span>{formatCurrency(product.normalPrice)}</span>
                        <span>{formatCurrency(product.salePrice)}</span>
                      </span>
                    ) : (
                      <span className="product-price">
                        <span>{formatCurrency(product.normalPrice)}</span>
                      </span>
                    )}
                    {product.button && (
                      <button className="btn btn-product">
                        {product.button}
                      </button>
                    )}
                  </div>
                  <div className="product-bottom">
                    <div className="product-more">
                      {product.colors && (
                        <ul className="product-color-list">
                          {product.colors.map((color) => (
                            <li
                              className={`product-color-item bg-${color}`}
                              key={color}
                            >
                              <RiCheckLine className="product-icon" />
                              <span className="notice-tooltip">{color}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {product.options && (
                        <div className="product-options">
                          <select name="options">
                            <option>Choose an option</option>
                            {product.options.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="product-actions">
                      <h6 className="product-action">
                        <Link href="#">
                          <a>{product.action}</a>
                        </Link>
                      </h6>
                      <ul className="product-icon-list">
                        <li className="product-icon-item">
                          <Link href="#">
                            <a>
                              <BsEye />
                              <span className="notice-tooltip">quick view</span>
                            </a>
                          </Link>
                        </li>
                        <li className="product-icon-item">
                          <AiOutlineHeart />
                          <span className="notice-tooltip">wishlist</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link href="#">
          <a className="btn btn-underline">Discover more</a>
        </Link>
      </div>
    </section>
  );
};

export default SectionProducts;
