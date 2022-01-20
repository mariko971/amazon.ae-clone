import {
  addToCart,
  totalCartAmount,
  totalCartQty,
  totalCartItemAmount,
} from "../slices/appSlices";
import { addToFirebaseCart } from "../firebase/firebase.utils";

export const scrollNext = (id) => {
  const wrapper = document.querySelector(`.slider-${id}`);
  wrapper.scrollLeft += 1400;
};

export const scrollBack = (id) => {
  const wrapper = document.querySelector(`.slider-${id}`);
  wrapper.scrollLeft -= 1400;
};

export const starRate = (rating) => {
  switch (rating) {
    case 0.5:
      return "/assets/0.5-star.jpg";
    case 1.0:
      return "/assets/1.0-star.jpg";
    case 1.5:
      return "/assets/1.5-star.jpg";
    case 2.0:
      return "/assets/2.0-star.jpg";
    case 2.5:
      return "/assets/2.5-star.jpg";
    case 3.0:
      return "/assets/3.0-star.jpg";
    case 3.5:
      return "/assets/3.5-star.jpg";
    case 4.0:
      return "/assets/4.0-star.jpg";
    case 4.5:
      return "/assets/4.5-star.jpg";
    case 5.0:
      return "/assets/5.0-star.jpg";
    default:
      return "";
  }
};

export const filteredData = (data, filtersObj) => {
  const filtersKeysArr = Object.keys(filtersObj);
  const dataItemFilters = Object.keys(data[0]);
  const ItemFilters = filtersKeysArr.filter((filter) =>
    dataItemFilters.includes(filter)
  );

  let newData = data;
  ItemFilters.forEach((el) => {
    switch (el) {
      case "rating":
        newData =
          filtersObj[el] &&
          [...newData].filter((item) => item[el] >= filtersObj[el]);
        break;
      default:
        if (filtersObj[el].length > 0) {
          newData = [...newData].filter((item) =>
            filtersObj[el].includes(item[el])
          );
        }
    }
  });
  return newData;
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AED",
  minimumFractionDigits: 2,
});

export function truncate(str) {
  return str.split(" ").length > 28
    ? str.split(" ").slice(0, 28).join(" ") + "..."
    : str;
}

export const formatPrice = (productPrice) => {
  const price = formatter.format(productPrice);
  const currency = price.split("").slice(0, 3).join("");
  const fraction = price
    .split("")
    .slice(price.length - 2, price.length)
    .join("");
  const value = price
    .split("")
    .slice(4, price.length - 3)
    .join("");

  return { currency, value, fraction };
};

export const handleAddToCart = (dispatch, product, id) => {
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
  addToFirebaseCart(cartItem, id);
};

export const getProduct = (shop, category, productID) => {
  const categoryArray = shop.shopData.filter(
    (item) => item.category === category
  )[0].data;

  return categoryArray.filter((item) => item.productID === productID)[0];
};
