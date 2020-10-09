import React, { Component } from 'react';

class Stateful extends Component  {
    constructor(props){
        super(props);

        this.state = {saludo: 'Hola Mundo'}
    }

    render(){
        return (
            <h1>{this.state.saludo}</h1>
        ); 
    }
}

export default Stateful;

