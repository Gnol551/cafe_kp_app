import { useEffect } from "react";

export default function Cart({ itemInCart, setItemInCart }) {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsOrdered"));
    setItemInCart(items);
  }, []);

  console.log(itemInCart);
  const calcPrice = () => {
    let price = 0;
    itemInCart.map((x) => {
      const total = x.price * x.qty;
      price += total;
    });

    return price;
  };
  const calcQty = () => {
    let qty = 0;
    itemInCart.map((x) => {
      qty += x.qty;
    });

    return qty;
  };
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
              <tr key={index}>
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
        <tfoot>
          <tr>
            <td>Tổng</td>
            <td></td>
            <td></td>
            <td>{calcPrice()}</td>
            <td>{calcQty()}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
