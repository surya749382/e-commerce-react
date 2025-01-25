import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/products/Product';
import Products from './customer/components/products/Products';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';

function App() {
  return (
    <div>
      <Navigation />
      {/* <HomePage /> */}
     
{/* <Products /> */}
{/* <ProductDetails /> */}
{/* <Cart /> */}
{/* <Checkout /> */}
{/* <Order /> */}
<OrderDetails />
      <Footer />
    </div>
  );
}

export default App;
