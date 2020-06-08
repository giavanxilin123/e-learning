import React from 'react';
import './App.css';
import HomeScreen from './Screens/Home/HomeScreen'
import CourseDetailScreen from './Screens/Detail/CourseDetailScreen';
import Signup from './Screens/Signup/Signup';
import SignIn from './Screens/SignIn/SignIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import {connect} from 'react-redux'
import { createAction } from './Redux/Actions';
import { FETCH_CREDENTIALS } from './Redux/Actions/type';
import {HomeTemplate} from '../src/Templates/HomeTemplate'
import {SignUpTemplate} from '../src/Templates/SignUpTemplate'
import Header from './Layouts/Header/Header'
class App extends Component {
  render(){
    
    return (
      
        <BrowserRouter>
        <Switch>
          {/* Nhớ chữ component viết hoa */}
          <HomeTemplate exact path='/' exact Component={HomeScreen} ></HomeTemplate>
          <Route exact path="/detail" component={CourseDetailScreen}></Route>
          <SignUpTemplate path='/signup' exact Component={Signup} ></SignUpTemplate>
          <Route path="/signin" exact component={SignIn}></Route>
        </Switch>
        </BrowserRouter>
       
       
    );
  }
  _getCredentialsFromLocal =()=>{
    const credentialsStr= localStorage.getItem('credentials');
    
    if(credentialsStr){
      this.props.dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentialsStr)))
    }
  }
 componentDidMount(){
  this._getCredentialsFromLocal()
 }
}


export default connect()(App);