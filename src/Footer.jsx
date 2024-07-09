import React from 'react'

export const Footer = () => {
  return (
   <footer>
    <div className="info">
        <div className="voucher">
            <h2>Get Voucher From Us</h2>

            <p>Enter your email and stand a chance to win a free voucher from us</p>
            <form>
                <img src="image/mail.svg" alt="" />
                <input type="email" placeholder="Enter your email" required />
                <p>&rarr;</p>
            </form>

           
        </div>
        <div id="services">
            <ul>
                <h3>Services</h3>
                <li>About Us</li>
                <li>Careers</li>
                <li>Delivery information</li>
                <li>Terms & Condition</li>
                <li>Policy and Privace</li>
            </ul>
            <ul>
                <h3>Pages</h3>
                <li>My Account</li>
                <li>Login</li>
                <li>Wish List</li>
                <li>Cart</li>
                <li>Checkout</li>
            </ul>
        </div>
    </div>
    <div className="social">
                <img src="image/facebook.svg" alt="" /><img src="image/instagram.svg.svg" alt="" /><img src="image/youtube.svg.svg" alt="" />
            </div>
   </footer>
  )
}
