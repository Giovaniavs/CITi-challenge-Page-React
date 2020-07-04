import React from "react";
import "./Cardapio.css"

function Cardapio(props){
    return(
        <div className = "divProduto" >

            <div className = "imagem" >
                <img src={ props.img_src } alt=""/>
            </div>

            <div className = "descricao">
                <p className="nomeStyle">{props.nome}</p>
                <p className="descStyle">{props.desc}</p>
                <p className="precoStyle">{props.preco}</p>
            </div>

            <div>
                <button className = " botao"> Adicionar </button>
            </div>
        </div>
    )
}

export default Cardapio