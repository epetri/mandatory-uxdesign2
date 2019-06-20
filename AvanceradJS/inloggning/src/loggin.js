import React, {Component} from 'react';
import axios from 'axios';
import {token$, updateToken}  from './store';
import {Redirect} from 'react-router-dom';

class Loggin extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            login: false,
            errMsg: null,
                }
        this.onClick = this.onClick.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
    }

    email(e){
        this.setState({email: e.target.value})
    }

    password(e){ 
        this.setState({password: e.target.value})
    }

    onClick(){
     axios.post('http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000' + '/auth', { email: this.state.email , password: this.state.password })
        .then((Response)=>{        
        updateToken(Response.data.token); // hämtade token
        this.setState({login: true})
        
     })
     .catch((err) => {
         this.setState({ errMsg: 'Incorrect email or password'});
     })
    }
    render(){
        if(token$.value){
            return <Redirect to="/profile"></Redirect>
        }
        return(
                <div>
                    <label>Email</label>
                    <input onChange={this.email} type='email' placeholder='exempel@gmail.com'></input>

                    <label>Password</label>
                    <input onChange={this.password} type='password' placeholder='*********'></input>
                    <button type='submit' onClick={ this.onClick }>loggin</button>

                    {this.state.errMsg ? (
                        <p style= {{color: 'red'}}>{this.state.errMsg}</p>
                    ) :null}
                </div>   
        )
    }
}

export default Loggin;