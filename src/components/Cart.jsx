// import React, { useState } from "react";

export const Cart = ({product, setproduct, onClick}) => {
    
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
                        {/* <span className="inc">
                            <button>+</button>1<button>-</button>
                        </span> */}

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

                    <div className="payer">
                        <button onClick={onClick}>Checkout</button>
                    </div>
                </div>
            ) : null}
        </>
    );
};
