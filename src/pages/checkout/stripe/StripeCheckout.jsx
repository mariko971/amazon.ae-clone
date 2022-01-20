import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JAWf9IdKkYcWqWqgzOffmvGbLVP8cq1cY5wwKHmpzh4Q37gUzpinU3hLhUDkoQsFjO22JHzpcU8bIuyti0NmC5U00xwv9mAvD";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Place Order"
      name="Mariko Fashion Ltd."
      // billingAddress
      // shippingAddress
      image="https://www.vectorico.com/download/brands/amazon-icon.png"
      description={`your total is AED ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
