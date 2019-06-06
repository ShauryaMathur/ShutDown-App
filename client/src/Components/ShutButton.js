import React, { Component } from 'react'
import axios from 'axios';
import {Button} from 'reactstrap';

class ShutButton extends Component {

  shutit=()=>{

    axios.get('/shutit')
        .then(res=>console.log(res))
        .catch(console.error);
  }

  render() {
    return (
      <div>
        <Button onClick={this.shutit}>SHUT IT! </Button>
      </div>
    )
  }
}

export default ShutButton;
