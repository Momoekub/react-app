import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';  
import { fetchProducts } from './features/Product/actions'; 

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateForm';

function App() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          'https://68e9fc47f1eeb3f856e5a63c.mockapi.io/products'
        );
        dispatch(fetchProducts(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getProducts();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default App;
