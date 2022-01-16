import React from "react";
import "./ShopItemInfo.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { formatter } from "../utils";
import { starRate } from "../utils";
import {
  addToCart,
  totalCartAmount,
  totalCartQty,
  totalCartItemAmount,
} from "../../slices/appSlices";

const ShopItemInfo = () => {
  const { category, productID } = useParams();
  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const categoryArray = shop.shopData.filter(
    (item) => item.category === category
  )[0].data;

  const product = categoryArray.filter(
    (item) => item.productID === productID
  )[0];

  const handleMouseOver = (image) => {
    let thumbnailBig = document.querySelector(".product_image-thumbnails-big");
    thumbnailBig.setAttribute("style", `background-image: url(${image})`);
  };

  const handleClick = () => {
    const { productID, imageUrl, productDescription, price } = product;
    const qtyValue = parseInt(document.getElementById("quantity").value);
    const cartItem = {
      productID,
      imageUrl,
      productDescription,
      price,
      qty: qtyValue,
      totalAmount: 0,
    };
    dispatch(addToCart(cartItem));
    dispatch(totalCartQty());
    dispatch(totalCartItemAmount());
    dispatch(totalCartAmount());
  };

  const price = formatter.format(product.price);
  const currency = price.split("").slice(0, 3).join("");
  const priceFraction = price
    .split("")
    .slice(price.length - 2, price.length)
    .join("");
  const priceValue = price
    .split("")
    .slice(4, price.length - 3)
    .join("");

  console.log(product);

  return (
    <>
      {/* <Header /> */}
      <div className="shopItemInfo-container">
        <header className="shopItemInfo_header">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/39/Associates/anghami/ILM/1349010_ILM_Anghami_Prime_650x45_en._CB640813627_.jpg"
            alt="ad"
          />
        </header>
        <section className="shopItemInfo_product">
          <div className="shopItemInfo_product-image">
            <ul className="product_image-thumbnails">
              {product.productInfo.infoImages.map((image, i) => (
                <li
                  className="product_image-thumbnail"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  onMouseOver={() => handleMouseOver(image)}
                  key={i}
                ></li>
              ))}
            </ul>
            <div
              className="product_image-thumbnails-big"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
            ></div>
          </div>
          <div className="shopItemInfo_product-details">
            <p className="shopItemInfo_product-description">
              {product.productDescription}
            </p>
            <div
              className="shopItemInfo_product-rating"
              style={{ backgroundImage: `url(${starRate(product.rating)})` }}
            ></div>
            <div className="shopItemInfo_product-info">
              <table className="product-info-table">
                <tbody>
                  {product.productInfo.details.map((row, i) => (
                    <tr key={i}>
                      <td className="product-info_title">{row.title}</td>
                      <td className="product-info_value">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="shopItemInfo_product-options">
            <div className="product_options-wrapper">
              <p className="product_options-price">
                <span className="currencySymbol">{currency}</span>
                <span className="priceValue">{priceValue}</span>
                <span className="priceFraction">{priceFraction}</span>
              </p>
              <p className="product_options-txt">
                Free Shipping if you order within 20hrs
              </p>
              <label htmlFor="quantity">Qty:</label>
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <div className="product_options-buttons">
                <button
                  className="addToCart-btn product_options-btn"
                  onClick={() => handleClick()}
                >
                  Add to Cart
                </button>
                <button className="buyNow-btn product_options-btn">
                  Buy Now
                </button>
              </div>
              <p>Delivered by Amazon.ae</p>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ShopItemInfo;
