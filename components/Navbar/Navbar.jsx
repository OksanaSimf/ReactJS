import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () =>{
    return <nav className={s.nav}>
     
       <div className={s.item}>
         <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
       <div className={s.item}>
         <NavLink to="/messeges" activeClassName={s.activeLink}>Messeges</NavLink>
       </div>
       <div className={s.item}>
         <a href="/news" >News</a>
       </div>
       <div className={s.item}>
         <a href="/music">Music</a>
       </div>
       <div className={s.item}>
         <a href="/settings">Settings</a>
       </div>
       </nav>

}

export default Navbar;