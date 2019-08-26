import React from "react";

class ComponenteComEstado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoText: "Componente fechado",
      height: 20
    };
  }

  componentDidMount() {
    console.log("--- Passou no componentDidMount ---");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text && prevState.height !== 20) {
      this.close();
    }
  }

  open = () => {
    // O setState SEMPRE chama o render novamente
    this.setState({ height: 200, infoText: "Componente Aberto" });
  };

  close = () => {
    // O setState SEMPRE chama o render novamente
    this.setState({ height: 20, infoText: "Componente fechado" });
  };

  render() {
    console.log("-- Passou no render do ComponenteComEstado --");
    return (
      <div>
        <div
          style={{
            width: 400,
            height: this.state.height,
            padding: 10,
            backgroundColor: "lightGray",
            overflow: "hidden"
          }}
        >
          {this.state.infoText}
          <p>{this.props.text}</p>
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
