import styled from "./style.module.css";

const Product = ({ elem, handleClick }) => {
  return (
    <div className={styled.card}>
      <img src={elem.img} alt={`Imagem do produto: ${elem.name}`} />
      <h3>{elem.name}</h3>
      <p>{elem.category}</p>
      <span>R$ {elem.price}</span>
      <button onClick={() => handleClick(elem.id)}>Adicionar</button>
    </div>
  );
};

export default Product;