import { useState, } from "react";
import "./App.css";
import { BestSelling } from "./components/BestSelling";
import { Boundries } from "./components/Boundries";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

import { FlashSale } from "./components/FlashSale";
import { Header } from "./components/Header";
import { LimitedOffer } from "./components/LimitedOffer";
import { Linited } from "./components/Linited";
import { Product } from "./components/Product";
import { Footer } from "./Footer";

function App() {
  const [product, setProduct] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isCheckout, setIsCheckout] = useState(false);

    const openCheckout = () => {
    setIsCheckout(true);
    setProduct(false);
  };

  const closeCheckout = () =>{
    setIsCheckout(false);
  }
  const openCart = () => {
    setProduct(true);
  };

  const handleProductClick = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
     {isCheckout ? (
  <Checkout onClick={closeCheckout} />
) : (
  <>
    <Header onClick={openCart} cartcount={cartCount} />
    <LimitedOffer />
    <Linited />
    <FlashSale onClick={handleProductClick} product={product} />
    <Product onClick={handleProductClick} />
    <BestSelling />
    <Boundries />
    <Footer />
    {product && <Cart product={product} setproduct={setProduct} onClick={openCheckout} />}
  </>
)}

    </div>
  );
}

export default App;
