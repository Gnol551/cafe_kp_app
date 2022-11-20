import { useEffect } from "react";

export default function Products() {
  const token = localStorage.getItem("token");

  const getProduct = async () => {
    await fetch("http://localhost:5000/api/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    });
  };

  useEffect(() => {
    const result = getProduct();
    console.log("result", result);
  }, []);

  return <div>Products</div>;
}
