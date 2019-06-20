import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class DayInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            date: '',
            dagar: null,
        }
        this.getdata = this.getdata.bind(this);
    }

    getdata(){
        axios.get('https://api.dryg.net/dagar/v2.1/'+this.props.year + '/' + this.props.month + '/' + this.props.day)
        .then((respons) => {
          this.setState({date: respons.data})
          this.setState({dagar: respons.data.dagar[0]})
          console.log(this.state.dagar);
          console.log(this.state.date);
          
          })
        .catch(function (error) {
          console.log(error);
          });
    }

  componentDidMount(){
    this.getdata();
  }

  componentDidUpdate(prevProps){      
    if(prevProps.year !== this.props.year || prevProps.month !== this.props.month || prevProps.day !== this.props.day){
        this.getdata();
    }
  }

  render() {
    if (!this.state.dagar) {
        return <p>Loading...</p>;
    }
    return (
      <div className="App">
        {this.props.year  ? (
        <h1>{this.props.year}-{this.props.month}-{this.props.day}</h1> ) : <h1>{this.state.date.startdatum}</h1>
        }
        <h1>{this.state.dagar.veckodag}</h1>
        <h6>{this.state.dagar.namnsdag.join(", ")}</h6>
      </div>
    );
  }
}

export default DayInfo;
