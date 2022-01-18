import React from "react";
import "./Shipping.css";
import { countryList } from "./shipping.utils";
import { addShippingAddress } from "../../firebase/firebase.utils";

const Shipping = ({ currentUser }) => {
  console.log(currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingForm = document.getElementById("shipping-form");
    const shippingInfo = {
      country: shippingForm.country.value,
      fullName: shippingForm.fullname.value,
      phoneNumber: shippingForm.phoneNumber.value,
      street: shippingForm.street.value,
      buildingName: shippingForm.buildingName.value,
      city: shippingForm.city.value,
      area: shippingForm.area.value,
      landmark: shippingForm.landmark.value,
      deliveryTime: shippingForm.delivery.value,
      defaultAddress: shippingForm.defaultAddress.checked,
    };
    console.log(shippingInfo);
    addShippingAddress(currentUser.id, shippingInfo).then(() => {
      shippingForm.reset();
    });
  };
  return (
    <div className="shipping-container">
      <div className="shipping-wrapper">
        <h1>Select a Shipping Address</h1>
        <h2 className="shipping-wrapper-title">Add a new Address</h2>
        <form id="shipping-form" onSubmit={handleSubmit}>
          <div className="shipping-region formInput">
            <label htmlFor="country"> Country/region</label>
            <select name="country" id="country">
              {countryList.map((country, i) => (
                <option value={country} key={i}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="shipping-fullname formInput">
            <label htmlFor="fullname">Full name (First and Last name)</label>
            <input type="text" name="fullname" id="fullname" required />
          </div>
          <div className="shipping-tel formInput">
            <label htmlFor="phoneNumber">Mobile number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" required />
            <p>May be used to assist delivery</p>
          </div>
          <div className="shipping-street formInput">
            <label htmlFor="street">Street Name</label>
            <input type="text" name="street" id="street" required />
          </div>
          <div className="shipping-building formInput">
            <label htmlFor="buildingName">
              Building Name/no., floor, Apt. or villa no.
            </label>
            <input type="text" name="buildingName" id="buildingName" required />
          </div>
          <div className="shipping-city formInput">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" required />
          </div>
          <div className="shipping-area formInput">
            <label htmlFor="area">Area/District</label>
            <input type="text" name="area" id="area" required />
          </div>
          <div className="shipping-landmark formInput">
            <label htmlFor="landmark">Nearest Landmark</label>
            <input type="text" name="landmark" id="landmark" />
          </div>
          <h2 className="delivery-title">Add delivery instructions</h2>
          <p className="addressType">Address type</p>
          <div className="delivery-time">
            <span>
              <input
                type="radio"
                id="delivery"
                name="delivery"
                value="7am-9pm"
                required
              />
              <label htmlFor="delivery">Home (7am-9pm, all days)</label>
            </span>
            <span>
              <input
                type="radio"
                id="delivery"
                name="delivery"
                value="9am-6pm"
              />
              <label htmlFor="delivery">Office (9am-6pm, weekdays)</label>
            </span>
          </div>
          <p className="defaultAddress">
            <input
              type="checkbox"
              name="defaultAddress"
              id="defaultAddress"
              value={true}
            />
            <label htmlFor="defaultAddress">Use as my default address.</label>
          </p>
          <button className="shipping-form-btn" type="submit">
            Add address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
