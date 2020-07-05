import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import "./index.css"
import Cardapio from './components/Cardapio/Cardapio';
import axios from 'axios'

function App() {
  const [produtos, setProdutos] = useState([]);

  const loadProdutos = async () => {
    const res = await axios.get('http://localhost:3001/produtos/list');
    setProdutos(res.data);
  };

  useEffect(() => {
    loadProdutos();
  }, []);

  const itensCardapio = produtos.map((element) => {
      return <Cardapio img_src={element.img.url} nome={element.name} desc={element.desc} preco={element.price} />
    }
  );
  return (
    <div className="app">
      <Header />
      <Menu />
      {itensCardapio}
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))