import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import fire from '../../Firebase-config';

class Deshboard extends Component
{

  cerrar()
  {
    fire
    .auth()
    .signOut();
  }
  render()
  {
    return(
      <div>
        <Button
         onClick = {this.cerrar}
         variant="outlined" 
         color="primary">
         Cerrar Sesión
        </Button>
      </div>
    )

  };
}


export default Deshboard