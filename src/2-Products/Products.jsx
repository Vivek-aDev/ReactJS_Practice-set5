import React, { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div>
        <button
          onClick={() =>
            setProducts(products.filter(({ quantity }) => quantity > 20))
          }
        >
          Show Products with quantity more than 20
        </button>
      </div>
      <ul>
        {products &&
          products?.map(({ name, price, quantity }) => (
            <li key={name}>
              {name} - Rs.{price} - Quantity:{quantity}
            </li>
          ))}
      </ul>
      <div>
        <button
          onClick={() =>
            setProducts(products.filter(({ price }) => price < 100))
          }
        >
          Filter by Price less than 100
        </button>
      </div>
    </div>
  );
}
