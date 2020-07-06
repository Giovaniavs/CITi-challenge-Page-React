import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./index.css"
import Cardapio from './components/Cardapio/Cardapio';
import axios from 'axios'
import './components/Menu/Menu.css'


function App() {
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");
  const loadProdutos = async () => {
    const res = await axios.get('http://localhost:3001/produtos/list');
    setProdutos(res.data);
  };

  const cardapioFiltrado = produtos.filter( produto =>{
    return produto.name.toLowerCase().includes( search.toLocaleLowerCase() )
  });
  
  let itensCardapio = cardapioFiltrado.map((element) => {
    return <Cardapio img_src={element.img.url} nome={element.name} desc={element.desc} preco={element.price} key={element._id}/>
  });
  const filtrarItensCardapio = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    loadProdutos();
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="divMenu">
            <h1 className= "cardapioStyle">
                Cardápio
            </h1>
            <input id = "idSearchBar" className="searchBar" type="Search" onChange={filtrarItensCardapio}/>
        </div>
      {itensCardapio}
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))