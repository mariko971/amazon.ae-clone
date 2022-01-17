import React from "react";
import "./Shipping.css";
import { countryList } from "./shipping.utils";

const Shipping = () => {
  return (
    <div className="shipping-container">
      <div className="shipping-wrapper">
        <h1>Select a Shipping Address</h1>
        <h2 className="shipping-wrapper-title">Add a new Address</h2>
        <form id="shipping-form">
          <div className="shipping-region formInput">
            <label htmlFor="country"> Country/region</label>
            <select name="" id="country">
              {countryList.map((country, i) => (
                <option value={country} key={i}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="shipping-fullname formInput">
            <label htmlFor="fullname">Full name (First and Last name)</label>
            <input type="text" id="fullname" />
          </div>
          <div className="shipping-tel formInput">
            <label htmlFor="telephone">Mobile number</label>
            <input type="tel" id="telephone" />
            <p>May be used to assist delivery</p>
          </div>
          <div className="shipping-street formInput">
            <label htmlFor="streetName">Street Name</label>
            <input type="text" id="streetName" />
          </div>
          <div className="shipping-building formInput">
            <label htmlFor="buildingName">
              Building Name/no., floor, Apt. or villa no.
            </label>
            <input type="text" id="buildingName" />
          </div>
          <div className="shipping-city formInput">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="shipping-area formInput">
            <label htmlFor="area">Area/District</label>
            <input type="text" id="area" />
          </div>
          <div className="shipping-landmark formInput">
            <label htmlFor="landmark">Nearest Landmark</label>
            <input type="text" id="landmark" />
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
              <label htmlFor="delivery">Office (7am-9pm, all days)</label>
            </span>
          </div>
          <p>
            <input type="checkbox" id="defaultAddress" value="" />
            <label htmlFor="defaultAddress">Use as my default address.</label>
          </p>
          <button className="shipping-form-btn">Add address</button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
