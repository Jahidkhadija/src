import React from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from './articles.js';
import Square from './Square';
import Logo from './logo';
import img from "./banner_este.gif";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home.js';
import About from './component/about.js';
import Se_Connecter from './Se_Connecter.js';
import Navbar2 from "./Navbar2.js";
import Admin from'./Admin.js';
import EspaceAdmin from'./EspaceAdmin.js';
class App extends React.Component {
state=
{
  name:'khadija',
  count:0
}
  render()
  {

     return (
      <BrowserRouter>
    <Route path='/' exact component={Home}/>
    <Route path='/About' exact component={About}/>
    <Route path='/articles' component={Articles}/>
    <Route path='/Se_Connecter' component={Se_Connecter}/><br/><br/><br/><br/>
    <Route path='/Admin' component={Admin}/>
     <Route path='/Espace_Admin' component={EspaceAdmin}/>
    </BrowserRouter>
  );
  }
 
}

export default App;
