import { addToCart } from "../slices/appSlices";

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

export const handleAddToCart = (dispatch, product, id, category) => {
  const { productID, price, productDescription, imageUrl } = product;
  const qtyValue = parseInt(document.getElementById("quantity").value);
  const cartItem = {
    productID,
    productDescription,
    imageUrl,
    price,
    qty: qtyValue,
    totalAmount: price * qtyValue,
    url: `/${category}/${productID}`,
  };
  dispatch(addToCart({ cartItem, id }));
};

export const getProduct = (shop, category, productID) => {
  const categoryArray = shop.filter((item) => item.category === category)[0]
    .data;

  return categoryArray.filter((item) => item.productID === productID)[0];
};

export const cart_qty = (cart1, cart2) => {
  const qtyArr = cart1.map((id) => {
    const qty = () => {
      for (let item of cart2) {
        if (item.productID === id) {
          return item.qty;
        }
      }
    };
    return qty();
  });
  const buyCartQty = qtyArr.reduce((prev, curr) => prev + curr, 0);
  return buyCartQty;
};

export const cart_Amount = (cart1, cart2) => {
  const qtyArr = cart1.map((id) => {
    const qty = () => {
      for (let item of cart2) {
        if (item.productID === id) {
          return item.totalAmount;
        }
      }
    };
    return qty();
  });
  const buyCartAmount = qtyArr.reduce((prev, curr) => prev + curr, 0);
  return buyCartAmount;
};

// ORDER NUMBER GENERATOR

export function orderNumber(id) {
  const num = (id) => {
    const idArr = id.split("");
    let finalNum = [];
    for (let i = 0; i < 10; i++) {
      idArr.map((x) => {
        if (x === i.toString()) {
          finalNum.push(i);
        }
      });
    }
    return finalNum.reduce((acc, en) => acc * en, 1);
  };

  let now = Date.now().toString();
  now += now + Math.floor(Math.random() * 10);
  let lead = now.slice(0, 4);

  return [
    (parseInt(lead) + num(id)).toString(),
    now.slice(4, 10),
    now.slice(10, 14),
  ].join("-");
}

// HANDLE ORDER FUNCTION

export const handleOrders = (cartItems, buyCart, id, orders) => {
  // Extract ordered items from the cart
  const orderedItems = buyCart.map((id) => {
    const product = cartItems.find((item) => item.productID === id);
    return product;
  });

  const orderAmount = orderedItems.reduce(
    (acc, prod) => acc + prod.totalAmount,
    0
  );

  // Remove ordered items from cart
  const newCartItems = cartItems.filter(
    (item) => !buyCart.includes(item.productID)
  );

  // Get the order date and generate order number.
  const order_date = new Date().toJSON();
  const orderDate = new Date(order_date)
    .toString()
    .split(" ")
    .slice(1, 4)
    .join(" ");

  const order_Number = orderNumber(id);

  // Add the date of the order to the ordered items details
  const newOrderedItems = orderedItems.map((item) => {
    return { ...item, orderDate: orderDate };
  });

  // Add the new order to the database orders array.
  const newOrders = [
    ...orders,
    {
      orderNumber: order_Number,
      orderItems: newOrderedItems,
      orderDate,
      orderAmount,
    },
  ];

  return { newOrders, newOrderedItems, newCartItems, orderDate };
};
