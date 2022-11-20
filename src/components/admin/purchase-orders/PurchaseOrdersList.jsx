import { useEffect, useState } from "react";

export default function PurchaseOrdersList() {
  const token = localStorage.getItem("token");
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    const getPurchaseOrder = async () => {
      const result = await fetch("http://localhost:5000/api/purchase", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      });
      const json = await result.json();
      if (json?.success && json?.data?.length) {
        setPurchaseOrders(json?.data);
      }
    };
    getPurchaseOrder();
  }, []);

  console.log("purchaseOrders", purchaseOrders);

  return (
    <table id="cart-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ten</th>
          <th>Dia Chi</th>
          <th>Dien Thoai</th>
          <th>Mon Hang</th>
          <th>Thoi gian</th>
        </tr>
      </thead>
      <tbody>
        {purchaseOrders?.map((item, index) => {
          const data = new Date(item.created);
          const convertDate = `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>
                {item?.items?.map((x, i) => {
                  return (
                    <p key={i}>
                      {x.name} (SL: {x.qty})
                    </p>
                  );
                })}
              </td>
              <td>{convertDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
