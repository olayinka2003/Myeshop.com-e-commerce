import React from "react";

export const Header = ({onClick, cartcount}) => {
  return (
    <header>
      <div class="container">
       <img src="image/hamburger.svg" alt="" className="hamburger"/> <h2>MYEshop.com</h2>
        <div class="search-bar">
          <select>
            <option value="all">All category</option>
          </select>
         
           <div className="search-icon">  <img src="image/search.svg" alt="" /></div>
          
        
          <input type="text" placeholder="Search all products or brands here" />
        </div>

        <div className="basket-icon">
          <span className="product-count">{cartcount}</span>
          <img src="image/cart.svg" alt="cart" onClick={onClick} />
          <img src="image/heart.svg" alt="" className="heart"/>
          <img src="image/search.svg" alt="" className="second-search" />
        </div>
      </div>
    </header>
  );
};
