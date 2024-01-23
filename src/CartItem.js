import { useState } from "react";
import Nav from "./nav";
const CartItem = () => {
  const [newItems, setNewItems] = useState([]);
  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <h2>Cart Item</h2>
      {newItems.length>0? <div>There is items</div>:<div>There is no items </div>}

    </div>
  );
};
export default CartItem;
