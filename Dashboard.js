import React from "react";
import Notifications from "./Notifications.js";
import ProjectList from "./ProjectList.js";
class Dashboard extends React.Component
{
	render()
	{
		return(
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList/>
				</div>
				<div className="col s12 m5 offset-m1">
				</div>
				<Notifications/>
			</div>
			   <footer className="container-fluid bg-4 text-center">
  <p>@CopyRight <a href="https://www.este.ucam.ac.ma">www.este.ucam.ac.ma</a></p> 
</footer>
		</div>
		);
	}
}
export default Dashboard;