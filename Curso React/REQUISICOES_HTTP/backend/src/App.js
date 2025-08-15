import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const baseUrl = 'http://localhost:3001/products';

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;