import { useEffect } from "react";

export default function Cart({ itemInCart, setItemInCart }) {

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsOrdered"));
    setItemInCart(items);
  }, []);

  return (
    <>
      <h3 className="giohang">Đơn hàng</h3>
      <table id="cart-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên hàng</th>
            <th>Hình ảnh</th>
            <th>Giá tiền</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {itemInCart?.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.img} alt="" />
                </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
