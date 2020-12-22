import React from 'react';
import c from './Navbar.module.css';

const Navbar = ()=>{
  return <nav className ={c.nav}>
      <div className={`${c.item} ${c.active}`}><a>Profile</a></div>
      <div className={c.item}><a>Massege</a></div>
      <div className={c.item}><a>News</a></div>
      <div className={c.item}><a>Music</a></div>
      <div className={c.item}><a>Setteng</a></div>
  </nav>
}

export default Navbar;