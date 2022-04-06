import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      msg: null,
      stock: 10,
    };
  }

  // ============> Métodos de mi componente

  handleClick() {
    let counterState = this.state.counter;
    if (counterState >= 0 && counterState < this.state.stock) {
      this.setState({ counter: counterState + 1 });
    }

    if (counterState === this.state.stock) {
      alert(`El stock del producto es de ${this.state.stock}`);
    }

    if (counterState >= 0) {
      this.setState({ msg: null });
    }
  }

  handleClickDecrementar() {
    let counterState = this.state.counter;
    if (counterState <= 0) {
      this.setState({ msg: "Error no puedes decrementar" });
    } else {
      this.setState({
        counter: counterState - 1,
        msg: null,
      });
    }
  }

  render() {
    return (
      <div className="buttonComponent">
        <span>
          <button className="mybutton" onClick={() => this.handleClick()}>
            {this.props.texto}
          </button>

          <button
            className="mybutton"
            onClick={() => this.handleClickDecrementar()}
          >
            Eliminar
          </button>
        </span>

        <p>
          Carrito: {" "}
          {this.state.counter <= 0
            ? "Todavía no tienes nada en el carrito"
            : this.state.counter}
        </p>

        {this.state.msg ? <h4>{this.state.msg}</h4> : null}
      </div>
    );
  }
}

export default Button;
