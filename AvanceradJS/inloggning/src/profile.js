import React, {Component} from 'react';
import { token$, updateToken}  from './store';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import './profile.css';



class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            login: true, 
            token: token$.value,
            profile: {
                name: "",
                age: "",
                email: "",
            },
            savedProfile: null,
        }
        this.logout = this.logout.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.submitChanges = this.submitChanges.bind(this);
    }

 componentDidMount(){
  this.subscription = token$.subscribe( (token) => this.setState({ token }));
     Axios.get('http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000/me', {headers:{Authorization: 'Bearer ' + this.state.token}})
         .then((response) => {
          this.setState({profile: response.data.profile})
  })
 }

componentWillUnmount(){
    this.subscription.unsubscribe();
 }
     
 changeName(e){
    const profile = {...this.state.profile};
    let newName = e.target.value;
    profile.name = newName;
    this.setState({ profile });
 }

 changeEmail(e){
    
    const profile = {...this.state.profile};
    let newEmail = e.target.value;
    profile.email = newEmail;
    this.setState({ profile });
 }

 changeAge(e){
    const profile = {...this.state.profile};
    let newAge = e.target.value;
    profile.age = newAge;
    this.setState({ profile });
 }


logout(){
    updateToken(null);
    this.setState({login: false})   
}

submitChanges(){
    Axios.put('http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000/me', this.state.profile, {headers:{Authorization: 'Bearer ' + this.state.token}})
        .then((response) => {
            const savedProfile = {...response.data};

            this.setState({ savedProfile });
        });
}
     
render(){
    const savedProfile = this.state.savedProfile;

    if(!this.state.token){
        return <Redirect to='/loggin'/>
    }
    return(
        <div>
            <div className='nameDiv'>
                <label>Name </label>
                <input onChange={this.changeName} placeholder='edit name'></input>
            </div>

            <div className='emailDiv'>
                <label>Email </label>
                <input onChange={this.changeEmail} placeholder='edit email'></input>
            </div>

            <div className='ageDiv'>
                <label>Age </label>
                <input onChange={this.changeAge} placeholder='edit age'></input>
            </div>

            <button type='submit' onClick={this.submitChanges}>Save Changes</button>
            <button onClick={this.logout}>log out</button>

            {savedProfile ? (
                    <div className='updProf'>
                        <h1>Updated Name: {savedProfile.name}</h1>
                        <h1>Updated Email: {savedProfile.email}</h1>
                        <h1>Updated Age: {savedProfile.age}</h1>
                    </div> 
            ) : 
                    <div >
                        <h1>{this.state.profile.name}</h1>
                        <h1>{this.state.profile.email}</h1>
                        <h1>{this.state.profile.age}</h1>
                    </div>
            }


        </div>
        )
    }
}

export default Profile;