import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";


// components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";



function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component = {ShopCart}/>
          <Redirect to="/products" />
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
