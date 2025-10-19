import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/Product/reducers';

export default configureStore({
  reducer: { products: productReducers,}, // ตอนนี้ยังว่างอยู่ เดี๋ยวค่อยเพิ่ม
});
