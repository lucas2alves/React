import React from 'react'
import './App.css';

function handleSubmit(event) {
    event.preventDefault();
    alert('Enviado com sucesso!  Dados na tela a baixo:');
  }
  const formulario = [{
    name: "nome",
    idade: "idade",
    genero: "masculino",
    id: 1 }
];
  
class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            idade: '',
            radio: 'Masculino',
            info: false
        };    
    }  
    
    changeField(field, value) {
        this.setState({ [field]: value })
    }
    

    render() {
        console.log(this.state);
        return ( 
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onClick={(e) => this.setState({ info: false })}
                    id="nome"
                    required
                    placeholder="Digite seu nome"
                    onChange={
                        (event) => this.changeField(event.target.id, event.target.value)
                    }
                />
    
                <input 
                    type="number"
                    onClick={(e) => this.setState({ info: false })}
                    id="idade"
                    required
                    placeholder="Digite sua idade"
                    onChange={
                        (event) => this.changeField(event.target.id, event.target.value)
                    }
                />
                <br/>

                <div id="radio"
                onClick={(e) => this.setState({ info: false })}
                 onChange={(event) => this.changeField(event.target.name, event.target.value)
                    }>
                <label>Gênero:</label>
                <input type="radio"
                 name="radio"
                  value="Masculino"
                  defaultChecked
                />
                   Masculino
                <input type="radio" name="radio" value="Feminino" /> Feminino
                <input type="radio" name="radio" value="Outros" /> Outros
                <br/>
                </div>
                <br/>
                <button onClick={(e) => this.setState({ info: true })} id="send" type="submit">Enviar</button>

                {this.state.info && <div id='dadostela' className='resposta'>
                    <h2>
                        Formulario - {this.state.nome}
                    </h2>
                    <p>Nome:  {this.state.nome}</p>
                    <p>Idade:  {this.state.idade}</p>
                    <p>Gênero:  {this.state.radio}</p>
                    <h2>Hello Array</h2>
                {formulario.map((campo) => (
                    <div key={campo.id}>
                        <h2>{campo.name}</h2>
                        <p>{campo.idade}</p>
                    </div>
    ))}
                </div>}

            </form> 
        );
    } 
}

export default Form;