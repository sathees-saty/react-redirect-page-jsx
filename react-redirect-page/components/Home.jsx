// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h4>Full stack developer - Training & Placement</h4>
			<br />
			<ul>
				<li>
					{/* Endpoint to route to Home component */}
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/about">About</Link>
				</li>
				<li>
					{/* Endpoint to route to Contact Us component */}
					<Link to="/contactus">Contact Us</Link>
				</li>
				<li>
					{/* Endpoint to route to My Cources component */}
					<Link to="/mycources">My Cources</Link>
				</li>

			</ul>
		</div>
	);
};

export default Home;
