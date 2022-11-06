import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ count, setCount }) {
  useEffect(() => {
    const num = localStorage.getItem("totalQtyOrdered");
    setCount(num);
  }, []);

  return (
    <Link to={"/cart"} className="icons">
      <div>
        <ShoppingCartOutlined id="cart-btn" />
      </div>
      <strong>{count}</strong>
    </Link>
  );
}
