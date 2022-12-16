import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/Home/Home";
import Navbar from "./scenes/global/Navbar";
import Checkout from "./scenes/checkout/Checkout";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Confirmation from "./scenes/checkout/Confirmation";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          {/* if we success to make an order */}
          <Route path="checkout/success" element={<Confirmation />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
