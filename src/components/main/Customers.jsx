import { StarOutlined } from "@ant-design/icons";
export default function Customers(props) {
  return (
    <div className="box">
      <img src={props.img} alt="" className="quote" />
      <p>{props.ctn}</p>
      <img src={props.avt} className="user" alt="" />
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
    </div>
  );
}
