import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="cottrai">
      <ul>
        <Link to="/dashboard">
          <li>
            <FaHome style={{ color: "white" }} /> Home
          </li>
        </Link>
        <Link to="/dashboard/products">
          <li>
            <FaHome style={{ color: "white" }} /> Products
          </li>
        </Link>
        <Link to="/dashboard/purchase-orders">
          <li>
            <FaHome style={{ color: "white" }} /> Purchase Orders
          </li>
        </Link>
      </ul>
    </div>
  );
}
