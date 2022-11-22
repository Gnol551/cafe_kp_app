import { useEffect, useState } from "react";
import CheckOutForm from "./CheckOutForm";

export default function Cart({ itemInCart, setItemInCart, count, setCount }) {
  const [openCheckout, setOpenCheckout] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsOrdered"));
    setItemInCart(items ?? []);
  }, []);

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

  const addItem = (item) => {
    const newQty = item.qty + 1;
    const newItem = { ...item, qty: newQty };
    // set state tong lai
    let arr = [];
    itemInCart.map((x) => {
      if (x.id === item.id) {
        arr.push(newItem);
      } else {
        arr.push(x);
      }
    });
    setItemInCart(arr);
    let newCount = Number(count) + 1;
    setCount(newCount);

    // set localstorage tong lai
    localStorage.setItem("itemsOrdered", JSON.stringify(arr));
    localStorage.setItem("totalQtyOrdered", newCount);
  };

  const subtractItem = (item) => {
    const newQty = item.qty - 1;
    const newItem = { ...item, qty: newQty };
    let arr = [];
    itemInCart.map((x) => {
      if (x.id === item.id) {
        if (Number(x.qty) !== 1) {
          arr.push(newItem);
        }
      } else {
        arr.push(x);
      }
    });
    setItemInCart(arr);
    let newCount = Number(count) - 1;
    setCount(newCount);
    localStorage.setItem("itemsOrdered", JSON.stringify(arr));
    localStorage.setItem("totalQtyOrdered", newCount);
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
                <td className="btn-cal">
                  <button
                    className="btn-sub"
                    onClick={() => subtractItem(item)}
                  >
                    -
                  </button>
                  {item.qty}
                  <button onClick={() => addItem(item)}>+</button>
                </td>
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
      {itemInCart?.length ? (
        <>
          <button
            className="btn"
            id="btn-pay"
            onClick={() => {
              setOpenCheckout(!openCheckout);
            }}
          >
            Thanh Toán
          </button>
          {openCheckout ? (
            <CheckOutForm
              itemInCart={itemInCart}
              setOpenCheckout={setOpenCheckout}
              setItemInCart={setItemInCart}
              setCount={setCount}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
