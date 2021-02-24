import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header= (props)=>{
    return <header className={s.header}>
        <img src='https://image.freepik.com/free-vector/car-logo-template_9298-22.jpg'></img>
        <div className = {s.loginBlock}>
            {props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <NavLink to = {'/login/'}>Login</NavLink>}
            </div>
        

    </header>
    
}
export default Header;