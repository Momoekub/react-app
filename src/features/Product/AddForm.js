import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
const { useState } = React;
function AddForm({ addProduct }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

function submit(e){
    e.preventDefault();
    addProduct({name, imageURL, type});
}
  

  return (
    <>
  <h1>Add Product</h1>
  <form id="create-form" onSubmit={submit} >
    <div className="input-group">
      <label htmlFor="name" >Name</label>
      <input name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>

    <div className=" input-group">
      <label htmlFor="imageURL">Image URL</label>
      <input name="imageURL" type="text" id="imageURL" value={imageURL}  onChange={(e) => setImageURL(e.target.value)} />
    </div>

    <div className=" input-group">
      <label htmlFor="type">Type</label>
      <input name="type" type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
    </div>

    <button type="submit">Add product</button>
  </form>
</>
)}


AddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
}

export default AddForm;