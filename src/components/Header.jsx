import React from "react";

export const Header = () => {
  return (
    <header>
      <div class="container">
        <h2>MYEshop.com</h2>
        <div class="search-bar">
          <select>
            <option value="all">All category</option>
          </select>
         
           <div className="search-icon">  <img src="image/search.svg" alt="" /></div>
          
        
          <input type="text" placeholder="Search all products or brands here" />
        </div>

        <div className="basket-icon">
          <img src="image/cart.svg" alt="cart" />
          <img src="image/heart.svg" alt="" />
        </div>
      </div>
    </header>
  );
};
