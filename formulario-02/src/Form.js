import React from 'react'


function handleSubmit(e) {
    e.preventDefault();
    alert('Enviado com sucesso!  Dados na tela a baixo:');
  }

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
                    id="nome"
                    required
                    placeholder="Digite seu nome"
                    onChange={
                        (event) => this.changeField(event.target.id, event.target.value)
                    }
                />
    
                <input 
                    type="number"
                    id="idade"
                    required
                    placeholder="Digite sua idade"
                    onChange={
                        (event) => this.changeField(event.target.id, event.target.value)
                    }
                />
                <br/>

                <div id="radio" onChange={(event) => this.changeField(event.target.name, event.target.value)
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

               {this.state.info &&  <div>
                    <p>Nome:  {this.state.nome}</p>
                    <p>Idade:  {this.state.idade}</p>
                    <p>Gênero:  {this.state.radio}</p>
                </div>}

            </form>
        );
    }
   
}

export default Form;