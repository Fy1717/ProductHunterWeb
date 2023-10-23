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
      <br />
      <h3 style={{ textAlign: 'center' }}>Product Hunter</h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product, index) => (
            <div key={index} class="card" style={{ width: '400px', padding: '3em', margin: '10px', display: 'flex' , alignItems: 'center',  // Center vertically
            justifyContent: 'center'}}>
              <img src={`${product.image}`} style={{ width: '200px', height: '200px'}}/>
              <div>
                <br />
                <h5 style={{ textDecoration: 'none', color: 'black' }}>
                  <a href={product.url} style={{ textDecoration: 'none', color: 'black' }}>{product.name}</a>
                </h5>        
                <br />        
                <div>Price : {product.price} TL</div>
                <div>Old Price : {product.oldPrice} TL</div>
                <div>{product.categories}</div>
                <div>{product.store}</div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default ProductList;

