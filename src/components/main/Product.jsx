import { HeartOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Product(props) {
  return (
    <div className="box">
      <div className="icons">
        <button>
          <ShoppingCartOutlined />
        </button>
        <button>
          <HeartOutlined />
        </button>
        <button>
          <EyeOutlined />
        </button>
      </div>
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <h3>{props.name}</h3>
        <div className="stars">
          <i>
            <StarOutlined />
          </i>
          <i>
            <StarOutlined />
          </i>
          <i>
            <StarOutlined />
          </i>
          <i>
            <StarOutlined />
          </i>
          <i>
            <StarOutlined />
          </i>
        </div>
        <div className="price">
          {props.price} <span> {props.prices}</span>
        </div>
      </div>
    </div>
  );
}
