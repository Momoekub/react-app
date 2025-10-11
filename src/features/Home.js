import React, { useState } from "react";
import axios from "axios";
import Product from "../features/Product";
import AddForm from "../features/Product/AddForm";
const data = require("../app/data");


function Home() {
  const [products, setProducts] = useState(data);
  let currentProductId = 9;

  async function getProducts() {
    try {
      const res = await axios.get(
        "https://68e9fc47f1eeb3f856e5a63c.mockapi.io/products"
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  }



  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>New Products</h1>

      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}

      <AddForm addProduct={addProduct} />
    </>
  );
}

export default Home;
