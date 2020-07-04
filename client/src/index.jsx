import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import "./index.css"
import Cardapio from './components/Cardapio/Cardapio';



function App() {
  const lista = [
    {
      nome: "nome1",
      desc: "desc1",
      preco: "500 conto",
      img_ulr: "url1"
    },
    {
      desc: "desc2",
      img_ulr: "url2"
    },
    {
      desc: "desc3",
      img_ulr: "url3"
    }
  ]
  const itensCardapio = lista.map((element) => {
      return <Cardapio img_src={element.img_ulr} nome={element.nome} descricao={element.desc} preco={element.preco} />
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