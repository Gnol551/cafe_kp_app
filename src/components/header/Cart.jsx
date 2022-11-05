import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Cart(params) {
  return (
    <Link to={"/cart"} className="icons">
      <div>
        <ShoppingCartOutlined id="cart-btn" />
      </div>
      <strong>0</strong>
    </Link>
  );
}
