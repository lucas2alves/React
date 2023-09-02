import React from 'react'
import './App.css';


class Fipe extends React.Component {

    componentDidMount(){
        fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/11/modelos/260/anos/1992-3')
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    render(){
        return (
            <div className='App'>
                <h1>Consulta de veículos</h1>
                <label>Selecione a marca do veículo</label>
                <select>
                    <option></option>
                </select>
                <label>Selecione o modelo do veículo</label>
                <select></select>
                <label>Selecione o ano do veículo</label>
                <select></select>
                <br/>
                <h2>Valor R$ </h2>
                <ul id='fill_list'>
                    teste
                </ul>
            </div>
        )
    }

}

export default Fipe;