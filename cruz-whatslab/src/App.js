// import './App.css';
// import Mensagem from "./components/mensagem";
import React from 'react';
import "./App.css";


class Mensagem extends React.Component {
    state = {

       chat: [],
    valorInputUsuario: "",
    valorInputMensagem: ""
}

adicionarMensagem = () => {
    const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem
    }

    const novasMensagens = [... this.state.chat, novaMensagem];

    this.setState({
        chat: novasMensagens,
        valorInputUsuario: "",
        valorInputMensagem: "", 
    });
};

onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value});
};

onChangeInpuMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value});
};

render() {
    const mensagemEnviada = this.state.chat.map((info) => {
        return (
        <p>
            {info.usuario}: {info.mensagem}
        </p>
        );
    });

    return (
    <div className="msgContainer">
      <div className="app">
          <div className="mensagem">
            <div className="text">
              
        {mensagemEnviada}

                <div className="input">
                    <input 
                    className="inputN" 
                    value={this.state.InputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Nome"}
                    />
                    
                    <input
                    className="inputM" 
                    value={this.state.InputMensagem}
                    onChange={this.onChangeInpuMensagem}
                    placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionarMensagem}>Adicionar</button>
                </div>  
            </div>
          </div>
      </div>
      
    </div>

    );


}

}

export default Mensagem;
