import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import styled from "./components/style.module.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrenteSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
}, []);

const showPrevProducts = () => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((res) => res.json())
    .then((res) => setProducts(res))
}

const showProducts = () => {
    const productsFiltered = products.filter((product) => product.name.toLowerCase().includes(filteredProducts))
    setProducts(productsFiltered)
};

const handleClick = (productId) => {
  const productFound = products.find((elem) => elem.id === productId);
  const verification = currentSale.find((elem) => elem.id === productId);
    if (verification === undefined) {
      setCurrenteSale([...currentSale, productFound]);
      showPrevProducts()
    }
};

  return (
    <>
      <Header filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} showProducts={showProducts}/>
      <div className={styled.mainContainer}>
        <ProductList products={products} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrenteSale={setCurrenteSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </>
  );
}

export default App;