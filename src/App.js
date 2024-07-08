
import './App.css';
import { BestSelling } from './components/BestSelling';
import { Boundries } from './components/Boundries';
// import CheckOut from './components/Checkout';
import { FlashSale } from './components/FlashSale';
import { Header } from './components/Header';
import { LimitedOffer } from './components/LimitedOffer';
import { Linited } from './components/Linited';
import { Product } from './components/Product';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <LimitedOffer/>
      <Linited/>
      <FlashSale/>
      <Product/>
      <BestSelling/>
      <Boundries/>
      <Footer/>
      {/* <CheckOut/> */}
    </div>
  );
}

export default App;
