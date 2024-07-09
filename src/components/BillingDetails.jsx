import React from "react";

export const BillingDetails = () => {
  return (
    <div className="billing-details">
      <h2>Billing Details</h2>
      <div className="form">
        <div className="name">
          <span className="namee">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" name="name" required />
          </span>

          <span className="namee">
            <label htmlFor="name">First Name</label>
            <input type="text" required />
          </span>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="company">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="country">
          <label htmlFor="country">Country/Region</label>
          <select id="country" name="country" required>
            <option value="">Nigeria</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          <input type="text" placeholder="Street Address" />
        </div>
        <div className="number">
          <label htmlFor="number">Phone Number</label>
          <input type="tel" id="phone-number" placeholder="123-45-55"/>
        </div>
        <div className="create-account">
            <input type="checkbox" id="create-account" name="create-account" />
            <label htmlFor="create-account">
              Create An Account
            </label>
        </div>
      </div>
    </div>
  );
};
