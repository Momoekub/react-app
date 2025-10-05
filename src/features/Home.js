import React, { useState } from "react";
const data = require("../app/data");
import Product from "../features/Product";
import AddForm from "../features/Product/AddForm";
function Home() {
  const [products, setProducts] = useState(data); 

let currentProductId =9;

function addProduct(product) {
  const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <div>
  
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
      <AddForm addProduct={addProduct} />
    </div>
  );
}

export default Home;