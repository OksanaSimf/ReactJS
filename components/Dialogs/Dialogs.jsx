import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const dialogItems = (props) => {
    return <div className={s.dialog + '' +s.active}>
</div>}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <div className={s.dialog + '' +s.active}>
                  <NavLink to="/dialogs/1">Oksana</NavLink>
               </div>
               <div className={s.dialog}>
               <NavLink to="/dialogs/2">Alla</NavLink>
               </div>
               <div className={s.dialog}>
               <NavLink to="/dialogs/3">Polina</NavLink>
               </div>
            </div>
            <div className={s.messages}>
                  <div className={s.dialog}>hi</div>
                  <div className={s.dialog}>how a you?</div>
                  <div className={s.dialog}>hzz</div>
            </div>
        </div>
    ) 
    
}

export default Dialogs;