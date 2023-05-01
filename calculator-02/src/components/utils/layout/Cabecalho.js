import React from "react";
import './Cabecalho.css';   

export default function Cabecalho(props) {
    return (
        <div className="cabecalho">
           
            <header className="color">
                <h1>
                    Calculadora do exercico
                </h1>
                <h2>
                    {props.name}
                </h2>
            </header>
        </div>
    );
}