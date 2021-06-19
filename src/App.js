import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './components/ProductCard.js';
import { getProductsAction } from './redux/actions/productActions.js';
function App() {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {products.length > 0 &&
            products.map((product) => (
              <div className="col-3 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
