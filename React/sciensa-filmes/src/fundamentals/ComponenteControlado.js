import React from "react";
import ComponenteComEstado from "./ComponenteComEstado";

class ComponenteControlado extends React.Component {
  state = {
    inputValue: ""
  };

  render() {
    // console.log("render(): ", this.state);

    return (
      <div style={{ padding: 10 }}>
        <h2>Insira o Texto do Painel</h2>
        <input
          type="text"
          placeholder="Insira do texto ..."
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        <br />
        <br />
        <ComponenteComEstado text={this.state.inputValue} />
      </div>
    );
  }
}

export default ComponenteControlado;
