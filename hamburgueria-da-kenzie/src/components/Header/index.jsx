import styled from "./style.module.css";

const Header = ({filteredProducts ,setFilteredProducts, showProducts}) => {
  return (
    <header>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div>
        <input 
        type="text" 
        placeholder="Digitar Pesquisa" 
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value.toLowerCase())} />

        <button type="submit" onClick={() => showProducts()}>Pesquisar</button>
        
      </div>
    </header>
  );
};

export default Header;