import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
