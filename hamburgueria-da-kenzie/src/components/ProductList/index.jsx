import Product from "../Product";
import styled from "./style.module.css";

const ProductList = ({ products, handleClick }) => {
  return (
    <div className={styled.container}>
      {products.map((elem) => {
        return <Product key={elem.id} elem={elem} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default ProductList;