import React from 'react';
import { AppProvider } from './AppContext';
import AppBar from './sections/AppBar';
import ProductListing from './sections/ProductListing';
import SideBar from './sections/SideBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Cart';

const App = () => {
  return (
    <AppProvider>
      <CartProvider>
        <Router>
          <ToastContainer position="bottom-center" />
          <AppBar />
          <Switch>
            <Route exact path="/">
              <div className="flex flex-row gap-x-4 px-3 overflow-auto mt-4">
                <SideBar />
                <ProductListing />
              </div>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </AppProvider>
  );
}

export default App;
