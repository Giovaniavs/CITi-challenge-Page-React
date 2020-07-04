import React from "react";
import "./Cardapio.css"

function Cardapio(props){
    return(
        <div className = "divProduto" >

            <div className = "imagem" >
                <img src={ props.img_src } alt=""/>
            </div>

            <div className = "descricao">
                <p>{props.nome}</p>
                <p>pao e salsicha</p>
                <p>8 reais</p>
            </div>

            <div>
                <button className = " botao"> Adicionar </button>
            </div>
        </div>
    )
}

export default Cardapio