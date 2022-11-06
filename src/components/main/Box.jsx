import _ from "lodash";

export default function Box({
  item,
  count,
  setCount,
  itemInCart,
  setItemInCart,
}) {
  return (
    <div key={item.id} className="box">
      <img src={item.img} alt="" />
      <h3>{item.name}</h3>
      <div className="price">{item.price}</div>
      <button
        onClick={() => {
          // xu ly so luong da dat
          const currentNumber = localStorage.getItem("totalQtyOrdered");
          if (currentNumber) {
            const newNumber = Number(currentNumber) + 1;
            localStorage.setItem("totalQtyOrdered", newNumber);
            setCount(newNumber);
          } else {
            const newNumber = 1;
            localStorage.setItem("totalQtyOrdered", newNumber);
            setCount(newNumber);
          }

          // xu ly mon hang da dat
          const currentName = localStorage.getItem("itemsOrdered");
          if (currentName) {
            const newName = JSON.parse(currentName);
            const existed = newName?.find((x) => x.id === item.id);

            if (existed) {
              // lay item ton tai ra tao 1 copy, neu cai item ton tai co qty thi qty + 1 con neu khong thi qty = 1
              let copyExisted = { ...existed, qty: existed.qty + 1 };

              _.remove(newName, (x) => {
                return x.id === existed.id;
              });
              newName.push(copyExisted);
            } else {
              const copyItem = { ...item, qty: 1 };
              newName.push(copyItem);
            }
            localStorage.setItem("itemsOrdered", JSON.stringify(newName));
          } else {
            let newItem = { ...item, qty: 1 };
            const arr = [];
            arr.push(newItem);
            localStorage.setItem("itemsOrdered", JSON.stringify(arr));
          }
        }}
        // onClick={() => {
        //   // de +1 cho cai gio hang
        //   const newCount = count + 1;
        //   setCount(newCount);

        //   const existed = itemInCart?.find((x) => x.id === item.id);

        //   if (existed) {
        //     // lay item ton tai ra tao 1 copy, neu cai item ton tai co qty thi qty + 1 con neu khong thi qty = 1
        //     let copyExisted = { ...existed, qty: existed.qty + 1 };

        //     _.remove(itemInCart, (x) => {
        //       return x.id === existed.id;
        //     });

        //     itemInCart.push(copyExisted);
        //   } else {
        //     const copyItem = { ...item, qty: 1 };
        //     itemInCart.push(copyItem);
        //   }

        //   const arr = [...itemInCart];
        //   setItemInCart(arr);

        //   localStorage.setItem("totalItem", newCount);
        //   localStorage.setItem("items", JSON.stringify(arr));
        // }}
        className="btn"
      >
        Đặt Ngay
      </button>
    </div>
  );
}
