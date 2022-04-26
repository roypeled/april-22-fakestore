import {useEffect, useState} from 'react';
import Products from './Products';
import Search from './Search';
import CategoryChooser from './CategoryChooser';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="app">
      <div className='header'>
        <CategoryChooser currentCategory={selectedCategory} onChange={setSelectedCategory} />
        <Search currentSearch={search} onSearch={setSearch} />
      </div>
      <Products 
        products={products} 
        category={selectedCategory}
        search={search}
      />
    </div>
  );
}

export default App;
