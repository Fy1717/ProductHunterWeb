"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/getAllProducts'); // Update the API URL
        setProducts(response.data);
      } catch (error) {
        console.error('Ürün listesi alınırken hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <ul>
        {products.map((product, index) => (
          <div key={index}>
            <hr />
            <img src={`${product.image}`} style={{ width: '400px', height: '400px' }}/>
            <br />
            <div>{product.name}</div>
            <br />
            <div>{product.price} TL</div>
            <br />
            <a href={`${product.url}`}>{product.url}</a>
            <br />
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

