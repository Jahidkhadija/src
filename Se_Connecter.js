import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./seconnecter.css";
import img2 from "./img_avatar2.png";
import Home from './home.js';
import {Link,BrowserRouter, Route} from 'react-router-dom';
import Admin from'./Admin.js';
import Logo from './logo';
import img from "./banner_este.gif";
import Navbar2 from "./Navbar2.js";
const utilisateur =[
    {nom:"khadija jahid" , password:"hind"}
];

class Se_Connecter extends React.Component
{
        state={
            username:'',
            password:''
        }
        handleo=(e)=>
        {
            this.setState({username:e.target.value})
        }
         handlep=(e)=>
        {
            this.setState({password:e.target.value})
        }
        click=(e)=>
        {
            
                if("khadija jahid"== this.state.username)
                {
                    if("hind"==this.state.password)
                        {this.xi()}
                }
                else
                {
                    alert("essayer une autre fois !!");
                }
            
        }

	render()
	{
       

		return(
            <div id="main"className="App">
    <Logo src={img}/>
    <Navbar2 />
            <div id="liss" className="container">
    <section id="content">
        <form>
            <h1>Connexion</h1>
            <div>
                <input onChange={this.handleo} name="khadija" type="text" placeholder="Entrer votre CIN" required="" id="username" />
            </div>
            <div>
                <input onChange={this.handlep} type="password" placeholder="Entrer votre Mot de passe" required="" id="password" />
            </div>
            <div>
               <Link to='Admin'> <input onClick={this.click} type="submit" value="Se Connecter" /></Link>
                <a href="#">Mot de Passe Oublié?</a>
                <a href="#">Inscription</a>
            </div>
        </form>
        
    </section>
</div></div>);
	}
}
export default Se_Connecter;