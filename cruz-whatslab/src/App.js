// import './App.css';
// import Mensagem from "./components/mensagem";
import React from 'react';


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
    <div>

      <input
       value={this.state.InputUsuario}
       onChange={this.onChangeInputUsuario}
       placeholder={"Nome"}
       />
       
       <input
       value={this.state.InputMensagem}
       onChange={this.onChangeInpuMensagem}
       placeholder={"Mensagem"}
       />

      <button onClick={this.adicionarMensagem}>Adicionar</button>  
        
      <div>{mensagemEnviada}</div>

    </div>

    );


}

}

export default Mensagem;