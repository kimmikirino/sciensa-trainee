import React from "react";

class ComponenteComEstado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoText: "Componente fechado",
      height: 20
    };
  }

  open = () => {
    // O setState SEMPRE chama o render novamente
    this.setState({ height: 200, infoText: "Componente Aberto" });
  };

  close = () => {
    // O setState SEMPRE chama o render novamente
    this.setState({ height: 30, infoText: "Componente fechado" });
  };

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            width: 400,
            height: this.state.height,
            padding: 10,
            backgroundColor: "lightGray"
          }}
        >
          {this.state.infoText}
        </div>
        <button type="button" onClick={this.open}>
          Abrir
        </button>
        <button type="button" onClick={() => this.close()}>
          Fechar
        </button>
      </div>
    );
  }
}

export default ComponenteComEstado;
