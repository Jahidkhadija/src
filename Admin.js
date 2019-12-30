import React from 'react';
import Dashboard from './Dashboard.js';
import 'bootstrap/dist/css/bootstrap.css';
import img from "./este.jpg";
class Admin extends React.Component
{
	render()
	{
		return(
			<div>	
  				<div className="wrapper fadeInDown">
  				 <div className="fadeIn first">
      			<img src={img} id="icon" alt="User Icon" />
    			</div>
 					<div id="formContent">
    					<form>
     						<input type="text" id="login" className="fadeIn second" name="login" placeholder="Utilisateur"/>
      						<input type="text" id="password" className="fadeIn third" name="login" placeholder="Mot de passe"/>
      						<input type="submit" className="fadeIn fourth" value="Se Connecter"/>
    					</form>
						<div id="formFooter">
      					<a className="underlineHover" href="#">Mot de passe Oublié?</a>
    					</div>
					</div>
				</div>
				<footer className="container-fluid bg-4 text-center">
  <p>@CopyRight <a href="https://www.este.ucam.ac.ma">www.este.ucam.ac.ma</a></p> 
</footer>
			</div>);
	}
}
export default Admin;