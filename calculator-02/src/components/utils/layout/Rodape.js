import React from 'react';
import './Rodape.css';

export default function Rodape(props) {
    return (
        <div className="rodape">
           
            <footer className="color">
                <h2>
                    Desenvolvido por    
                </h2>
                <h3>
                    {props.name}
                </h3>
            </footer>
        </div>
    );
}
