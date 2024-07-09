import "../css/checkouts.css";
import React from "react";
import { BillingDetails } from "./BillingDetails";
export const Checkout = ({onClick}) => {
  return (
    <div className="checkout">
      <div className="conatainers">
        <div className="summary">
          <button>
            <img src="image/Arr.svg" alt="" />
          </button>
          <p>ORDER SUMMARY</p>
        </div>
        <div className="payment">
          <div className="options">
            <h3>Select Payment Options</h3>
            <div className="atm">
              <img src="image/atm.svg" alt="" />
              <img src="image/paypal.svg" alt="" />
              <img src="image/pay.svg" alt="" />
            </div>
            <div className="coupon">
              <input type="text" placeholder="coupon " />
              <button>APPLY</button>
            </div>
          </div>
          <div className="total">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>$0.00</p>
            </div>
            <div className="tax">
              <p>Tax</p>
              <p>$0.00</p>
            </div>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <div className="free">
              <span className="set">
                <input type="radio" name="shipping" id="free" />
                <label htmlFor="free">Free Shipping</label>
              </span>

              <p>$0.00</p>
            </div>
            <div className="flat">
              <span className="set">
                <input type="radio" name="shipping" id="flat" />
                <label htmlFor="flat">Flat Rate</label>
              </span>

              <p>$20.00</p>
            </div>
          </div>
          <hr />
          <div className="total-amount">
            <div className="amount">
              <p>Total</p>
              <p>$0.00</p>
            </div>
            <button onClick={onClick}>Place Your Order Now</button>
          </div>
        </div>
      </div>
      <BillingDetails/>
    </div>
  );
};
