import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function CheckOutForm({
  itemInCart,
  setOpenCheckout,
  setItemInCart,
  setCount,
}) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const purchase = {
      name: name,
      address: address,
      phone: phone,
      items: itemInCart,
    };

    fetch("http://localhost:5000/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((result) => result.json())
      .then((info) => {
        if (info?.success && info?.data?.length) {
          setName("");
          setAddress("");
          setPhone("");
          setOpenCheckout(false);
          localStorage.removeItem("itemsOrdered");
          localStorage.removeItem("totalQtyOrdered");
          setItemInCart([]);
          setCount(0);
        }
      });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h3 style={{ color: "white" }}>Nhập thông tin giao hàng</h3>
      <div className="inputBox">
        <span>
          <UserOutlined />
        </span>
        <input
          type="text"
          placeholder="Họ và Tên"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
      </div>
      <div className="inputBox">
        <span>
          <MailOutlined />
        </span>
        <input
          type="text"
          placeholder="Dia chi"
          value={address}
          onChange={(e) => {
            setAddress(e.currentTarget.value);
          }}
        />
      </div>
      <div className="inputBox">
        <span>
          <PhoneOutlined />
        </span>
        <input
          type="number"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => {
            setPhone(e.currentTarget.value);
          }}
        />
      </div>
      <input type="submit" value="Dong Y" className="btn" />
    </form>
  );
}
