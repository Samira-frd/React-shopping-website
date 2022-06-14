import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import shopIcon from "../../assets/icon/shopping-basket.svg";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart"><img src={shopIcon} alt="shop" style={{ width: "40px" }} /></Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
