import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/products/Product';
import Products from './customer/components/products/Products';

function App() {
  return (
    <div>
      <Navigation />
      {/* <HomePage /> */}
      {/* <Product /> */}
<Products />
      <Footer />
    </div>
  );
}

export default App;
