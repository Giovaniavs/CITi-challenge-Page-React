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
      nome: "Hot Dog",
      desc: "Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu.",
      preco: "500 conto",
      img_ulr: "https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:005d8783-c8db-4e89-bbfc-5d7536bab3f4;version=0?component_id=e46101e5-0f57-4adf-85ff-796ea8976ccf&api_key=CometServer1&access_token=1593939241_urn%3Aaaid%3Asc%3AUS%3A005d8783-c8db-4e89-bbfc-5d7536bab3f4%3Bpublic_eec9174060f44ace4d3c2361149e7f56ec0167f9"
    },
    {
      nome: "nome2",
      desc: "desc2",
      preco: "500 conto",
      img_ulr: "https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:005d8783-c8db-4e89-bbfc-5d7536bab3f4;version=0?component_id=e46101e5-0f57-4adf-85ff-796ea8976ccf&api_key=CometServer1&access_token=1593939241_urn%3Aaaid%3Asc%3AUS%3A005d8783-c8db-4e89-bbfc-5d7536bab3f4%3Bpublic_eec9174060f44ace4d3c2361149e7f56ec0167f9"
    },
    {
      nome: "nome3",
      desc: "desc3",
      preco: "500 conto",
      img_ulr: "https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:005d8783-c8db-4e89-bbfc-5d7536bab3f4;version=0?component_id=e46101e5-0f57-4adf-85ff-796ea8976ccf&api_key=CometServer1&access_token=1593939241_urn%3Aaaid%3Asc%3AUS%3A005d8783-c8db-4e89-bbfc-5d7536bab3f4%3Bpublic_eec9174060f44ace4d3c2361149e7f56ec0167f9"
    }
  ]
  const itensCardapio = lista.map((element) => {
      return <Cardapio img_src={element.img_ulr} nome={element.nome} desc={element.desc} preco={element.preco} />
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