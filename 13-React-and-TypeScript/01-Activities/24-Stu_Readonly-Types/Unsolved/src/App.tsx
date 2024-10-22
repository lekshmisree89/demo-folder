import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Product from './utils/interfaces/Product';
//TODO: import the Product interface
import './App.css';
import { getProducts } from './utils/API';

function App() {
  const [products, setProducts] = useState<Product[]>([]);//means that the products state
  // will be an array of Product objects which is defined by the Product interface.
  //
  //TODO: update this component to use the `Product` interface to ensure type safety.
  
  useEffect(() => {
    getProducts().then((productData:Product[]) => {
      setProducts(productData);
    });
  }, []);
  const purchaseProduct = (id: number) => {
    const updatedProducts = products.map((product:Product) => {
      if (product.id === id) {
        product.quantity--;
        alert(
          `Thank you for your purchase! We hope you enjoy your new ${product.productName}`
        );
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  return (
    <div className='App'>
      <h1>Welcome to the Store!</h1>
      <main>
        {products.map((product) => (
          <>
            <ProductCard
              key={product.id}
              purchase={purchaseProduct}
              {...product}
            />
          </>
        ))}
      </main>
    </div>
  );
}

export default App;
