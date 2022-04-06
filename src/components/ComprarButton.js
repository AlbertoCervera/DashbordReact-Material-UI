import React from "react";
import Button from '@mui/material/Button';

class ComprarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //Métodos del Botón

  render(){
    return(
        <div>
            <Button variant="contained">Comprar</Button>
        </div>
      )
  }

}


export default ComprarButton;