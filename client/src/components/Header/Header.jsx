import React from "react";
import "./Header.css"
import logo from "./logo.png"

function Header(){
    return(
        <div>
            <img src={ logo } alt="logo do restaurante"/>
        </div>
    )   
}


export default Header;