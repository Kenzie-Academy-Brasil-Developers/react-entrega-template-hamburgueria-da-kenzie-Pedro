import styled from "./style.module.css";

const Cart = ({ currentSale, setCurrenteSale, cartTotal, setCartTotal }) => {
  const totalCart = () => {
    if (currentSale.length > 0) {
      const totalValue = currentSale.reduce((accumulator, actualValue) => {
        return actualValue.price + accumulator;
      }, 0);
      setCartTotal(totalValue);
    }
  };
  totalCart();

const handleList = (item) => {
    if (currentSale.length > 0) {
      const listFiltered = currentSale.filter((elem) => elem !== item);
      setCurrenteSale(listFiltered);
    }
  };

  return (
    <div className={styled.cartContainer}>
      <div className={styled.containerCart}>
        <h2>Carrinho de compras</h2>
        {currentSale.length === 0 ? (
          <div className={styled.divCard}>
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          currentSale.map((elem) => {
            return (
              <div key={elem.id} className={styled.cardCart}>
                <img src={elem.img} alt={`Imagem do item: ${elem.name}`} />
                <span>
                  <h3 className={styled.productName}>{elem.name}</h3>
                  <p>{elem.category}</p>
                </span>
                <button onClick={() => handleList(elem)}>Remover</button>
              </div>
            );
          })
        )}
      </div>
      <div
        className={
          currentSale.length === 0
            ? styled.totalContainerNone
            : styled.totalContainer
        }
      >
        <span>
          <p>Total</p>
          <p>R${Math.round(cartTotal)}.00</p>
        </span>
        <button
          onClick={() => setCurrenteSale([])}
          className={styled.removeAll}
        >
          Remover todos
        </button>
      </div>
    </div>
  );
};

export default Cart;