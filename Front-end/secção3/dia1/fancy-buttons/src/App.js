// src/App.js
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)
    
    this.state = { 
      cliquesBotao1 : 0,
      cliquesBotao2 : 0,
      cliquesBotao3 : 0,
    }
  }

  // ...
  handleButtonOne() {
    const { cliquesBotao1 } = this.state;
    this.setState((prevState) => ({
      cliquesBotao1: prevState.cliquesBotao1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(cliquesBotao1)}`);
    });
  }

  handleButtonTwo() {
    const { cliquesBotao2 } = this.state;
    this.setState((prevState) => ({
      cliquesBotao2: prevState.cliquesBotao2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(cliquesBotao2)}`);
    });
  }

  handleButtonThree() {
    const { cliquesBotao3 } = this.state;
    this.setState((prevState) => ({
      cliquesBotao3: prevState.cliquesBotao3 + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(cliquesBotao3)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
// ...
  render() {
    const { cliquesBotao1, cliquesBotao2, cliquesBotao3 } = this.state
    return (
      <div>
        <button type = "button" onClick={ this.handleButtonOne } style={ {backgroundColor: this.getButtonColor(cliquesBotao1)}}>Cliques botão 1 - { cliquesBotao1 }</button>
        <button type = "button" onClick={ this.handleButtonTwo } style={ {backgroundColor: this.getButtonColor(cliquesBotao2)}}>Cliques botão 2 - { cliquesBotao2  }</button>
        <button type = "button" onClick={ this.handleButtonThree } style={ {backgroundColor: this.getButtonColor(cliquesBotao3)}}>Cliques botão 3 - { cliquesBotao3  }</button>
      </div>
    );
  }
}

export default App;