import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
       <div className="app-wrapper-content">
         <Route path='/dialogs'component={Dialogs} />
         <Route path='/profile'component={Profile} />
         {/*<Route path='/news'component={News} />
         <Route path='/profile'component={Profile} />
         <Route path='/dialogs'component={Dialogs} />*/}
         {/*<Dialogs/>/*/}
         {/*<Profile/>/*/}
         </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
