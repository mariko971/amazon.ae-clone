import React from "react";
import "./Footer.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="#top-page" className="footer__back-to-top">
        Back to top
      </a>
      <div className="footer__nav">
        <div className="nav__col">
          <strong>Get to know Us</strong>
          <a href="/" className="nav__col-link">
            About Amazon
          </a>
          <a href="/" className="nav__col-link">
            Careers
          </a>
        </div>
        <div className="nav__col">
          <strong>Shop with Us</strong>
          <a href="/" className="nav__col-link">
            Your Account
          </a>
          <a href="/" className="nav__col-link">
            Your Orders
          </a>
          <a href="/" className="nav__col-link">
            Your Addresses
          </a>
          <a href="/" className="nav__col-link">
            Your Lists
          </a>
        </div>
        <div className="nav__col">
          <strong>Make Money with Us</strong>
          <a href="/" className="nav__col-link">
            Sell on Amazon
          </a>
          <a href="/" className="nav__col-link">
            Fulfillment by Amazon
          </a>
          <a href="/" className="nav__col-link">
            Become and Affiliate
          </a>
          <a href="/" className="nav__col-link">
            Advertise Your Products
          </a>
        </div>
        <div className="nav__col">
          <strong>Let Us Help You</strong>
          <a href="/" className="nav__col-link">
            Help
          </a>
          <a href="/" className="nav__col-link">
            Covid-19 and Amazon
          </a>
          <a href="/" className="nav__col-link">
            Shipping & Delivery
          </a>
          <a href="/" className="nav__col-link">
            Returns & Replacements
          </a>
          <a href="/" className="nav__col-link">
            Amazon App Download
          </a>
        </div>
      </div>
      <div className="language-location">
        <div className="amz-logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </div>
        <div className="language">
          <div className="globe-icon">
            <LanguageOutlinedIcon />
          </div>
          <p>English</p>
          <div className="language-drop-icon">
            <ArrowDropUpIcon className="down-arrow" />
            <ArrowDropDownIcon className="up-arrow" />
          </div>
        </div>
        <div className="location">
          <img src="/assets/UAE-Flag.svg" alt="UAE flag" />
          <span>United Arab Emirates</span>
        </div>
      </div>
      <div className="footer-last__container">
        <div className="footer-last__wrapper">
          <a href="/" className="footer-last__link">
            <span id="link-title">Sell on Amazon.sa</span>
            <span>Sell globaly, start with Saudi Arabia</span>
          </a>
          <a href="/" className="footer-last__link">
            <span id="link-title">IMDb</span>
            <span>Movies, Tv</span>
            <span>& Celebrities</span>
          </a>
        </div>
        <div className="footer-last__wrapper">
          <a href="/" className="footer-last__link">
            <span id="link-title">Amazon Advertising</span>
            <span>Find, attract, and</span>
            <span>engage customers</span>
          </a>
          <a href="/" className="footer-last__link">
            <span id="link-title">Alexa</span>
            <span>Actional Analytics</span>
            <span>for the Web</span>
          </a>
        </div>
        <div className="footer-last__wrapper">
          <a href="/" className="footer-last__link">
            <span id="link-title">Amazon Web Services</span>
            <span>Scalable Cloud</span>
            <span>Computing Services</span>
          </a>
          <a href="/" className="footer-last__link">
            <span id="link-title">Book Depository</span>
            <span>Books With Free</span>
            <span>Delivery Worldwide</span>
          </a>
        </div>
        <div className="footer-last__wrapper">
          <a href="/" className="footer-last__link">
            <span id="link-title">Goodreads</span>
            <span>Book reviews</span>
            <span>& recommendations</span>
          </a>
          <a href="/" className="footer-last__link">
            <span id="link-title">Shopbop</span>
            <span>Designer</span>
            <span>Fashion Brands</span>
          </a>
        </div>
        <div className="footer-last__wrapper">
          <a href="/" className="footer-last__link">
            <span id="link-title">Audible</span>
            <span>Download</span>
            <span>Audio Books</span>
          </a>
        </div>
      </div>
      <div className="copyright-section">
        <a href="/">Conditions of Use and Sales</a>
        <a href="/">Privacy Notice</a>
        <a href="/">Interest-based Ads</a>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
