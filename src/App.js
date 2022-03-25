
import { useContext, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { data } from './index'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import ProductList from './components/ProductList';

// useState -> Xử lý trạng thái của component
// useEffect -> Xử lý side Effect -> Xử lý call API

//useRef -> Lưu giá trị khi component có render nhưng ko thay đổi giá trị mà mình lưu vào thg useRef
// Lấy thẻ html

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='content' element={<MainContent />} />
        <Route path='login' element={<Login />} />

        <Route path='/product'>
          <Route path='product-list' element={<ProductList />} />
          <Route path=':id' element={<MainContent />} />
        </Route>
      </Routes>

      {/* <Link to='/login'>
        <button>Sang màn login</button>
      </Link>
      <Link to='/'>
        <button>Về trang chủ</button>
      </Link>
      <Link to='/product/2131231231'>
        <button>Path động</button>
      </Link> */}
    </BrowserRouter>
  );
}

export default App;
