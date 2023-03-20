import React from "react";
import "./css/summaryPage.css";

function Summarypage() {
  return (
    <div className="summary-page">
      <div className="summary">
        <h1 className="summary-heading">SUMMARY</h1>

        <div className="item">
          <img
            className="summary-image"
            src="https://i.stack.imgur.com/JEhe7.png"
            alt="summaryImage"
          />
          <p className="summary-discription">
            Men’s Watches (Rolex) brown, 1pc{" "}
          </p>
          <p className="summary-price">N4000</p>
        </div>
        <hr />

        <div className="item">
          <img
            className="summary-image"
            src="https://i.stack.imgur.com/IGZQn.png"
            alt="summaryImage"
          />
          <p className="summary-discription">
            Willys Shoes , black size 44 1 pc
          </p>
          <p className="summary-price">N6000</p>
        </div>
        <hr />

        <div className="item">
          <img
            className="summary-image"
            src="https://i.stack.imgur.com/vRX24.png"
            alt="summaryImage"
          />
          <p className="summary-discription">Buddy Black Sun Shades 1 pc</p>
          <p className="summary-price">N8000</p>
        </div>
        <hr />

        <h1 className="summary-bottom">Total</h1>
        <p className="summary-price-last">N18000</p>
      </div>

      <div className="vertical-line"></div>

      <div className="checkout">
        <div className="checkout-icons">
          <button className="mastercard"></button>
          <button className="paypal"></button>
          <button className="giftcard"></button>
        </div>

        <form action="" className="checkout-form">
          <h3 className="heading">Default Address</h3>
          <p>No 23 obiagu street enugu , enugu state Nigeria</p>
          <hr />
          <div className="col-50">
            <label className="cn" for="fnumb">Card Number</label>
            <input type="number" id="fnumb" />
            <input type="text" id="email" placeholder="Name" />

            <div className="row">
              <div class="col-50">
                <input type="text" id="state" name="state" placeholder="Valid Date" />
              </div>
              <div className="col-50">
                <input type="text" id="zip" name="zip" placeholder="CVV" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Summarypage;
