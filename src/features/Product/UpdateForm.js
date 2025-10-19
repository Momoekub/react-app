import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, deleteProduct } from "./actions";

function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id);
 
 
  const [name, setName] = useState(product.name);
  const [imageURL, setImageURL] = useState(product.imageURL);
  const [type, setType] = useState(product.type);

  

  function handleUpdate(e) {
  e.preventDefault();
  console.log({ id: product.id, name, type, imageURL });
  dispatch(updateProduct({ id: product.id, name, type, imageURL }));
  navigate("/");
}

  function handleDelete() {
  console.log("Deleting product with id:", product.id);
  dispatch(deleteProduct(product.id)); // ส่ง id ตรง ๆ
  navigate("/");
}

  return (
    <>
      <h1>Update Product</h1>
      <form id="update-form" onSubmit={handleUpdate}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <button type="submit">Update product</button>
        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={handleDelete}
        >
          Delete product
        </button>
      </form>
    </>
  );
}

export default UpdateForm;
