import { useState } from "react";

export default function Box(props) {
  const list = [
    {
      id: 1,
      img: "./img/menu-1.png",
      name: "Cafe sữa",
      price: 29.0,
      btn: "đặt ngay",
    },
    {
      id: 2,
      img: "./img/menu-2.png",
      name: "Cafe đen",
      price: 25.0,
      btn: "đặt ngay",
    },
    {
      id: 3,
      img: "./img/menu-3.png",
      name: "latte",
      price: 35.0,
      btn: "đặt ngay",
    },
    {
      id: 1,
      img: "./img/menu-4.png",
      name: "Cappuchino",
      price: 35.0,
      btn: "đặt ngay",
    },
    {
      id: 5,
      img: "./img/menu-5.png",
      name: "Choco latte",
      price: 45.0,
      btn: "đặt ngay",
    },
    {
      id: 6,
      img: "./img/menu-6.png",
      name: "Bạc Xỉu",
      price: 29.0,
      btn: "đặt ngay",
    },
  ];
  const box = ({ item, handleClick }) => {
    const { img, name, price, btn } = item;
  };
    const [cart, setCart] = useState([]);
    // const item = list.map
  const handleClick = (list) => {
   console.log(list);
  };
  return (
    <div className="box" >
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="price">{props.price}</div>
      <button className="btn" onClick={()=>handleClick(list)}>
        {props.btn}
      </button>
    </div>
  );
}
