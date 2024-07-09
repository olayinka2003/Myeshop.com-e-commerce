// import React, { useState } from "react";

export const Cart = ({product, onCLick,setproduct}) => {
    
    const handleClose = ()=>{
       setproduct(false)
    }

    return (
        <>
            {product ? (
                <div className="carti">
                    <button onClick={handleClose}>❌</button>
                    <h1>Shopping Cart</h1>

                    <div className="item">
                        <span className="inc">
                            <button>+</button>1<button>-</button>
                        </span>

                        <div className="stuff">
                            <img src="image/sneaker.svg" alt="" className="shoe" />{" "}
                            <div className="abt">
                                <p>Comfy White Sneakers</p>
                                <span className="money">
                                    $150.00 <img src="image/cancel.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-description">
                        <div className="coupon">
                            <input type="text" placeholder="coupon" />
                            <button>APPLY</button>
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
                            <button>Place Your Order Now</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
