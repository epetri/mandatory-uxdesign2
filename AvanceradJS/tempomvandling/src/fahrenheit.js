import React, { Component } from 'react';

class Fahrenheit extends Component {
    render(){
        const fahrenheit = 9 *  parseFloat(this.props.celsius)/ 5 + 32;

        return(
            <h4>{fahrenheit} Fahrenheit</h4>
        )
    }
}

export default Fahrenheit;