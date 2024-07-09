import { useState } from "react";
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
  

  const handleProductClick = () => {
    setProduct(true);
  };
  return (
    <div className="app">
      <Header />
      <LimitedOffer />
      <Linited />
      <FlashSale onClick={handleProductClick}  product={product}/>
      <Product onClick={handleProductClick} />
      <BestSelling />
      <Boundries />
      <Footer />
      {product ? <Cart product={product} setproduct={setProduct} /> : ""}
    </div>
  );
}

export default App;
