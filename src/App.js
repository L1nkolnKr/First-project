import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Content/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/app-reducer'
import Preloader from './Components/common/preloader/Preloader';
import { compose } from 'redux';



class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp();
    }
    render (){
        
        if(!this.props.initialized){
        return <Preloader/>
        }

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><DialogsContainer   />} />
                    <Route path='/content/:userId?' render={()=><ProfileContainer />}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><Login/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
)}};

const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps,{initializeApp})) (App);
