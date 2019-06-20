import React, { Component } from 'react';

class Kelvin extends Component {
    render(){
        const kelvin = 273.1500 + parseFloat(this.props.celsius); {/* räkna ut (konventera) till kelvin genom att använda props från App.js */}

        return(
            <h4>{kelvin} kelvin</h4>  
        )
    }
}

export default Kelvin;