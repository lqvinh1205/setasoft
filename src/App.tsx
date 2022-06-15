import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Algorithm from './features/Algorithm';
import ListProducts from './features/products/ListProducts';
import 'antd/dist/antd.css'; 
import Addproducts from './features/products/Addproducts';
function App() {
  return (
    <Routes>
      <Route path='' element={<Algorithm />}/>
      <Route path='products'>
        <Route index element={<ListProducts />} /> 
        <Route path='add' element={<Addproducts />} /> 
      </Route>
    </Routes>
  );
}

export default App;
