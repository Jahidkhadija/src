import React from "react";
import './EspaceAdmin.css';
class EspaceAdmin extends React.Component
{
	render()
	{
		return(
			<div>
    <div className="sidebar">
    <header>Espace Admin</header>
  <ul>
    <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
    <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
    <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
    <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
    <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
    <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
    <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
  </ul>
</div>
 <section></section>
</div>);
	}
}
export default EspaceAdmin;